import { PureComponent } from 'react';
import Container from './Component/Container';
import Section from './Component/Section';
import ContactForm from './Component/ContactForm';
import ContactList from './Component/ContactList';
import Filter from './Component/Filter';
import shortid from 'shortid';

class App extends PureComponent {
  state = {
    contacts: [],
    filter: '',

  }

  componentDidMount() {
    console.log('componenDidMount');
    let contacts = localStorage.getItem('contacts');
    if (contacts) {
      contacts = JSON.parse(contacts);
      this.setState({ contacts: contacts})
    }
  } 

  syncLocalStorage = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('obnova');
//     if (this.state.contacts !== prevState.contacts) {
// }
//   };
  
  addContact = ({ name, number }) => {

    if (this.state.contacts.find((el) => el.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    } 

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }),() => {this.syncLocalStorage()} );
  };
 
  filterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  
  

  formSubmitData = data => {
    console.log(data);
    this.addContact(data)
  }

  handleVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    
    return (
     this.state.contacts.filter(contact => 
     contact.name.toLocaleLowerCase().includes(normalizedFilter))
    )
  }

  deleteContact = (contactID) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactID
      )
    }),() => {this.syncLocalStorage()})
  };
 

   

  render() {
    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm onSubmitData={this.formSubmitData}/>
        </Section> 
        <Section title={'Contacts'}>
          <Filter
            value={this.state.filter}
            onChange={this.filterChange}
          />
          <ContactList
            list={this.handleVisibleContacts()}
            onClick={this.deleteContact}/>
        </Section>
    </Container>
  )
}
};

export default App;

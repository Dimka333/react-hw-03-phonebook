import { Component } from 'react';
import Container from './Component/Container';
import Section from './Component/Section';
import ContactForm from './Component/ContactForm';
import ContactList from './Component/ContactList';
import Filter from './Component/Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },],
    filter: '',

  }

  componentDidMount() {
    console.log('componenDidMount');
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    this.setState({ contacts: parseContacts})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
  };
  
  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (this.state.contacts.find((el) => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    } 
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
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
    }))
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

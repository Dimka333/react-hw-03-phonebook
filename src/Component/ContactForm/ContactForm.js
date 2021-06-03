import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss'
import { Component } from 'react'


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChangeForm = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value})
    }
    
    handleSubmitForm = e => {
        e.preventDefault()
        this.props.onSubmitData(this.state)
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <label className={styles.label}>
                    Name<input
                    className={styles.input}
                        type="text"
                        name='name'
                        onChange={this.handleChangeForm}
                        value={this.state.name} />
                </label>
                <label className={styles.label}>
                 Number<input
                 className={styles.input}
                        type="tel"
                        value={this.state.number}
                        onChange={this.handleChangeForm}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    />
                </label>
                <button className={styles.button} type='submit'>Add contact</button>
        </form>
    )
}
}


export default ContactForm;
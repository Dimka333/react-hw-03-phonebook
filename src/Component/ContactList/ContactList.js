import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';
import ContactItem from '../ContactItem/'


const ContactList = ({ list, onClick }) => {

    return (
        <ul className={styles.list}>
            {list.map(item => (
                <ContactItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    number={item.number}
                    onClick={onClick}/>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    list : PropTypes.array.isRequired,
}

export default ContactList;
import PropTypes from 'prop-types'
import styles from './ContactItem.module.scss'


const ContactItem = ({ id, name, number, onClick }) => {
    return (
        <li className={styles.item}>{name}: {number}
            <button className={styles.button} type='button' onClick={() =>
                onClick(id)}>Delete</button></li>
       
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
};

export default ContactItem;
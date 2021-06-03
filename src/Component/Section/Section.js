import styles from './Section.module.scss'
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object]).isRequired
};

export default Section;
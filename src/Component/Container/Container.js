import styles from './Container.module.scss'
import PropTypes from 'prop-types';

const Container = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object]).isRequired
};

export default Container;
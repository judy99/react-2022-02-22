import styles from './styles.module.css';
import banner from './img/banner.jpg';
import PropTypes from 'prop-types';


export const Banner = ({ heading, children }) => (
  <div className={styles.banner}>
    <img src={banner} className={styles.img} alt="banner" />
    <div className={styles.caption}>
      <h2 className={styles.heading}>{heading}</h2>
      <div>{children}</div>
    </div>
  </div>
);

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
}

// heading is marked by isRequired, so you can omit defaultProps
// Banner.defaultProps = {
//   heading: '',
// };

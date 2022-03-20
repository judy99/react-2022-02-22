import styles from './styles.module.css';
import { FaTrashAlt } from "react-icons/fa";

const icons = {
    plus: '+',
    minus: '-',
    remove: <FaTrashAlt />
};

export const Button = ({ icon, ...props }) => (
    <button className={styles.button} {...props}>
        {icons[icon]}
    </button>
)


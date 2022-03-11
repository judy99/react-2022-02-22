import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';

export const Header = () => (
    <header className={styles.header}>
        <Logo />
    </header>
);

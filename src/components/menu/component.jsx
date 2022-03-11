import { Product } from "../product/component";
import styles from './styles.module.css';

export const Menu = ({ menu }) => {
    return (
        <div className={styles.menu}>
            <div>
                {menu.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
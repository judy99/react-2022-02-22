import { Product } from "../product/component"

export const Menu = ({ menu }) => {
    return (
        <div>
            {
                menu.map(({ id, name, ingredients, price }) => 
                <Product key={id} name={name} ingredients={ingredients} price={price} />)
            }
        </div>
    );
}
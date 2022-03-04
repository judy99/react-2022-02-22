export const Tabs = ({ restaurants, onTabClick }) => {
    return <div>
        {restaurants.map(({ id, name }) =>
            <button key={id} onClick={() => onTabClick(id)}>{name}</button>)}
    </div>
}
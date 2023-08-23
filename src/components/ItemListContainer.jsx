import Item from './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <main>
            <h1 className={Item.texto}>{greeting}</h1>
        </main>
)
};

export default ItemListContainer
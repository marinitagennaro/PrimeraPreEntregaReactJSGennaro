import ItemList from './ItemList';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
    return (
        
        <div className= "item-list-container">
            <h1>{greeting}</h1>
            <ItemList />
        </div>
);
}
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

export default function ItemDetailContainer () {
    const[producto, setProducto] = useState();

    useEffect(() => {
        fetch("productos.json")
        .then((res) => res.json())
        .then((data) => setProducto(data));
    }, []);

    if(!producto) return null;

    return (
        <div className="item-detail-container">
            <ItemDetail producto={producto} />
        </div>
    );
}
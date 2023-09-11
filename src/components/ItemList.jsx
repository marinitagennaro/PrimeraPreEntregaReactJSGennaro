import React, {useEffect, useState} from "react";
import productosJson from "../productos.json";
import Item from "./Item";

function getProductos() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productosJson);
        }, 2000);
    });
}

export default function ItemList() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProductos().then((data) => {
            setProductos(data);
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Cargando...</p>

    return (
        <div className="item-list">
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );

}
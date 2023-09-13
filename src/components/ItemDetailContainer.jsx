import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import productos from "../productos.json";

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}

export default function ItemDetailContainer () {
    const [productos, getProductos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if(!id) {
            mockAPI().then((data) => getProductos(data));
        }else{
            mockAPI().then((data) => {
                const productoEncontrado = data.find(item => item.nombre === id)
                getProductos(productoEncontrado)
            });  
        }
    
    }, [id]);




    if(!productos) return null;


    return (
        <div className="item-detail-container">
            <ItemDetail productos={productos} />
        </div>
    );
}
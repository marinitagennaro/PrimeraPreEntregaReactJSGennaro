import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import ItemList from "./ItemList";


export default function Categorias() {
    const [categoria, setCategoria] = useState();
    const [loading, setLoading] = useState(true);
    const { tipo } = useParams()

    useEffect(() => {
        fetch(`productos.json/${categoria}`)
        .then((res) => res.json())
        .then((data) => setCategoria(data))
        .finally(() => setLoading(false));
    }, [tipo]);

    if(loading) {
        return <h1 style={{textAlign: "initial"}}>Esa categoria no esta disponible</h1>;
    }

    return (
        <main>
            <h1>{categoria.nombre}</h1>
            <section style={{display: "flex", flexWrap: "wrap", gap:20 }}>
                {categoria.productos.map((item) => (
                    <a href={``}>
                        <h2 style={{textTransform:"capitalize"}}>{item.productos.nombre}</h2>
                    </a>
                ))}
            </section>
        </main>
    )
}
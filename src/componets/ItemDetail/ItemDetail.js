import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detail }) => {
    const navigate = useNavigate();
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(detail.stock === 0 ? 0 : 1);
    return <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', flexDirection: 'column' }} >
        <img src={`/img/${detail.image}`} alt={detail.title} width="200px" />
        <h2> {detail.title} </h2>
        <h2> {detail.description} </h2>
        <h2> {detail.price} USD </h2>
        <h4> Stock disponible: {detail.stock} </h4>
        <ItemCount counter={counter} setCounter={setCounter} stock={detail.stock} />
        <button onClick={() => navigate('/')}>Seguir comprando</button>
        <button disabled={counter > detail.stock} onClick={() => addItem(detail, counter)}>Agregar al carrito</button>
        <button onClick={() => navigate('/cart')}>Completar mi compra</button>
    </div>
};

export default ItemDetail;
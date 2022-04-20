import { useContext } from "react";
import { countContext } from "../contexts/countContext";
import '../index.css'
import WishlistIcon from "./wishlistIcon";
import {Link}from 'react-router-dom';


function Navigation() {
    const {count} = useContext(countContext);
    const style = {
        width: "10%",
        margin: "0 1rem",
        minWidth: "100px",
        // border: "1px solid red"
        // zIndex: 1
    }

    
    return (
        <nav>
            <Link to="/"><img src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Adidas.png" style={style} alt="icon" /></Link>
            <WishlistIcon count={count} />
        </nav>
    )
}

export default Navigation;
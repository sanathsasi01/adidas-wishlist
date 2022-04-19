// import SearchForm from "./searchForm";
import { useContext } from "react";
import { countContext } from "../contexts/countContext";
import '../index.css'
import WishlistIcon from "./wishlistIcon";
import {Link}from 'react-router-dom';


function Navigation() {
    const {count} = useContext(countContext);

    
    return (
        <nav>
            <Link to="/"><img src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Adidas.png" style={{width: "10%", margin: "0 1rem"}} /></Link>
            <WishlistIcon count={count} />
            {/* <SearchForm /> */}
        </nav>
    )
}

export default Navigation;
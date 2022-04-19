import '../index.css'
import {Link} from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";

function WishlistIcon(props) {
    const style = {
        fontSize : "3rem", 
        float: "right",
        position: "relative",
        color : "Black",
        margin: "1rem"
    }
    const countStyle = {
        position: "absolute", 
        right: ".8rem", 
        top: "1rem", 
        backgroundColor: "black",
        color: "white",
        borderRadius: "50%",
        padding: "0rem .5rem",
        textAlign: "center"
    }
    return (
        <Link to="/wishlist" className="">
                <AiOutlineShopping  style={style} />
                <p className="wishlist-count" style={countStyle}>{props.count}</p>
        </Link> 
    )
}

export default WishlistIcon;
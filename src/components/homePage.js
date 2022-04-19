import SearchForm from "./searchForm";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { countContext } from "../contexts/countContext";

function HomePage() {
    const {count} = useContext(countContext);

    return (
        <div>
            <Link to="/wishlist" className="wishlist-btn">My Wishlist {count} </Link>
            <SearchForm />
        </div>
    )
}

export default HomePage;
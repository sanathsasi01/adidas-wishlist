import SearchForm from "./searchForm";
// import { useContext } from "react";
// import { countContext } from "../contexts/countContext";
import '../index.css'
// import WishlistIcon from "./wishlistIcon";
import Navigation from "./navigation";


function HomePage() {
    // const {count} = useContext(countContext);

    
    return (
        <div>
            <Navigation />
            {/* <img src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Adidas.png" style={{width: "10%", margin: "0 1rem"}} />
            <WishlistIcon count={count} /> */}
            <SearchForm />
        </div>
    )
}

export default HomePage;
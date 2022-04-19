import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function SearchForm() {

    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValue(e.target.value.replace(/ +(?= )/g,''))
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if(String(value) !== "") {
            navigate("/search-results", {state: value})
        }
    }

    return (
        <div>
            <form method="GET">
                {/* <h1 className="form-header">adidas</h1> */}
                <input type="text" placeholder="Search products" className="form-controls" value={value} onChange={handleChange} required />
                <button type='submit' onClick={handleSearch} className="search" >Search</button>
            </form>
        </div>
    )
}

export default SearchForm;
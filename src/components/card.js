import '../index.css'

function Card(props) {
    return  (
        <div className="card" style={{width:"18rem"}}>
            <img src={props.img} className="card-img-top" alt="product" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.subTitle}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item original-price"> Price : <strong>{props.price} &euro;</strong> </li>
                <li className="list-group-item"> Sale Price : <strong>{props.salePrice} &euro;</strong> </li>
            </ul>
            <div className="card-body">
                <button className="card-link" onClick={(e) => props.handleClick(e)} id={props.id} > {props.btn === 'add' ? "Add to cart" : "Remove from cart" } </button>
            </div>
        </div>
    )
}

export default Card;
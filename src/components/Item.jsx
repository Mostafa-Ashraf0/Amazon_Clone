import "./Item.css"

export default function Item({data,info,id}){
    const quan = info[id].quantity;
    return(
        <div className="item" key={data.id}>
                <img src={data.image} alt="product" />
                <div className="text1">
                    <h2>{data.title}</h2>
                    <span className="price">Item price: {data.price}<span className="inner">$</span></span>
                    <span className="rate">Rating: {data.rating.rate}/5</span>
                    <span>Quantity: {quan}</span>
                    <span>Total Price: {(data.price * quan).toFixed(2)} $</span>
                </div>
        </div>
    )
}
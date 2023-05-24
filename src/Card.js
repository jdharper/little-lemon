

export function Card(props) {
    const { img, name, price, description } = props

    return <>
        <div className="card">
            <img src={img} alt={name} />
                <h1>{name}</h1>
                <span className="price">{price}</span>
                <p>
                    { description }
                </p>
                <p className="order">Order a delivery</p>
        </div>
    </>
}
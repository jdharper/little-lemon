import { Link } from "react-router-dom";
import hero_img from './assets/restaurantfood.jpg'

export function Hero(props) {
    return <section className="hero">
        <div className="hero-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/booking" role="button" aria-label="On Click">Reserve a Table</Link>
        </div>
        <img className="hero-right" src={hero_img} alt="deli sandwhiches" />
    </section>
}
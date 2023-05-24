import { Card } from './Card.js'
import bruchetta from './assets/bruchetta2.jpg'
import lemon_desert from './assets/lemon_dessert2.jpg'
import greek_salad from './assets/greek_salad.jpg'

const specials = [
    { img: greek_salad,  name:"Greek Salad",   price: "$12.99",
      description: "The famous greek salad of cripy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    { img: bruchetta,    name: "Bruchetta",    price: "$ 5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    { img: lemon_desert, name: "Lemon Desert", price: "$ 5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined."
    },
]


export function Specials() {
    return <section className="specials">
        <div className="specials-header">
            <h1>This Weeks Specials!</h1>
            <a href="#online-menu" role="button">Online Menu</a>
        </div>
        <div className="card-block">
            { specials.map((s) => { return (<Card { ... s} />); }) }
        </div>
        </section>

}
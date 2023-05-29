import { Stars } from './Stars.js'

const testimonials = [

    { portrait: "https://randomuser.me/api/portraits/men/32.jpg", name: "Mark D.", rating: 5,
      text: "The Little Lemon is a hidden gem! The flavors of the Mediterranean come alive in every dish. The staff is friendly, and the atmosphere is cozy. Highly recommended!"
    },
    { portrait: "https://randomuser.me/api/portraits/women/63.jpg", name: "Sarah L.", rating: 4,
      text: "The food is consistently flavorful, and the presentation is stunning. It's my go-to place for Mediterranean cuisine."
    },
    { portrait: "https://randomuser.me/api/portraits/men/49.jpg", name: "Alex C.", rating: 4.5,
      text: "The Little Lemon offers a delightful taste of the Mediterranean. The menu has a great variety, and the food is prepared with love and care. A must-try for any food lover."
    },
    { portrait: "https://randomuser.me/api/portraits/women/27.jpg", name: "Emily M.", rating: 5,
      text: "A culinary masterpiece. The fusion of Mediterranean flavors creates a symphony of taste in every bite. A gastronomic delight!"
    },

]

function TestCard(props) {
    const {portrait, name, text, rating} = props
    console.log("props", props)
    console.log("portrait", portrait)
    return <div className="card">
        <Stars n={rating} />
        <img src={portrait} alt="Portrait"/>
        <span>{name}</span>
        <p>{text}</p>
        </div>
}
export function Testimonials(props) {
    const testCards = []
    for (let i = 0; i < 4; ++i) {
        const t = testimonials[i]
        console.log("t =", t)
        /* portrait={t.portrait}*/
        testCards.push(<TestCard key={i} {...t} />)
    }

    return <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="card-block">
        {testCards}
        </div>
    </div>

}
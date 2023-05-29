import star from './assets/Star.svg'
import star_half from './assets/Star-half.svg'

export function Stars(props) {
    let { n, ...divProps } = props

    // Round the number of starts, 'n' to nearest half.  Limit the range between 1/2 and 5 stars.
    if (n === undefined)
        n = 0.5
    n = Math.round(n * 2) / 2
    if (n > 5)
        n = 5
    else if (n < 0.5)
        n = 0.5

    const starArray = []
    for(let i = 0; i < 5; ++i) {
        if (n >= 0.999)
            starArray.push(<img key={i} src={star} alt="star"/>)
        else if (n >= 0.499)
            starArray.push(<img key={i} src={star_half} alt="half star"/>)
        else
            starArray.push(<img key={i} src={star} style={{visibility: "hidden"}} alt="hidden star"/>)
        --n;
    }

    //console.log("divProps =", divProps)
    return <div className="stars" {...divProps}>{starArray}</div>

}
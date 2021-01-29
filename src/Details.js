import React from "react"
import pet from "@frontendmasters/pet"

// const Details = props => {
//     return (
//         <pre>
//             <code>
//                 {JSON.stringify(props, null, 4)}
//             </code>
//         </pre>
//     )
// }
class Details extends React.Component {
    // constructor(props) {
    //     super(props)
        
    // }
    state = {
        loading: true,
    }
    componentDidMount() {
        pet.animal(this.props.id).then(({ animal }) => this.setState({
            name: animal.name,
            animal: animal.name,
            location: `${animal.contact.address.city}. ${animal.contact.address.state}`,
            description: animal.description,
            media: animal.photos,
            breed: animal.breeds.primary,
            loading: false,
        }, console.error)
        )
    }
    render() { // this is mostly how functional component works
        const { name, animal, location, description, media, breed, loading} = this.state
        if (loading) return (<h1>Loading...</h1>)
        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
export default Details
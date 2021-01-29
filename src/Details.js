import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

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
    showModal: false,
  };
  componentDidMount() {
    // throw new Error('s')
    pet.animal(this.props.id).then(({ animal }) =>
      this.setState(
        {
          name: animal.name,
          animal: animal.name,
          location: `${animal.contact.address.city}. ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
          url: animal.url,
        },
        console.error
      )
    );
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => navigate(this.state.url);

  render() {
    // this is mostly how functional component works
    const {
      name,
      animal,
      location,
      description,
      media,
      breed,
      loading,
      showModal,
    } = this.state;
    if (loading) return <h1>Loading...</h1>;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>

          <ThemeContext.Consumer>
            {
              // themeHook is entire array in context
              // (themeHook) => (
              //     <button style={{ backgroundColor: themeHook[0] }}>
              //         Adopt {name}
              //     </button>
              // )
              ([theme]) => (
                <button onClick={this.toggleModal } style={{ backgroundColor: theme }}>Adopt {name}</button>
              )
            }
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name} ?</h1>
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No, I'm a monster </button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
// export default Details
// higher order
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

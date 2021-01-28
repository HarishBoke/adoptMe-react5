
const Pet = ({name, animal, breed}) => {
    return React.createElement('div', {},
        [
            React.createElement('h1', {}, name),
            React.createElement('h2', {}, animal),
            React.createElement('h3', {}, breed)
            // element , props like id , child
        ]
    )
}

const App = () => {
    return React.createElement(
        'div',
        { id: 'something-important'},
            React.createElement('h1', {}, 'Adopt Me!'),
           // React.createElement(Pet), // other two params optional
            React.createElement(Pet, {
                name: 'Sheru',
                animal: 'Dog',
                breed: 'Havanese',
            }),
            React.createElement(Pet, {
                name: 'Pepper',
                animal: 'Bird',
                breed: 'Cockatiel',
            }),
            React.createElement(Pet, {
                name: 'Sizzer',
                animal: 'Cat',
                breed: 'KNQ',
            }),
    )
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))
// 1) Impirt the React and ReactDOM Libraries
import React from 'React'; // Library that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom/client'; // Library that knows how to get a component to show up in the browser

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');
// 3)  Tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
let APP = () => {
    let message = 'Bye there!'
    if (Math.random() > 0.5)  {
        message - 'Hello there!';
    }


    return <h1>{message}</h1>;
}
// 5) Show the component on the screen
root.render(<App />)

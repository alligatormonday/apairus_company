import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Motion from './Motion.js';
import Rentals from './Rentals.js';
import About from './About.js';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">


                <Route exact path="/" component={Motion} />
                <Route path="/rentals" component={Rentals} />
                <Route path="/about" component={About} />

                <div className="navigation">

                    <div className="navigation-sub">

                        <Link to="/" className="item">Projects</Link>
                        <Link to="/rentals" className="item">Rentals</Link>
                        <Link to="/about" className="item">About</Link>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

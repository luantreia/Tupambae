import React, { useState } from 'react';
import './Menu.css';
import './Page.js';

function Menu() {
    const [Page] = useState('map');

    return (
        <div className="w3-display-bottommiddle">
            <div className="menu-icons w3-card w3-margin">
                <button 
                    className="material-icons w3-padding" 
                    onClick= {() => Page('map')}
                >
                    map
                </button>
                <button 
                    className="material-icons w3-padding"
                    onClick= {() => Page('account')}
                >
                    account_circle
                </button>
                <button 
                    className="material-icons w3-padding"
                    onClick= {() => Page('search')}
                >
                    search
                </button>
                <h1>'Page'</h1>
            </div>
        </div>
    );
}
export default Menu;
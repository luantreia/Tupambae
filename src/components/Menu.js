import React, { useState } from 'react';
import './Menu.css';
import './Page.js';

function Menu() {
    return (
        <div className="w3-display-bottommiddle">
            <div className="menu-icons w3-card w3-margin">
                <button 
                    className="material-icons w3-padding" 
                >
                    map
                </button>
                <button 
                    className="material-icons w3-padding"
                >
                    account_circle
                </button>
                <button 
                    className="material-icons w3-padding"
                >
                    search
                </button>
            </div>
        </div>
    );
}

export default Menu;
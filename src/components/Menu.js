import React, { useState, useEffect } from 'react';
import './Menu.css';
import App from '../App';

function Menu() {
    const [Page, setPage] = useState('Map');

    useEffect(() => {
        
    })

    return (
        <div>
            <div className="w3-display-bottommiddle">
                <div className="menu-icons w3-card w3-margin">
                    <button 
                        className="material-icons w3-padding" 
                        onClick= {() => setPage('Map')}
                        >
                        map
                    </button>
                    <button 
                        className="material-icons w3-padding"
                        onClick= {() => setPage('Account')}
                        >
                        account_circle
                    </button>
                    <button 
                        className="material-icons w3-padding"
                        onClick= {() => setPage('Search')}
                        >
                        search
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Menu;
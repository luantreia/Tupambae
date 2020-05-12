import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="w3-display-bottommiddle">
            <div className="menu-icons material-icons w3-card w3-margin">
                <Link
                    className="menu__link"
                    to='/map'
                >
                    map
                    </Link>
                <Link
                    className="menu__link"
                    to='/account'
                >
                    account_circle
                    </Link>
                <Link
                    className="menu__link"
                    to='/search'
                >
                    search
                    </Link>
            </div>
        </div>
    );
}
export default Menu;
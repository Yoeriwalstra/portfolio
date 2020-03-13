import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <ul
            style={{
                display: 'flex',
                listStyle: 'none',
                justifyContent: 'space-between',
                marginLeft: 0,
            }}
        >
            <li>
                <Link to="#bio">Bio</Link>
            </li>
            <li>
                <Link to="#profile">Profile</Link>
            </li>
            <li>
                <Link to="#contact">Contact</Link>
            </li>
        </ul>
    );
};

export default Navigation;

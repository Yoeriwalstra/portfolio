import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    justifyContent: 'space-around',
                    marginLeft: 0,
                    marginBottom: 0
                }}
            >
                <li>
                    <a href="#bio">Bio</a>
                </li>
                <li>
                    <a href="#profile">Profile</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

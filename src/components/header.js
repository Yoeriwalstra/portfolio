import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';

const Header = ({ siteTitle }) => (
    <header>
        <div className={'container'}>
            <div className={'content'}>
                <div className={'header-image'}/>

                <h1>{siteTitle}</h1>
                <h2>who?</h2>
                <h2>what?</h2>

                <Navigation />
            </div>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;

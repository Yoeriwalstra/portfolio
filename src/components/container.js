import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <section>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                {children}
            </div>
        </section>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;

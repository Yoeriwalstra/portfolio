import React from 'react';

const Footer = () => {
    return (
        <footer
            style={{
                background: `rebeccapurple`,
                color: `white`,
            }}
        >
            © {new Date().getFullYear()}, Designed and built by{' '}
            <a
                href="https://github.com/Yoeriwalstra"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: `white` }}
            >
                me
            </a>{' '}
            with
            {` `}
            <a
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: `white` }}
            >
                Gatsby
            </a>
        </footer>
    );
};

export default Footer;

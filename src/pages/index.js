import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Profile from '../components/profile';
import Contact from '../components/contact';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to my website.</p>
        {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
        {/*    <Image />*/}
        {/*</div>*/}
        <Bio />

        <Profile />

        <Contact />
    </Layout>
);

export default IndexPage;

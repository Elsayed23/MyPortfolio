import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title, desc }) => {
    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | Elsayed Portfolio`}>
            <meta property="og:title" content={`${title} | Elsayed Portfolio`} />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
        </Helmet>
    );
}

export default PageTitle;
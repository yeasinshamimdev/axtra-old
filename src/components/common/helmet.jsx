import React from 'react';
import { Helmet } from 'react-helmet'

const PageHelmet = ({title}) => {
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Axtra HTML5 Template" />

                <title>{title}</title>

                {/* Fav Icon   */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Helmet> 
        </React.Fragment>
    );
};

export default PageHelmet;
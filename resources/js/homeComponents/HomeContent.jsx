import React from 'react';
import AboutMe from './contents/AboutMe';
import Portfolio from './contents/Portfolio';
import Contacts from './contents/Contacts';

function HomeContent(props) {
    switch (props.tab) {
        case 'me-tab':
            return (
                <div>
                    <AboutMe />
                </div>
            )
        case 'portfolio-tab':
            return (
                <div>
                    <Portfolio />
                </div>
            )
        case 'contacts-tab':
            return (
                <div>
                    <Contacts />
                </div>
            )
        default:
            return (
                <div>
                    <AboutMe />
                </div>
            )
    }
}

export default HomeContent
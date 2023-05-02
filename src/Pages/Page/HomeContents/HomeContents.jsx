/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import ChefsSection from './ChefSection/ChefsSection';
import OurStrength from './OurStrength';

const HomeContents = () => {
    return (
        <div style={{ backgroundColor: "#101418", color: "white" }}>
            <Banner></Banner>
            <ChefsSection></ChefsSection>
            <OurStrength></OurStrength>
        </div>
    );
};

export default HomeContents;
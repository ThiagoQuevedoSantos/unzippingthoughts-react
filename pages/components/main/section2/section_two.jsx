import React, { Component } from 'react';
import DivLeft from './S2divLeft/S2divLeft';
import DivRight from './S2divRight/S2divRight';


class SectionTwo extends React.Component {
    render() {
        return (
            <section> 
                <DivLeft />
                <DivRight />
            </section>
        );
    }
}

export default SectionTwo;
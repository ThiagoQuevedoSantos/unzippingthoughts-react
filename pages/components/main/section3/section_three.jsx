import React, { Component } from 'react';
import DivLeft from './S3divLeft/S3divLeft';
import DivRight from './S3divRight/S3divRight';


class SectionThree extends React.Component {
    render() {
        return (
            <section> 
                <DivLeft />
                <DivRight />
            </section>
        );
    }
}

export default SectionThree;
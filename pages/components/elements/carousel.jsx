import React, { Component } from 'react';
import styled from 'styled-components';
import { images } from '../../assets/carousel/images';
import Arrow from '../../assets/carousel/arrow.png'

var precedentImg = images.length - 1;
var indexImg = 0;
var nextImg = 1;



function precedent() {
    precedentImg--;
    indexImg--;
    nextImg--;

    if (precedentImg < 0) {
        precedentImg = images.length - 1;
    }
    if (indexImg < 0) {
        indexImg = images.length - 1;
    }
    if (nextImg < 0) {
        nextImg = images.length - 1;
    }


}
function next() {
    precedentImg++;
    indexImg++;
    nextImg++;

    if (precedentImg > images.length - 1) {
        precedentImg = 0;
    }
    if (indexImg > images.length - 1) {
        indexImg = 0;
    }
    if (nextImg > images.length - 1) {
        nextImg = 0;
    }
}



const DivCarousel = styled.div`
    position: relative;
    display: flex;

    width: 100%;
    height: 80vh;
`

/*************************************_DivsMaiores_***************************************************/

const DivLeft = styled.div`
    position: relative;
    width: 25%;
    height: 100%;

    padding: 0.3vw;

    display: flex;
    justify-content: start;
    align-items: center;
`
const DivMain = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    padding: 0.3vw;
`
const DivRight = styled.div`
    position: relative;
    width: 25%;
    height: 100%;

    padding: 0.3vw;

    display: flex;
    justify-content: end;
    align-items: center;
`

/*************************************_DivsMenores_***************************************************/

const DivLeftInterior = styled.div`
    position: relative;
    width: 100%;
    height: 95%;
`
const DivMainInterior = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
const DivRightInterior = styled.div`
    position: relative;
    width: 100%;
    height: 95%;
`

/*************************************_Arrows_***************************************************/

const ArrowLeft = styled.button`
    position: absolute;
    z-index: 1000;

    cursor: pointer;
    
`
const ImgArrowLeft = styled.img`
    transform: rotate(180deg);
    width: 5vw;
    border-radius: 100%;
    &:hover{
        background-color: rgb(85,85,85, 0.2);
        transition-duration: 300ms;
    }
`
const ArrowRight = styled.button`
    position: absolute;
    z-index: 1000;

    cursor: pointer;
`
const ImgArrowRight = styled.img`
    width: 5vw;
    border-radius: 100%;
    &:hover{
        background-color: rgb(85,85,85, 0.2);
        transition-duration: 300ms;
    }
`

/*************************************_Imagens_***************************************************/

const ImageLeft = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;

    -webkit-mask-image:-webkit-gradient(linear, right bottom, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));
`
let ImageMain = styled.img`
    position: relative;
    width: 100%;
    height: 100%;

    transition: width 1s, height 1s;
`
const ImageRight = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;

    -webkit-mask-image:-webkit-gradient(linear, left bottom, right bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
`



class Carousel extends Component {

    constructor() {
        super()
        this.state = {
            imagens: [precedentImg, indexImg, nextImg]
        }
    }

    handleLeftClick = (e) => {
        e.preventDefault();

        precedent();
        this.setState({
            imagens: [precedentImg, indexImg, nextImg]
        })
    }

    handleRightClick = (e) => {
        e.preventDefault();

        next();
        this.setState({
            imagens: [precedentImg, indexImg, nextImg]
        })
    }

    render() {
        return (
            <DivCarousel>
                <DivLeft>
                    <DivLeftInterior>
                        <ImageLeft src={images[this.state.imagens[0]]} />
                    </DivLeftInterior>

                    <ArrowLeft onClick={this.handleLeftClick}>
                        <ImgArrowLeft src={Arrow} />
                    </ArrowLeft>
                </DivLeft>
                <DivMain>
                    <DivMainInterior>
                        <ImageMain src={images[this.state.imagens[1]]} />
                    </DivMainInterior>
                </DivMain>
                <DivRight>
                    <DivRightInterior>
                        <ImageRight src={images[this.state.imagens[2]]} />
                    </DivRightInterior>

                    <ArrowRight onClick={this.handleRightClick}>
                        <ImgArrowRight src={Arrow} />
                    </ArrowRight>
                </DivRight>
            </DivCarousel>
        );
    }
}

export default Carousel;
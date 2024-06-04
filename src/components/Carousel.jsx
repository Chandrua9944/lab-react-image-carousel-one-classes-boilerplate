import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(){
    super();
    this.state={
        currentIndex: 0
    };
}

    moveRight(){
        this.setState({
            currentIndex: this.state.currentIndex >= images.length - 1 ? 0 : this.state.currentIndex + 1
        });
    }

    moveLeft(){
        this.setState({
            currentIndex: this.state.currentIndex <= 0 ? images.length - 1 : this.state.currentIndex - 1
        });
    }

    render(){
        return(
            <div className="image-box">
                <div className="left-arrow symbol" onClick={() => this.moveLeft()}><ArrowBackIosIcon/></div>
                <div id="head">{images[this.state.currentIndex].title}</div>
                <img src={images[this.state.currentIndex].img} alt=""/>
                <div id="text">{images[this.state.currentIndex].subtitle}</div>
                <div className="right-arrow symbol" onClick={() => this.moveRight()}><ArrowForwardIosIcon/></div>
            </div>
            
        )
    }
}

export default Carousel;

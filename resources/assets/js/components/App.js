import React from 'react';
import { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import HeaderContainer from '../containers/HeaderContainer.js';

export default class App extends Component {
	componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <div>
        <HeaderContainer/>
        <Carousel>
            <Carousel.Item>
              <div className="header-back two"></div>
              <Carousel.Caption>
                <h1>We craft<br/> brands, web apps,<br/>and user interfaces<br/>we are IN+ studio</h1>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="header-back one"></div>
              <Carousel.Caption>
                <h1>We create meaningful <br/> interfaces that inspire.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        {this.props.children}
      </div>
    );
  }
}
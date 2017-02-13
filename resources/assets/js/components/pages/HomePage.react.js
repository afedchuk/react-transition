/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';

export default class HomePage extends Component {
    render() {

        return (
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
        );
  }
}

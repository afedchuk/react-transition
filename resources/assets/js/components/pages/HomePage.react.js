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

export default class HomePage extends Component {
	render() {

    return (
		<div id="inSlider" className="carousel carousel-fade" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#inSlider" data-slide-to="0" className="active"></li>
		        <li data-target="#inSlider" data-slide-to="1" className=""></li>
		    </ol>
		    <div className="carousel-inner" role="listbox">
		        <div className="item active">
		            <div className="container">
		                <div className="carousel-caption">
		                    <h1>We craft<br/>brands, web apps,<br/> and user interfaces<br/>we are IN+ studio</h1>
		                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
		                    <p>
		                        <a className="btn btn-lg btn-primary" href="#" role="button">READ MORE</a>
		                        <a className="caption-link" href="#" role="button">Inspinia Theme</a>
		                    </p>
		                </div>
		                <div className="carousel-image wow zoomIn animated">
		                    <img src="img/laptop.png" alt="laptop"/>
		                </div>
		            </div>
		            <div className="header-back two"></div>
		        </div>
		        <div className="item">
		            <div className="container">
		                <div className="carousel-caption blank">
		                    <h1>We create meaningful <br/> interfaces that inspire.</h1>
		                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
		                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
		                </div>
		            </div>
		            <div className="header-back one"></div>
		        </div>
		    </div>
		    <a className="left carousel-control" href="#inSlider" role="button" data-slide="prev">
		        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="right carousel-control" href="#inSlider" role="button" data-slide="next">
		        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>
		);
  }
}

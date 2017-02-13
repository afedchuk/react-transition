/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    return(
     <section id="contact" className="gray-section contact">
        <div className="container">
            <div className="row m-b-lg">
                <div className="col-lg-12 text-center">
                    <div className="navy-line"></div>
                    <h1>Contact Us</h1>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                </div>
            </div>
            <div className="row m-b-lg">
                <div className="col-lg-3 col-lg-offset-3">
                    <address>
                        <strong><span className="navy">Company name, Inc.</span></strong><br/>
                        795 Folsom Ave, Suite 600<br/>
                        San Francisco, CA 94107<br/>
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                </div>
                <div className="col-lg-4">
                    <p className="text-color">
                        Consectetur adipisicing elit. Aut eaque, totam corporis laboriosam veritatis quis ad perspiciatis, totam corporis laboriosam veritatis, consectetur adipisicing elit quos non quis ad perspiciatis, totam corporis ea,
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <a href="mailto:test@email.com" className="btn btn-primary">Send us mail</a>
                    <p className="m-t-sm">
                        Or follow us on social platform
                    </p>
                    <ul className="list-inline social-icon">
                        <li><a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li><a href="#"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                    <p><strong>&copy; 2015 Company Name</strong><br/> consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

import React from "react";
import "./Home.css";

import Dog from "../res/Images/iphone6.png";
import Ankit from "../res/Images/ak.jpg";
import Avinash from "../res/Images/lady-img.jpg";
import Rajan from "../res/Images/raju.png";
import TCLogo from "../res/Images/TechCrunch.png";
import TNW from "../res/Images/tnw.png";
import Biz from "../res/Images/bizinsider.png";
import MashLogo from "../res/Images/mashable.png";

export default function Home() {
  return (
    <>
      <>
        <section className="colored-section" id="title">
          <div className="container-fluid">
            {/* Nav Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="l.html">
                ShibaInu
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    {/* <a class="Bonding" href=""> */}
                    <div w3-include-html="content.html" />
                    <a className="nav-link" href="#footer">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#cta">
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Title */}
            <div className="row">
              <div className="col-lg-6">
                <h1 className="big-heading">
                  Meet new and interesting dogs nearby.
                </h1>
                <button
                  type="button"
                  className="btn btn-dark btn-lg download-button"
                >
                  <i className="fab fa-apple" /> Download
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg download-button"
                >
                  <i className="fab fa-google-play" /> Download
                </button>
              </div>
              <div className="col-lg-6">
                <img className="title-image" src={Dog} alt="iphone-mockup" />
              </div>
            </div>
          </div>
        </section>
        {/* Features */}
        <section className="white-section" id="features">
          <div className="container-fluid">
            <div className="row">
              <div className="feature-box col-lg-4">
                <a href="https://www.iams-india.com/?gclid=CjwKCAjwpqCZBhAbEiwAa7pXeZq8JSZI47kujHmCmzB-DowGsccnb20fQZZw9DLyvhEVBdSJF58alxoCli0QAvD_BwE">
                  {" "}
                  <i className="fa-solid fa-dog fa-3x" id="dog" />
                </a>
                {/* <i class="icon fas fa-check-circle fa-4x"></i>  */}
                {/* <i class="fa-solid fa-paw-simple"></i> */}
                <h3 className="feature-title">DOG FOOD</h3>
                <p>
                  Tell us about your dog to get a Tailored Nutrition
                  recommendation
                </p>
              </div>
              <div className="feature-box col-lg-4">
                <a href="l.html">
                  <i className="icon fas fa-bullseye fa-4x" id="check" />
                </a>
                <h1 className="feature-title">BONDING CHECKER</h1>
                {/* <a class="navbar-brand" href="l.html">ShibaInu</a> */}
                <p />
              </div>
              <div className="feature-box col-lg-4">
                {/* <i class ="fa-solid fa-paw fa-4x"> this is font awesome code it is customised code it is included in this file by cdn link fa-4x is used for inceasing the size */}
                <a href="https://headsupfortails.com/collections/dog-accessories?custom_constraint=custom-filter+only_available=true">
                  <i className="fa-solid fa-paw fa-4x" id="paw" />
                </a>
                {/* <i class="icon fas fa-heart fa-4x"></i> */}
                <h3 className="feature-title">ACCESSORIES</h3>
                <p>Buy toys and gifts for your pet</p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="colored-section" id="testimonials">
          <div
            id="testimonial-carousel"
            className="carousel slide"
            data-ride="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active container-fluid">
                <h2 className="testimonial-text">
                  I no longer have to sniff other dogs for love. I've found the
                  hottest Corgi on ShibaInu. Woof.
                </h2>
                <img
                  className="testimonial-image"
                  src={Ankit}
                  alt="dog-profile"
                />
                <em>Ankit Tripathi , Virar</em>
              </div>
              <div className="carousel-item container-fluid">
                <h2 className="testimonial-text">
                  My dog used to be so lonely, but with ShibaInu's help, they've
                  found the love of their life. I think.
                </h2>
                <img
                  className="testimonial-image"
                  src={Avinash}
                  alt="lady-profile"
                />
                <em>Avinash Singh , Vasai</em>
              </div>
              <div className="carousel-item container-fluid">
                <h2 className="testimonial-text">
                  In my area their is no proper dogs suitable for my pet, but
                  this webapplication helped me alot
                </h2>
                <img
                  className="testimonial-image"
                  src={Rajan}
                  alt="lady-profile"
                />
                <em>Rajan Vishwakarma , NSP</em>
              </div>
              <a
                className="carousel-control-prev"
                href="#testimonial-carousel"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </a>
              <a
                className="carousel-control-next"
                href="#testimonial-carousel"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          </div>
        </section>
        {/* Press */}
        <section className="colored-section" id="press">
          <img className="press-logo" src={TCLogo} alt="tc-logo" />
          <img className="press-logo" src={TNW} alt="tnw-logo" />
          <img className="press-logo" src={Biz} alt="biz-insider-logo" />
          <img className="press-logo" src={MashLogo} alt="mashable-logo" />
        </section>
        {/* Pricing */}
        <section className="white-section" id="pricing">
          <h2 className="section-heading">A Plan for Every Dog's Needs</h2>
          <p>Simple and affordable price plans for your and your dog.</p>
          <div className="row">
            <div className="pricing-column col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Chihuahua</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">Free</h2>
                  <p>5 Matches Per Day</p>
                  <p>10 Messages Per Day</p>
                  <p>Unlimited App Usage</p>
                  <button
                    className="btn btn-lg btn-block btn-outline-dark"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="pricing-column col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Labrador</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">₹49 / mo</h2>
                  <p>Unlimited Matches</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                  <button
                    className="btn btn-lg btn-block btn-dark"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="pricing-column col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3>Mastiff</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">₹99 / mo</h2>
                  <p>Pirority Listing</p>
                  <p>Unlimited Matches</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                  <button
                    className="btn btn-lg btn-block btn-dark"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="colored-section" id="cta">
          <div className="container-fluid">
            <h3 className="big-heading">
              Find the True Love of Your Dog's Life Today.
            </h3>
            <button
              className="download-button btn btn-lg btn-dark"
              type="button"
            >
              <i className="fab fa-apple" /> Download
            </button>
            <button
              className="download-button btn btn-lg brn-light"
              type="button"
            >
              <i className="fab fa-google-play" /> Download
            </button>
          </div>
        </section>
        {/* Footer */}
        <footer className="white-section" id="footer">
          <div className="container-fluid">
            <i className="social-icon fab fa-facebook-f" />
            <i className="social-icon fab fa-twitter" />
            <i className="social-icon fab fa-instagram" />
            <i className="social-icon fas fa-envelope" />
            <p>© Copyright 2018 ShibaInu</p>
          </div>
        </footer>
      </>
    </>
  );
}

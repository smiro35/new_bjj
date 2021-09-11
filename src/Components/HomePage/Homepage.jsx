import React from "react";
import "./Homepage.scss";
import TopNavbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Carousel } from "react-bootstrap";
const Homepage = () => {
  return (
    <div>
      <TopNavbar />

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/display97/image/upload/DSC_2586_edited-1-copy-117684.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/5a9eb37d3e2d09baa871c21d/1531862930670-5VFOZAX3KA8UBMLHX1XR/adult-jiu-jitsu-classes-ventura-county-martial-arts-mma-thousand-oaks-ca.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kelleesama.com/wp-content/uploads/2021/01/muay-thai-kickboxing-class.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/display97/image/upload/5032-class-picture-march-22jpg-105168.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Footer />
    </div>
  );
};

export default Homepage;

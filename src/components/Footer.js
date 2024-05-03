import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Dishant Patil</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year }  DP.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            <li className="social-icons">
                  <a
                    href="mailto:dishantpatil099@gmail.com"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <RiMailSendFill />
  
                  </a>
              </li>
              <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dishantpatil099/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              
              <a
                href="https://github.com/dishantpatil099"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/dishant_pa41547"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.instagram.com/dishantpatil_099"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

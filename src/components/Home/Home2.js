import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import leetcodeLogo from "../../Assets/leetcode.svg";
import gfgLogo from "../../Assets/gfgLogo.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";

import { FaLinkedinIn } from "react-icons/fa";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, C++ and Javascript. </b>
              </i>
              <br />
              <br />
              <br />
              ❖
              <b className="purple" style={{marginLeft: "3px"}}>

                 Measurable Achievements&nbsp;
              </b>:

              <br></br>
              <i style={{marginLeft: "20px"}}>
              • Solved <b className="purple"> 1550+ </b> DS & Algo problems across platforms like <b className="purple"> Leetcode and GFG </b>.
                
              </i>
              <br></br>

              
              

              
              
              <i style={{marginLeft: "20px"}}>
              • GFG Institute (VJTI) - <b className="purple"> Rank 3</b> .
                
              </i>
              <br></br>
              <i style={{marginLeft: "20px"}}>
              • <b className="purple"> 1800+ </b> Active Rankings in Leetcode weekly contests .
                
              </i>
              <br />
              <br />

              <Row style={{ justifyContent: "center", paddingBottom: "37px" }}>
                <Col>
                <b className="purple"
                style={{marginLeft:'30px'}}>
                Coding Profiles :

                </b>
                </Col>
                <Col style={{marginLeft:'-30px'}} >
                  Leetcode <b className="purple"> 950+ </b> 
                  
                  <a
                    href="https://www.leetcode.com/param650/"
                    target="_blank"
                    rel="noreferrer"
                    // className="icon-colour  home-social-icons"
                    className="leetcode-profile"
                    style={{ justifyContent: "center"}}
                  >
                    <img src={leetcodeLogo} style={{ width: '25px', height: '25px', transition: "transform 0.2s ease-in-out", }} className="img-fluid" alt="leetcode" />                      
                  </a>
                </Col>
                <Col style={{marginLeft:'-60px'}}>
                GFG <b className="purple"> 500+ </b> 
                
                <a
                  href="https://www.geeksforgeeks.org/user/kdcs650/"
                  target="_blank"
                  rel="noreferrer"
                  // className="icon-colour  home-social-icons"
                  className="gfg-profile "
                >
                    <img src={gfgLogo} style={{ width: '28px', height: '28px' }} className="img-fluid" alt="gfg" />                      
                  
                </a>
                </Col>
                <Col>
                </Col>

              </Row>
              

                
              <br />
              I'm well versed in the domain of&nbsp;
              <i>
                <b className="purple"> Data Structures & Algorithms and Software Development </b> and
                also in areas related to{" "}
                <b className="purple">
                  Web Technologies
                </b>.
              </i>
              <br />
              <br />
              
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Express.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{ width: '700px', height: '520px' }} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                  <a
                    href="mailto:dishantpatil099@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <RiMailSendFill />
  
                  </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dishantpatil099/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/dishantpatil099"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/dishant_pa41547"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dishantpatil_099"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

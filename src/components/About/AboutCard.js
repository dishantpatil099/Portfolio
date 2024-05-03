import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dishant Patil </span>
            from <span className="purple"> Dhule, India.</span>
            <br />
            <br></br>

            <span className="purple"> Competitive programming </span> & <span className="purple"> problem solving </span> isn't just a hobby for me; it's a profound passion. I thrive on the adrenaline rush of tackling complex problems on platforms like <span className="purple"> Leetcode </span> & <span className="purple"> Codeforces </span>. 
            <br></br>
            <br></br>

            I'm an upcoming Analyst at Deutsche Bank.
            <br />
            Final-year B.Tech undergrad in Electronics and Telecommunication Engineering at  VJTI, Mumbai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Riding Bikes
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Long Drives
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "First, solve the problem. Then, write the code."{" "}
          </p>
          <footer className="blockquote-footer">Dishant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/bitsOfCode.png";
import emotion from "../../Assets/Projects/emotion.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BlogCraft - Blogging App"
              description="❖ Dynamic web application built to provide users a seamless platform for creating, sharing, and interacting with blogs."
              description2 = "❖ Tools & technologies used:  Node.js | Express.js | MongoDB | RESTful APIs | JWT Token | Multer."
              description3 = "❖ Enabled users to create, publish, and interact with blogs, including image uploads and commenting functionalities."
              description4 = "❖ JWT token-based authorization & authentication for user registration, login, and secure access control"
              description5 = "❖ Key features: User Registration & Login | Comment system | MVC Architecture | JWT Token | EJS."
              ghLink="https://github.com/dishantpatil099/blogCraft"
              demoLink="https://blogcraft-production.up.railway.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="URL Shortener "
              description="❖ The URL Shortener Application, built using Node.js, Express.js, and MongoDB, streamlines URL management with RESTful APIs."
              description2 = "❖ Technologies used: Node.js | Express.js | MongoDB | RESTful APIs | JWT Token | EJS."
              description3 = "❖ It enables CRUD operations, ensuring users can create, read, update and delete shortened URLs, Unique short URL generation with Nano ID."
              description4 = "❖ Key features: Convenient URL shortening and management | Seamless user experience with server-side rendering | User Registration and Authentication | Robust security measures. "
              ghLink="https://github.com/dishantpatil099/url-shortener"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="QuickCart – E Commerce App"
              description= "❖ Web application offering a platform for users to explore, search, and purchase products."
              description2 = "❖ Tools & technologies used: React JS | JavaScript | Redux Toolkit | Material UI | FirebaseAuth."
              description3 = "❖ Key features: Product Catalog | Search and Filter products | User Registration and Authentication | Product Cart | Checkout."
              ghLink="https://github.com/dishantpatil099/QuickCart"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AudioVerse – Music Playing App"
              description="❖ Developed a Spotify clone, a web application that allows users to register, log in, and enjoy music streaming functionality similar to the original Spotify platform."
              description2= "❖ Tech Used: Spotify API, Vanilla JS, Tailwind CSS, Vite. "
              description3= "❖ Key features: User registration Sign‑up Sign‑in, Music playback, Featured Playlist."
              ghLink="https://github.com/dishantpatil099/Spotify-Clone"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hello Forecast"
              description= "❖ Developed a weather app that tracks the user’s location utilizing Geolocation API."
              description2="❖ Tech Used: Geolocation API | JavaScript | OpenWeatherMap API | Fetch API."
              description3 = "❖ A responsive and fully functional web application that displays real time weather information of any city throughout the world using the OpenWeatherMap API."
              ghLink="https://github.com/dishantpatil099/Hello-Forecast"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Fresh-Haven"
              description= "❖ The website will serve as a platform where consumers can browse and order fresh vegetables and fruits directly from local farms."
              description2="❖ Tech Used : Bootstrap v5.0 , HTML CSS , JavaScript"
              description3 = "❖ The project seeks to connect consumers who are health-conscious and want to have access to fresh organic produce with local farms and farmers."
              description4 = "❖ It will feature a user-friendly interface that allows customers to easily navigate through the available products and make orders."
              ghLink="https://github.com/dishantpatil099/Fresh-Haven-FRT"
              demoLink= "https://youtu.be/X2stR0YRbf8"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiMysql ,
  SiRedux,
  SiMongodb
} from "react-icons/si";

const TechIcon = ({ icon, name }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => setIsHovered(!isHovered);

  return (
    <Col xs={4} md={2} className="tech-icons">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={{
          position: 'relative',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(1px)',
          transition: 'transform 0.2s ease-in-out', // Add smooth lift animation,
          transitionDelay: isHovered ? '0.1s' : '0s',
        }}
      >
        {icon}
        {isHovered && (
          <div style={{fontSize: "1.2rem"}} className="tech-icon-name">{name}</div>
        )}
      </div>
    </Col>
  );
};

function Techstack() {
  const techStacks = [
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiPython />, name: "Python" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },

    // ... Add more tech stacks as needed
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" , paddingTop: "30px" }}>
      {techStacks.map((techStack) => (
        <TechIcon key={techStack.name} {...techStack} />
      ))}
    </Row>
  );
}


export default Techstack;

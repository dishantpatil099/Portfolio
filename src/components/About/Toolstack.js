import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  
  SiMacos,
  SiJupyter
} from "react-icons/si";

const ToolIcon = ({ icon, name }) => {
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

function Toolstack() {
  const toolStacks = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
    { icon: <SiMacos />, name: "Mac OS" },
   

    // ... Add more tech stacks as needed
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" , paddingTop: "30px" }}>
      {toolStacks.map((techStack) => (
        <ToolIcon key={toolStacks.name} {...techStack} />
      ))}
    </Row>
  );
}

export default Toolstack;

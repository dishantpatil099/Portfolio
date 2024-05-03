import React from "react";

import { Row , Col } from "react-bootstrap";
import leetcodeCal from "../../Assets/leetcodeCal.png";
import leetcodeCal2 from "../../Assets/leetcodeCal2.png";


// function Github() {
//   return ( <>
  
//     <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      
//       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//      Days I <strong className="purple">Code</strong>
//      </h1> 
//             <Col>
//               <img src={leetcodeCal} style={{maxHeight: "3600px" , maxWidth: "1150px"}} alt="about" className="img-fluid" />

//             </Col>
          
      
//     </Row>
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
     
//             <Col>
//               <img src={leetcodeCal2} style={{maxHeight: "3600px" , maxWidth: "1150px"}} alt="about" className="img-fluid" />

//             </Col>
          

//     </Row>
//   </>
    
    
//   );
// }
// {/* <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//         Days I <strong className="purple">Code</strong>
//       </h1> */}
//       {/* <GitHubCalendar
//         username="dishantpatil099"
//         blockSize={15}
//         blockMargin={5}
//         color="#c084f5"
//         fontSize={16}
//       /> */}

// export default Github;

// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you're using Bootstrap

const MyComponent = () => {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "20px", display: "flex" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <Col xs={12} md={10} style={{ padding: "10px", margin: "5 auto" /* or box-sizing: border-box; */ }}> {/* Add padding for spacing */}
          <img
            src={leetcodeCal}
            alt="about"
            className="img-fluid"
            style={{ objectFit: "contain" }} // Responsive styles
          />
        </Col>
        <Col xs={12} md={10} style={{ padding: "10px", margin: "5 auto" /* or box-sizing: border-box; */ }}> {/* Add padding for spacing */}
          <img
            src={leetcodeCal2}
            alt="about"
            className="img-fluid"
            style={{ objectFit: "contain" }} // Responsive styles
          />
        </Col>
      </Row>
    </div>
  );
};

export default MyComponent;

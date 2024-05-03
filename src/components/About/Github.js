import React from "react";

import { Row , Col } from "react-bootstrap";
import leetcodeCal from "../../Assets/leetcodeCal.png";
import leetcodeCal2 from "../../Assets/leetcodeCal2.png";


function Github() {
  return ( <>
  
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
     Days I <strong className="purple">Code</strong>
     </h1> 
            <Col>
              <img src={leetcodeCal} style={{maxHeight: "3600px" , maxWidth: "1150px"}} alt="about" className="img-fluid" />

            </Col>
          
      
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
     
            <Col>
              <img src={leetcodeCal2} style={{maxHeight: "3600px" , maxWidth: "1150px"}} alt="about" className="img-fluid" />

            </Col>
          

    </Row>
  </>
      // <div>
      //   <img src="../Assets/leetcode 2.png"> Leetcode</img>
      // </div>
    
  );
}
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

export default Github;

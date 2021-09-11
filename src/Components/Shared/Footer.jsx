import React from 'react'
import "./Footer.scss"
import facebook from "../../Images/facebook_icon.png"
import instagram from "../../Images/instagram_icon.png"
import youtube from "../../Images/youtube_icon.png"
import{Navbar,Nav} from "react-bootstrap";
const Footer = () => {
    return (
      <div  >
          
        <div className="whole_box">
         

  


    <div className="we_defy">
    <h3>Veteran owned business</h3>
      <img src="https://s3.amazonaws.com/zenplannerwordpress-stack0/wp-content/uploads/sites/143/2019/01/29075527/We-Defy-Foundation-Official-Logo.jpg"/>
      <p>
      Member of the We Defy Foundation
      </p>
    </div>


    <div className="bjj_rev">
      <img src="https://lh3.googleusercontent.com/proxy/gppkuu7-V4VTsziKExoZvzu8P2NjfpDWVuvTrwzQSe4l0aWnrAZh-jds8tqGXnBaUKDMdXR7_8GdbCp3bpH41mJd1Xzqxgdt9-f3YKyAE7u6hkK3wnvhK0kZtGjsi195Ix47pSBMxH18B3NYe22j9B4sdgm4STM"/>
      <p className="member"> Member since 2012</p>
    </div>
    <div className="social_icons">
      <h3>Contact Information</h3>
      <p>here</p>
      <p>here</p>
      <p>here</p>
      <p>here</p>
      <img src={facebook} alt=""/>
      <img src={instagram} alt=""/>
      <img src={youtube} alt=""/>
    </div>
  
  


  </div>

      </div>
        
    );
  }
  
  export default Footer;






{/* <img src={facebook} alt=""/> */}


//   <div bg="dark" variant="dark" fixed="bottom" className="foot">
//         < fluid className="text-center text-md-left">
//          
//             <div md="6">
//               <h5 className="title">Big logo here</h5>
//               <p>
//                 Image for veteran owned
//               </p>
//               <p>
//                   Image for BJJ revolution team
//               </p>
//             </div>
//             <div md="6">
//               <h5 className="title">Contact Information</h5>
//               <ul>
//                 <li className="list-unstyled">
//                   <a href="#!">Link 1</a>
//                 </li>
//                 <li className="list-unstyled">
//                   <a href="#!">Link 2</a>
//                 </li>
//                 <li className="list-unstyled">
//                   <a href="#!">Link 3</a>
//                 </li>
//                 <li className="list-unstyled">
//                   <a href="#!">Link 4</a>
//                 </li>
//               </ul>
//             </div>
//           
//         <<>
//         <div className="footer-copyright text-center py-3">
//           < fluid>
//             &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//           <<>
//         </div>
//       </div>
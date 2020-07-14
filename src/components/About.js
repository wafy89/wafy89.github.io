import React, { Component } from "react";
import Fade from "react-reveal/Fade";
class About extends Component {
  render() {
    return(
     <div className="aboutContainer" >
       <Fade bottom>
       <h1 className="pageTitle" id="about">ABOUT ME</h1></Fade>
      <div className="aboutText">
        <Fade left>
        <div className="aboutTextSection">
        <h2>Who's this guy?</h2> 
          <h4>
              I'm Wafi Amer, 31 year old and coming from Syria. I live in Leipzig, Germany since 2017.
              I can speak English, relatively good German and Arabic.
              If I'm not coding I like to spend my time playing or listening music, watching football matches or going outside if the weather is nice.

          </h4>
          </div>
          </Fade>
          
          <Fade right>
          <div className="aboutTextSection">
          <h2>What is my web development experiences?</h2> 
          <h4>
              I'm junior Front-End Web-Developer, I have just finished a web-development course  in <a className="aboutLinks" href="https://digitalcareerinstitute.org/?utm_medium=paid&utm_source=GoogleSearch&utm_campaign=9550003802&utm_content=97449268745&utm_term=dci%20leipzig&utm_term=dci%20leipzig&utm_campaign=Brand_Campaign&utm_source=adwords&utm_medium=ppc&hsa_acc=2750777619&hsa_cam=9550003802&hsa_grp=97449268745&hsa_ad=424581159567&hsa_src=g&hsa_tgt=kwd-903800554038&hsa_kw=dci%20leipzig&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwi_b3BRAGEiwAemPNU2jx8MFR_OwdhHtNxGrMysbf61M_58lmxXpAMk69sOzv6id3JcNYRBoCkQcQAvD_BwE" target="	_blank">Digital Career Institute</a>. I always have been  passionate about web-development and innovation. During the course I was the class tutor, helping my classmates to understand our subjects. This also helped me to improve my understanding, since explaining our exercises and lessons to my classmates has also improved my experience. <a className="aboutLinks" href="#contact"> Let's make something special.</a>
          </h4>
          </div>
          </Fade>

          <Fade left>
          <div className="aboutTextSection">
            <h2>How I've chosen this work field?</h2>
            <h4>
              2009-2012 I studied in Syria High <a className="aboutLinks" href="https://www.svuonline.org/en/program/hnd" > National Diploma in Computing and Business Application </a>  at Syrian-Virtual-University. this program was business focused but it also contained web-development at the basic level. I liked this field but I did't get the chance to work since this field was very new in syria and no chances were available. but when I came to germany I looked for such courses and luckily I found a good One and I was all the Time interested of its content.   
            </h4>
            </div>
          </Fade>
      </div>

    </div>)
  }
}

export default About;

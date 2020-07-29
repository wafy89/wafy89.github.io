import React, { Component } from "react";
import Fade from "react-reveal/Fade";
class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <Fade bottom>
          <div className="pageTitleContainer">
            <div className="pageTitle" id="about">
              ABOUT ME
            </div>
          </div>
        </Fade>
        <div className="aboutText">
          <Fade left>
            <div className="aboutTextSection">
              <h2>Who's this guy?</h2>
              <h4>
                I am Wafi Amer, 31 year old and coming from Syria. I live in
                Leipzig, Germany since 2017. I speak Arabic, English, and German. I spend majority of my time in coding, playing music, watching football or
                going outside, if the weather allows.
              </h4>
            </div>
          </Fade>

          <Fade right>
            <div className="aboutTextSection">
              <h2>What is my web development experience?</h2>
              <h4>
                I'm a junior Front-End Web-Developer. I have just finished my
                web-development course in{" "}
                <a
                  className="aboutLinks"
                  href="https://digitalcareerinstitute.org/?utm_medium=paid&utm_source=GoogleSearch&utm_campaign=9550003802&utm_content=97449268745&utm_term=dci%20leipzig&utm_term=dci%20leipzig&utm_campaign=Brand_Campaign&utm_source=adwords&utm_medium=ppc&hsa_acc=2750777619&hsa_cam=9550003802&hsa_grp=97449268745&hsa_ad=424581159567&hsa_src=g&hsa_tgt=kwd-903800554038&hsa_kw=dci%20leipzig&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwi_b3BRAGEiwAemPNU2jx8MFR_OwdhHtNxGrMysbf61M_58lmxXpAMk69sOzv6id3JcNYRBoCkQcQAvD_BwE"
                  target="	_blank"
                >
                  Digital Career Institute
                </a>
                . I have always been passionate about web-development and
                innovation. During the course I was the class tutor, help my
                colleagues and clarify their concerns. And that also has significant positive impact on my skills and experience.
                <a className="aboutLinks" href="#contact">
                  {" "}
                  Let's make something special.
                </a>
              </h4>
            </div>
          </Fade>

          <Fade left>
            <div className="aboutTextSection">
              <h2>How I've chosen this work field?</h2>
              <h4>
                2009-2012 I studied   
                <a
                  className="aboutLinks"
                  href="https://www.svuonline.org/en/program/hnd"
                >{" "}            
                  Higher National Diploma in Computing and Business Application
                  {" "} </a>
                at Syrian-Virtual-University. This program was business focused
                but it also contained web-development at the basic level. I
                liked this work field but I did't get the chance to work since Web development was very new in Syria. But
                when I came Germany I have started to look for such courses and luckily I
                found a good one, that its content is exactly what I was looking for.
              </h4>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default About;

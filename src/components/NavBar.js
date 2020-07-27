import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assists/logo4.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extend: false,
      activeLink: "",
      transform: 0,
      scrolling: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    /*   this.updateSize = this.updateSize.bind(this); */
  }
  handleScroll() {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }
  /*   updateSize(){
    if (window.innerWidth> 990 )this.setState({extend: true,})
  } */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    /* window.addEventListener('resize', this.updateSize) */
  }
  render() {
    return (
      <nav
        className={
          this.state.scrolling ? "navContainer scroll" : "navContainer"
        }
      >
        <div className="logoContainer">
          <a href="#home">
            <img className="logoImage" src={logo} alt="logo" />
          </a>
        </div>
        <div className={this.state.extend ? "navigation extend" : "navigation"}>
          <div
            onClick={() => this.setState({ activeLink: "home", extend: false })}
            className="navItem"
          >
            <AnchorLink href="#home">
              <p
                className={this.state.activeLink === "home" ? "activeLink" : ""}
              >
                Home
              </p>
            </AnchorLink>
          </div>
          <div
            onClick={() =>
              this.setState({ activeLink: "about", extend: false })
            }
            className="navItem"
          >
            <AnchorLink href="#about">
              <p
                className={
                  this.state.activeLink === "about" ? "activeLink" : ""
                }
              >
                About
              </p>
            </AnchorLink>
          </div>

          <div
            onClick={() =>
              this.setState({ activeLink: "skills", extend: false })
            }
            className="navItem"
          >
            <AnchorLink href="#skills">
              <p
                className={
                  this.state.activeLink === "skills" ? "activeLink" : ""
                }
              >
                Skills
              </p>
            </AnchorLink>
          </div>
          <div
            onClick={() =>
              this.setState({ activeLink: "portfolio", extend: false })
            }
            className="navItem"
          >
            <AnchorLink href="#portfolio">
              <p
                className={
                  this.state.activeLink === "portfolio" ? "activeLink" : ""
                }
              >
                Portfolio
              </p>
            </AnchorLink>
          </div>
          <div
            onClick={() =>
              this.setState({ activeLink: "contact", extend: false })
            }
            className="navItem contact"
          >
            <AnchorLink href="#contact">
              <p
                className={
                  this.state.activeLink === "contact" ? "activeLink" : ""
                }
              >
                Contact
              </p>
            </AnchorLink>
          </div>
        </div>
        <button
          onClick={() => this.setState({ extend: !this.state.extend })}
          className="burgerIcon"
        >
          <div
            className={this.state.extend ? "line up extend" : " line up"}
          ></div>
          <div
            className={this.state.extend ? "line middle extend" : "line middle"}
          ></div>
          <div
            className={this.state.extend ? "line down extend" : "line down"}
          ></div>
        </button>
      </nav>
    );
  }
}

export default NavBar;

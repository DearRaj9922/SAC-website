import React , {useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Nav = () => {

  const[line1,setl1] = useState(false);
  const[line2,setl2] = useState(false);
  const[line3,setl3] = useState(false);

    function menu() {
        var x = document.getElementById("links");
        if (x.style.display === "flex") {
          setl1(false);
      setl2(false);
      setl3(false);
          x.style.display = "none";
        } else {
          setl1(true);
      setl2(true);
      setl3(true);
          x.style.display = "flex";
        }
      }

  return (
    <>
      <div className="nav">
        <Link to="/">
          {/* <img src={lab} alt="" /> */}
        </Link>
        <div className="nav-right">
          <ul type="none">
              <a href={"/"} className="nav-right-a">Home</a>
              {/* <a href={"/about"} className="nav-right-a">About Us</a> */}
              <a href={"/research"} className="nav-right-a">Research</a>
              <a href={"#"} className="nav-right-a">Facilities</a>
              <a href={"#"} className="nav-right-a">Publication</a>
              <a href={"/people"} className="nav-right-a">People</a>
              <a href={"/awards"} className="nav-right-a">Awards</a>
              <a href={"/contact"} className="nav-right-a">Contact Us</a>
          </ul>
        </div>
        <div className="side-nav" onClick={menu}>
          <div className={line1 ? "hamburger-l1" : "l1"}></div>
          <div className={line1 ? "hamburger-l2" : "l2"}></div>
          <div className={line1 ? "hamburger-l3" : "l3"}></div>
        </div>
      </div>
      <div id="links">
        <ul type="none" onClick={menu}>
              <a href={"/"} className="nav-links-a">Home</a>
              {/* <a href={"/about"} className="nav-links-a">About Us</a> */}
              <a href={"#"} className="nav-links-a">Facilities</a>
              <a href={"#"} className="nav-links-a">Publication</a>
              <a href={"/research"} className="nav-links-a">Research</a>
              <a href={"/people"} className="nav-links-a">People</a>
              <a href={"/awards"} className="nav-links-a">Awards</a>
              <a href={"/contact"} className="nav-links-a">Contact Us</a>
        </ul>
      </div>
    </>
  );
};

export default Nav;

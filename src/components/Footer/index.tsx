/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";
import logo from "../../assets/duck-play.svg";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import { BtnPrimary } from "../../styles/buttons";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";

function Footer() {
  return (
    <Container>
      <div className="footer-up">
        <figure>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>

          <div className="footer-up-contact">
            <ul>
              <BsGithub size={30} />
              <FiFigma size={30} />
              <IoLogoJavascript size={30} />
            </ul>
            <BtnPrimary padding="big">Contact Us</BtnPrimary>
          </div>
        </figure>

        <div className="footer-up-lists">
          <ul>
            <ul>
              <p>Product Owner</p>
              <a
                href="https://www.linkedin.com/in/carderan-henrique/"
                target="_blank"
                rel="noreferrer"
              >
                <li>Henrique Carderan</li>
              </a>
            </ul>
            <ul>
              <p>Scrum Master</p>
              <a
                href="https://www.linkedin.com/in/daragneri/"
                target="_blank"
                rel="noreferrer"
              >
                <li>Dara Gomes</li>
              </a>
            </ul>
          </ul>

          <ul>
            <p>Teach Leader</p>
            <a
              href="https://www.linkedin.com/in/kelton-wlysses/"
              target="_blank"
              rel="noreferrer"
            >
              <li>Kelton Wlysses</li>
            </a>
          </ul>

          <ul>
            <p>Quality Assurance</p>
            <a
              href="https://www.linkedin.com/in/rian-moraes/"
              target="_blank"
              rel="noreferrer"
            >
              <li>Rian Moraes</li>
            </a>
            <a
              href="https://www.linkedin.com/in/simplesmentedan/"
              target="_blank"
              rel="noreferrer"
            >
              <li>Daniel Lobato</li>
            </a>
          </ul>
        </div>

        <div className="footer-up-techs">
          <h2>Techs</h2>
          <ul>
            <li>
              <AiFillHtml5 size={55} />
            </li>
            <li>
              <DiCss3 size={55} />
            </li>
            <li>
              <IoLogoJavascript size={55} />
            </li>
            <li>
              <DiReact size={55} />
            </li>
            <li>
              <SiTypescript size={55} />
            </li>
            <li>
              <AiFillGithub size={55} />
            </li>
            <li>
              <SiStyledcomponents size={55} />
            </li>
            <li>
              <FiFigma size={55} />
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-down">
        <p>SUPERDUCKS © ALL RIGHTS RESERVED.</p>
      </div>
    </Container>
  );
}
export default Footer;

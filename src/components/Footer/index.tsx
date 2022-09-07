import { Container } from './styles';
import logo from '../../assets/duck-play.svg';
import { BsGithub } from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import { IoLogoJavascript } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { BtnPrimary } from '../../styles/buttons';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiReact } from 'react-icons/di';
import { SiStyledcomponents, SiTypescript } from 'react-icons/si'

function Footer() {
  return (
    <Container>      
      <div className='footer-up'>
        <figure>
          <img src={logo} alt="" />

          <div className='footer-up-contact'>
            <ul>
              <BsGithub size={30} />
              <FiFigma size={30}/>
              <IoLogoJavascript size={30}/>
            </ul>
            <BtnPrimary padding='big' >Contact Us</BtnPrimary>
          </div>
        </figure>

        <div className='footer-up-lists'>
          <ul>
            <ul>
              <p>Product Owner</p>
              <li>Henrique Carderan</li>
            </ul>
            <ul>
              <p>Scrum Master</p>
              <li>Dara Gomes</li>
            </ul>
          </ul>

          <ul>
            <p>Teach Leader</p>
            <li>Kelton Wlysses</li>
          </ul>

          <ul>
            <p>Quality Assurance</p>
            <li>Rian Moraes</li>
            <li>Daniel Lobato</li>
          </ul>

        </div>

        <div className='footer-up-techs'>
          <h2>Techs</h2>
          <ul>
            <li>
              <AiFillHtml5 size={55}/>
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
      
      <div className='footer-down'>
        <p>SUPERDUCKS © ALL RIGHTS RESERVED.</p>
      </div>      
    </Container>

  );
};
export default Footer;
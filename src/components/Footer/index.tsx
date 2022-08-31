import { Container } from './styles';
import logo from '../../assets/duck-play.svg';
import { BsGithub } from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import { IoLogoJavascript } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { BtnPrimary } from '../../styles/buttons';

function Footer() {
  return (
    <Container>      
      <div className='footer-up'>
        <figure>
          <img src={logo} alt="" />
        </figure>

        <div className='footer-up-lists'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
          </ul>

          <ul>
            <li>Team</li>
            <li>Services</li>
          </ul>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className='footer-up-contact'>
          <ul>
            <BsGithub size={30} />
            <FiFigma size={30}/>
            <IoLogoJavascript size={30}/>
            <FaLinkedinIn size={30}/>
          </ul>
          <BtnPrimary padding='big' >Contact Us</BtnPrimary>
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
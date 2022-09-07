import Lottie from "react-lottie";
import animateLogin from "../../assets/9103-entertainment.json"
import { Container } from "./styles";
import logo from './../../assets/duckplay.svg'

const LottieLoading = () => {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: animateLogin,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
  return (
    <Container> 
     <Lottie options={loadingOptions} width={200} height={200} speed={2}/>
     <img src={logo} alt="Duckplay" />
    </Container>
  )
};
export default LottieLoading;

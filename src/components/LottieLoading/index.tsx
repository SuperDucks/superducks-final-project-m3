import Lottie from "react-lottie";
import animateLogin from "../../assets/9103-entertainment.json"
import { Container } from "./styles";

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
     <Lottie options={loadingOptions} width={400} height={400} speed={2}/>
     <h1>Duckplay</h1>
    </Container>
  )
};
export default LottieLoading;

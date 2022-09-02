import Lottie from "react-lottie";
import animateLogin from "../../assets/81986-movie.json"
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
     <Lottie options={loadingOptions} width={300} height={300}/>
     <h1>Duckplay</h1>
    </Container>
  )
};
export default LottieLoading;

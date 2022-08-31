import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Genre from "../../components/Genre";
import NavBar from "../../components/NavBar";
import { Container } from "./styles";


const Dashboard = () => {

  return (
    <Container>
      <NavBar/>

      <div className="content">

        <aside>
          <Genre />
        </aside>
        <main>
          <Carousel />
          <Carousel />
          <Carousel />
          <Carousel />
        </main>

      </div>

      <Footer />

    </Container>
 
 )
}
export default Dashboard;
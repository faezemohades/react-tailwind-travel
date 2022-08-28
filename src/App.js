import Back from "./components/Back";
import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div >
     <Navbar/>
     <Back/>
     <Destinations/>
     <Search/>
     <Selects/>
     <Carousel/>
     <Footer/>
    </div>
  );
}

export default App;

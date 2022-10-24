import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Banner from "./Banner";
import Menusection from './Menusection';
import Footer from './Footer';
import About from './About';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
  <Router>
    <main>
     <Header />
     <Nav />
     <Banner />
        <Routes>
            <Route path='/' element={<Menusection />} />
            <Route path='/About' element={<About />} />
        </Routes>
     <Footer />
    </main>
  </Router>
   
  );
}

export default App;

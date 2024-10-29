import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import Work from './components/work/Work';

function App() {
  return (
    <>
    <div className="container">
    <Header />
    
    <main className='main'> 

    <Home />
    <About />
    <Skills />

 
    
    <Qualification />
    <Work />
    <Contact />


    </main>

    <Footer />
    <ScrollUp />

    </div>
    </>
   
  );
}

export default App;

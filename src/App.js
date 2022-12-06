import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './compo/nav';
import Container from './compo/container';
import Section from './compo/section';
import Section2 from './compo/section2';
import Section3 from './compo/section3';
import Footer from './compo/footer';

function App() {
  return (
    <>
      <Nav />
      <Container />
      <Section />    
      <Section2 />  
      <Section3 />
      <Footer />
      </>


    );

}

export default App;

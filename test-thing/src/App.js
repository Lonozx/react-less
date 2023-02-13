import './style/main.scss'
import image from './img/clouds.jpg'
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Section from "./common/Sections/Section";

function App() {
  return (
        <div className={'wrapper'}>
        <Header className={'texting'}/>
            <section className='dignity'>
                <img className='image' src={image} alt="Logo" />
                <p>May you be safe!</p>
            </section>
            <div className='content'>
        <Section class={'text__desc'}/>
            <Section class={'text__desc'}/>
            <Section class={'text__desc'}/>
            </div>
        <Footer/>
        </div>
  );
}

export default App;

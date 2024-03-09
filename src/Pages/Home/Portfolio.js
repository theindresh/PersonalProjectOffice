import Hero from '../../Portfolio/Hero';
import About from '../../Portfolio/About';
import Education from '../../Portfolio/Education';
import Chatbot from '../ChatBot/Chatbot';
const Portfolio = () => {
    return(
      <>
      <div>
      <Hero/>
      <About/>
      <Education/>
      <div className='position-fixed bottom-0 '>
      <Chatbot />
    </div>
    </div>  
      </>
    )
  };
  
  export default Portfolio;
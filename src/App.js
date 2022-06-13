import './App.css';
import  img1 from "./img/img1.jpg"
import  img2 from "./img/img2.jpg"
import  img3 from "./img/img3.jpg"
import  img4 from "./img/img4.jpg"
import  img5 from "./img/img5.jpg"
import Header from './components/Header.jsx';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='blocks'>
      <div className='block'>
        <h1 className='text'>HEY</h1>
        <img className='img' alt=''  src={img1}/>
      </div>
      <div className='block'>
        <h1 className='text'>LET'S</h1>
      <img alt='' className='img' src={img2}/>
      </div>
      <div className='block'>
        <h1 className='text'>GIVE</h1>
      <img alt='' className='img' src={img3}/>
      </div>
      <div className='block'>
        <h1 className='text'>ALL</h1>
      <img alt='' className='img' src={img4}/>
      </div>
      <div className='block'>
        <h1 className='text'>YOU CAN</h1>
        <img alt='' className='img' src={img5} />
      </div>
      </div>
      </div>
  );
}

export default App;

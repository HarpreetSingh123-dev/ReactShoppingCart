import { Link } from 'react-router-dom';
import './App.css';
//import Container from '@material-ui/core/Container';
import image1 from './Image-Set/Banner.jpg'
import Navbar from './Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <div className="container-fluid">
    
        
        <h1 className="text-center">Browse Some of the Suppliments from my online store</h1>
        <div className="container">
        <Link to="/shopping">
        <img src ={image1} ></img>
        </Link>
       </div>

       
 
    </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
// import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App" id="root">
      <Navbar />
      {/* <Menu/> */}
      <Home/>
    </div>
  );
}

export default App;

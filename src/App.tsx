import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import Content from './components/Content';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
  <Router>
    <div id="AppWrapper">
      <Header />
      <Routes>
        <Route path="/" element={
        <div id="RouteContainer">
          <Title />
          <SearchBar isContentPage={false}/>
          <Homepage />
          <Footer />
        </div>
        } />
        <Route path="/Home" element={
        <div id="RouteContainer">
          <Title />
          <SearchBar isContentPage={false}/>
          <Homepage />
          <Footer />
        </div>
        } />
        <Route path="/Post/:type" element={
          <div id="RouteContainer">
            <SearchBar isContentPage={true}/>
            <Content />
            <Footer />
          </div>
        } />
        <Route path="*" element={
          <div id="RouteContainer">
            <h1><br />Uh oh... That Page Does Not Exist :(</h1>
            <h2 className="cannotfindtext">Click home button above to take you to the main website!</h2>
          </div>
        } />
      </Routes>
      
    </div>
  </Router>
  );
}

export default App;

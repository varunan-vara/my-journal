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
          <SearchBar />
          <Homepage />
        </div>
        } />
        <Route path="/Home" element={
        <div id="RouteContainer">
          <Title />
          <SearchBar />
          <Homepage />
        </div>
        } />
        <Route path="/Post/:type" element={
          <div id="RouteContainer">
            <SearchBar />
            <Content />
          </div>
        } />
      </Routes>
      
      <Footer />
    </div>
  </Router>
  );
}

export default App;

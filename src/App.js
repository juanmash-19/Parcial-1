import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from './components/Menu/Menu.jsx';
import Banner from './components/Banner/Banner.jsx';
import Card from './components/Cards/Cards.jsx';
import Button from './components/Button/Button.jsx';
import Banner2 from './components/Banner/Banner2.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Banner></Banner>
      <Card></Card>
      <Button></Button>
      <Banner2></Banner2>
    </div>
  );
}

export default App;

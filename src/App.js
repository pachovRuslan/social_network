import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Navbar.jsx';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/news/News';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <div className = 'app-wrapper' >
      <Header avatar = {props.state.profilesData[0].avatar} />
      <Nav/>
      <Routes>
        <Route exact path = '/messages/' element = {<MessagesContainer  />} />
        <Route exact path = '/profile' element = {<ProfileContainer />} />
        <Route exact path = '/news' element = {<News profilesData={props.state.profilesData} />} />
        <Route exact path = '/setting' element = {<Settings />} />
      </Routes>
    </div>);
}

export default App;
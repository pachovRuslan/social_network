import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Navbar.jsx';
import MessagesContainer from './components/Messages/MessagesContainer';
import NewsContainer from './components/news/NewsContainer';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <div className = 'app-wrapper' >
      <Header/>
      <Nav/>
      <Routes>
        <Route exact path = '/messages/' element = {<MessagesContainer  />} />
        <Route exact path = '/profile' element = {<ProfileContainer />} />
        <Route exact path = '/news' element = {<NewsContainer />} />
        <Route exact path = '/setting' element = {<Settings />} />
        <Route exact path = '/users' element = {<UsersContainer />} />
      </Routes>
    </div>);
}

export default App;
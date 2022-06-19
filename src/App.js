import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Navbar.jsx';
import Messages from './components/Messages/Messages.jsx';
import { Routes, Route } from 'react-router-dom';
import News from './components/news/News';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';



function App(props) {

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Routes>
        
        <Route exact path='/messages' element={<Messages messages={props.appState.messages} profilesData={props.appState.profilesData} addMessage={props.addMessage}/>} />
        <Route exact path='/messages/1' element={<Messages messages={props.appState.messages} profilesData={props.appState.profilesData} />} />
        <Route exact path='/profile' element={<Profile  profilesData={props.appState.profilesData} addPost={props.addPost}/>} />
        <Route exact path='/news' element={<News profilesData={props.appState.profilesData} />} />
        <Route exact path='/setting' element={<Settings />} />
      </Routes>

    </div>);
}


export default App;

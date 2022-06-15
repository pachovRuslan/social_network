import './App.css';
import Header from './components/Header/Index.jsx';
import Nav from './components/Nav/Index.jsx';
import Content from './components/Content/Index.jsx';
import Messages from './components/Messages/Index.jsx';
import { Routes, Route } from 'react-router-dom';
import Posts from './components/Profile/Posts/Index';

function App(props) {

  return (
    <div className='app-wrapper'>
      <Header  friendsData={props.appState.friendsData}/>
      <Nav />
            <Routes>
        <Route exact path='/messages' element={<Messages messages={props.appState.messages} dialogData={props.appState.friendsData}/>} />
        <Route exact path='/profile' element={<Content  friendsData={props.appState.friendsData}/>} />
        <Route exact path='/news' element={<Posts/>}/>
      </Routes>

    </div>);
}


export default App;

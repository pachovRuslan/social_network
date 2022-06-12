import './App.css';
import Header from './components/Header/Index.jsx';
import Nav from './components/Nav/Index.jsx';
import Content from './components/Content/Index.jsx';
import Messages from './Messages/Messages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content/>
      <Routes>
        <Route exact path='/messages' element={<Messages />} />
        <Route exact path='/profile' element={<Content />} />
      </Routes>

    </div>);
}


export default App;

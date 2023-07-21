import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostDetailComponent from "./components/PostDetailComponent"

function App() {
  return (
    <div className="App">
      <h1>Digit-AD Task</h1>
      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/posts/:id/' element={<PostDetailComponent/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

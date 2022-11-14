
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Student} from './student';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

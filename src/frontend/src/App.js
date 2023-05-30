


import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Front from './Pages/Front.js';



import './App.css'; // Import the CSS file


function App() {
  return (
    <div className='background'>

      <Router>
        <Routes>
          <Route path="/" element={<Front />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;


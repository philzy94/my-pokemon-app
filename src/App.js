import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppHeader from './components/appHeader/AppHeader';
import Default from './pages/default/Default';
import Details from './pages/detail/Details';

function App() {


  return (

    <Router>
        <AppHeader/>
      <Routes>
        <Route exact path="/" element= {<Default/>} />
        <Route exact path="/pokemon/:name/:id" element= {<Details/>} />
      </Routes>

    </Router>
  )
}

export default App;

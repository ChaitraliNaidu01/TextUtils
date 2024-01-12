
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';
import Alerts from './Components/Alerts';
import React from "react";
import ReactDOM from "react-dom";

import {
   BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark Mode has been Enabled", "success")
      // document.title = "Textutils-Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success")
      // document.title = "Textutils-Light Mode";
    }

  }
  return (
    <>
      {/* <Navbar title="TextUtils"  about="AboutHome"/>  */}
       <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Switch>

            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}


export default App;

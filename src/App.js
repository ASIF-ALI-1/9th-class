import "./App.css"
// import React from 'react'npm install tailwindcss

const App = () => {
  return (
    <div className="main">
      <div className="contianer">
          <div><h1>RESUME 1</h1></div>
          <div className="logo">
          <img src="assits\new.png"></img>
          <li>Asif Ali</li>
           </div>
        <div className= "navbar">

          <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Dashbord</a></li>
          <li><a href="#">Saved</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Setting</a></li>
          
          </ul>
        </div>

        




      </div>
              <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        <button type="button" className="btn btn-link">Link</button>
    </div>
  )
}

export default App

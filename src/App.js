import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CONTACT</h1>
        <form action="#" method="post">
          <div class="form-group">
            <input type="text" name="first-name" id="first-name" placeholder="First name" class="form-control"></input>
          </div>
          <div class="form-group">
            <input type="text" name="first-name" id="first-name" placeholder="First name" class="form-control"></input>
          </div>
          <div class="form-group">
            <input type="text" name="first-name" id="first-name" placeholder="First name" class="form-control"></input>
          </div>
          <div class="form-group">
            <input type="email" name="email" id="email" placeholder="Email" class="form-control"></input>
          </div>
          <div class="form-group">
            <input type="tel" name="tel" id="tel" placeholder="Tel" minlength="6" maxlength="10" class="form-control"></input>
          </div>
          <div class="form-group">
            <label for="message"></label>
            <textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-dark">Send</button>
            <button type="reset" class="btn btn-light">Reset</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;

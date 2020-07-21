import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="container">
       <div class="row" id="content">
         <div id="formuliare" class="col-md-6">
          <h1>Bootstrap Forms</h1>
          <form>
            <div>
              
              <label for="inputpassword3" class="col-sm-2 col-form-label">User NAME</label>
              <div class="col-sm-8">
                <input tpye="text" class="form-control" id="inputpassword3" placeholder="UserName"></input>
              </div>
              
              <label for="inputpassword3" class="col-sm-2 col-form-label">EMAIL</label>
              <div class="col-sm-8">
                <input tpye="email" class="form-control" id="inputemail3" placeholder="Email"></input>
              </div>

              <label for="inputpassword3" class="col-sm-2 col-form-label">PASSWORD</label>
              <div class="col-sm-8">
                <input tpye="password" class="form-control" id="inputemail3" placeholder="Password"></input>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">SIGN IN</button>
              </div>
            </div>

            
          </form>
         </div>
       </div>
     </div>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import Union from './Union.png';
import pablo from './pablo.svg';
import './App.scss';

function App() {
  return (
    <div>
    <div className="logo-maker">
    <img src={Union} alt=""  className="logo" />
    <h3 className="logo">lendersqr</h3>
</div>

<div className="login">
    <div className="Two">
      
      <div>
        <img src={pablo} alt="" />
      </div>
    </div>

    <div className="Two">
        <h2>Welcome!</h2>
        <h4>Enter details to login</h4>

        <form method="post" className="signin">
            <div >
                <input type="email"  placeholder='Email' className="inputer" />
            </div>
            <div>
                <input type="password" placeholder='Password' className="inputer" />
                <a  className="hyperlink">Show</a>
            </div>

            <h4 >Forgot Password?</h4>
            <div>
                <button type='submit' className="inputer">LOG IN</button>
            </div>
      </form>
    </div>
</div>
</div>
    
  );
}

export default App;

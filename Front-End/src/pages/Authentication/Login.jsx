import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const navigate = useNavigate(); 

  // Button handlers
  const onClickCashierHandler = () => {
    navigate('/menu'); 
  }

  const onClickManagerHandler = () => {
    navigate('/manager');
  }

  const onClickCustomerHandler = () => {
    navigate('/customer');
  }

  return <div className="login-page">
    <button className='bg-black text-white p-5 rounded font-bold' onClick={onClickCustomerHandler}>Customer View</button>
    <input placeholder = 'Enter Username:'></input>
    <input placeholder = 'Enter Password' type='password'></input>
    <div>
      <button className='bg-black text-white p-5 rounded font-bold' onClick={onClickManagerHandler}>Login As Manager</button>
      <button className='bg-black text-white p-5 rounded font-bold' onClick={onClickCashierHandler}>Login As Cashier</button>
    </div>
  </div>;
}

export default Login;

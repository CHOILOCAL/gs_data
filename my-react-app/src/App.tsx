import { useState, useEffect } from 'react';
import './App.css';
import axiosInstance from './api/axiosInstance'; // Axios 인스턴스 임포트

function App() {
  // const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Tube');

  useEffect(() => {
    axiosInstance.get('/api/hello')
      .then(response => {
        console.log(response.data);
        setMessage(response.data)
      })
      .catch(error => {
        console.error('Error fetching message:', error)
      })
  }, []);

  return (
    <>
    <div className="App">
      <header className="App-header">
        {/* <h1>API Test FE {message}</h1> */}
        {/* <p>{message}</p> */}
        { 'Kakao OAuth 2.0'}
        { 'BE Axios' }
        { }
      </header>
    </div>
    </>
  )
}

export default App

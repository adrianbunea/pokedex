import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const CacheContext = React.createContext(undefined);
caches.open('cache').then((cache) => {
  ReactDOM.render(
    <CacheContext.Provider value={cache}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CacheContext.Provider>,
    document.getElementById('root')
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default CacheContext;

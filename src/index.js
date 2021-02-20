import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cache from './api/Cache.js';

// Before we can actually render our application, we need to generate the
// cache it depends on, this operation takes time the first time, so we
// do it asynchronously, first we get the instance, then, after we get the
// result we can render our App. '_' means we don't use the result of the
// asynchronous operation, we just needed to wait until it completed.
// We will use the cache by importing it in different files.
Cache.getInstance().then(_ => {
  ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    document.getElementById('root')
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

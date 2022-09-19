import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
  <Context>
  <App />
  </Context>
 
</React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Context>
//     <App />
//     </Context>
   
//   </React.StrictMode>,
//   document.getElementById('root')
// );


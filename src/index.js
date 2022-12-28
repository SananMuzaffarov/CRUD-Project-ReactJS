import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Crud from './Home/Crud';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
        <Crud />
    </div>
  );
}
root.render(<App />);
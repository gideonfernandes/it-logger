import React, { useEffect, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import Logs from './components/logs/Logs';

function App() {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddButton />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;

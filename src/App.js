import React, { useEffect, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import Logs from './components/logs/Logs';

function App() {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <Provider store={store}>
        <SearchBar />
        <div className="container">
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Provider>
    </Fragment>
  );
};

export default App;

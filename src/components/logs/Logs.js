import React, { useState, useEffect } from 'react';

import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);

    const response = await fetch('/logs');
    const data = await response.json();
    setLogs(data);

    setLoading(false);
  };

  if (loading) {
    return <Preloader />
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Sistema de Registros</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">Nenhum registro à ser apresentado...</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;

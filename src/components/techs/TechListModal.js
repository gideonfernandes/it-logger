import React, { useState, useEffect } from 'react';

import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);

    const response = await fetch('/techs');
    const data = await response.json();

    setTechs(data);

    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Lista de Técnicos</h4>
        <ul className="collection">
          {!loading &&
            techs.map(tech => (
              <TechItem key={tech.id} tech={tech} />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;

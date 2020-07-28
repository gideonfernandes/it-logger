import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Por favor, informe o nome e sobrenome do novo técnico.'})
    } else {
      console.log(firstName, lastName);

      // Clear fields
      setFirstName('');
      setLastName('');
    };
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Adicionar um novo técnico</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
            <label
              htmlFor="firstName"
              className="active"
            >
              Nome
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
            <label
              htmlFor="lastName"
              className="active"
            >
              Sobrenome
            </label>
          </div>
        </div>       
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close btn blue waves-effect waves-light"
          onClick={onSubmit}
        >
          Adicionar Técnico
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;

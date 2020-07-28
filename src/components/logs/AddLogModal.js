import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Por favor, informe uma mensagem e um técnico.'})
    } else {
      const newLog = {
        message,
        tech,
        attention,
        date: new Date()
      };

      addLog(newLog);

      M.toast({html: `Registro adicionado para ${tech}`});

      // Clear fields
      setMessage('');
      setAttention(false);
      setTech('');
    };
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Apresente o novo registro</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <label
              htmlFor="message"
              className="active"
            >
              Mensagem do registro
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={event => setTech(event.target.value)}
            >
              <option value="" disabled>
                Selecione um técnico
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={event => setAttention(!attention)}
                />
                <span>Necessário atenção</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close btn blue waves-effect waves-light"
          onClick={onSubmit}
        >
          Adicionar Registro
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() =>{
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    };
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Por favor, informe uma mensagem e um técnico.'})
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };

      updateLog(updatedLog);
      M.toast({ html: `Registro de ${tech} atualizado`});

      // Clear fields
      setMessage('');
      setAttention(false);
      setTech('');
    };
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Editar registro</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
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
              <TechSelectOptions />
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
          Editar Registro
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);

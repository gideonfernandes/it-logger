import React from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';
import PropTypes from 'prop-types';

const SearchBar = ({ searchLogs }) => {
  const handleOnChange = event => {
    searchLogs(event.target.value);
  };

  return (
    <nav style={{ MarginBottom: '30px' }} className="blue" >
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              type="search"
              id="search"
              placeholder="Buscar registros.."
              onChange={handleOnChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
              <i className="material-icons">close</i>
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);

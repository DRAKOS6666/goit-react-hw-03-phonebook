import React from 'react';
import propTypes from 'prop-types';

function Filter({ onFindItem, numberOfContacts }) {
  return (
    <label>
      Find contacts by name:
      <input type="text" onChange={onFindItem} />
  {numberOfContacts && <h3>Was finded {numberOfContacts} contact(s)</h3>}
    </label>
  );
}

Filter.propTypes = {
  onFindItem: propTypes.func.isRequired,
  numberOfContacts: propTypes.oneOfType([
    propTypes.object,
    propTypes.number,])
};

export default Filter;

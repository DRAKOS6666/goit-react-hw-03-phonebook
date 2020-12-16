import React from 'react';
import propTypes from 'prop-types';
import './ContactListItem.scss';

function ContactListItem({ contact, onClickDelete }) {
  const { id, name, number } = contact;
  return (
    <>
      {name}: {number}
      <button className="deleteContactBtn" onClick={() => onClickDelete(id)}>
        Delete
      </button>
    </>
  );
}

ContactListItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string,
  }).isRequired,
  onClickDelete: propTypes.func.isRequired,
};

export default ContactListItem;

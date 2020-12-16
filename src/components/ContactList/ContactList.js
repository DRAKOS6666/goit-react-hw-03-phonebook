import React from 'react';
import propTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

import './ContactList.scss';


function ContactList({contacts, deleteContact}) {
 return ( contacts.length === 0 ? <h3>Nothing found</h3> :
   <ul className="contactList">
      {contacts.map(contact => (
        <li className="contactListItem" key={contact.id}>
          <ContactListItem contact={contact} onClickDelete={deleteContact} />
        </li>
      ))}
    </ul>);
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string,
    }),
  ).isRequired,
  deleteContact: propTypes.func.isRequired,
};


export default ContactList;

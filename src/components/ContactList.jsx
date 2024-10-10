import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { ContactList };

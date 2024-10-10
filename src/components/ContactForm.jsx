import React, { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(addContact({ id: nanoid(), name, number }));
      setName('');
      setNumber('');
    },
    [dispatch, name, number]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        required
        onChange={e => setName(e.target.value)}
      />
      <input
        type="tel"
        name="number"
        value={number}
        required
        onChange={e => setNumber(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

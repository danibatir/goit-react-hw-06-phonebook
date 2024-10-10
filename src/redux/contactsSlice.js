import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      // Verificăm dacă contactul există deja
      const duplicate = state.contacts.some(
        contact => contact.name === action.payload.name
      );
      if (!duplicate) {
        state.contacts.push(action.payload);
      } else {
        alert(`${action.payload.name} is already in the contact list.`);
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
export default contactSlice;

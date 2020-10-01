import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const items = createReducer([], {
  [contactsActions.addContact]: (state, action) => [...state, action.payload.contact],
  [contactsActions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
  [contactsActions.getContactsFromLocalStorage]: (state, action) => action.payload,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
})

const notify = createReducer(false, {
  [contactsActions.toggleNotify]: state => !state,
})


export default combineReducers({
  items, // items: items,
  filter, // filter: filter,
  notify,
})
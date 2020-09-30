import {v4 as uuid} from "uuid";
import types from "./contactsTypes";

const addContact = ({name, number}) => ({
  type: types.ADD_CONTACT,
  payload: {
    contact: {
      id: uuid(),
      name,
      number,
    },
  },
});

const deleteContact = idContact => ({
  type: types.DELETE_CONTACT,
  payload: {
    idContact,
  },
});

const changeFilter = event => ({
  type: types.UPDATE_FILTER,
  payload: {
    filter: event.target.value,
  },
});

export default {
  addContact, deleteContact, changeFilter
}
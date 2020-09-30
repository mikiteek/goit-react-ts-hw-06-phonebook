import {v4 as uuid} from "uuid";
import actionTypes from "./contactsTypes";

const addContact = ({name, number}) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    contact: {
      id: uuid(),
      name,
      number,
    },
  },
});

const deleteContact = idContact => ({
  type: actionTypes.DELETE_CONTACT,
  payload: {
    idContact,
  },
});

const changeFilter = event => ({
  type: actionTypes.UPDATE_FILTER,
  payload: {
    filter: event.target.value,
  },
});

export default {
  addContact, deleteContact, changeFilter
}
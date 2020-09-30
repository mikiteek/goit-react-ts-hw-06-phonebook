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

const changeFilter = filter => ({
  type: actionTypes.UPDATE_FILTER,
  payload: {
    filter,
  },
});

export default {
  addContact, deleteContact, changeFilter
}
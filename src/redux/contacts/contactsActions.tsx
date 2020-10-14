import {v4 as uuid} from "uuid";
import {createAction} from "@reduxjs/toolkit";

const addContact = createAction("contact/add", ({name, number}:{name: string, number: string}) => ({
  payload: {
    contact: {
      id: uuid(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction("contact/delete");

const changeFilter = createAction("contact/changeFilter");

const toggleNotify = createAction("contact/toggleNotify");

const getContactsFromLocalStorage = createAction("contact/getContactsFromLocalStorage");

export default {
  addContact, deleteContact, changeFilter, toggleNotify, getContactsFromLocalStorage
}
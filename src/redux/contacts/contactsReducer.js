import {combineReducers} from "redux";
import actionTypes from "./contactsTypes";

const items = (state = [], {type, payload}) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      return [...state, payload.contact];
    case actionTypes.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.idContact);
    default: return state;
  }
};

const filter = (state = "", {type, payload}) => {
  switch (type) {
    case actionTypes.UPDATE_FILTER:
      return payload.filter;
    default: return state;
  }
};

export default combineReducers({
  items, // items: items,
  filter // filter: filter,
})
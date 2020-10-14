import React from "react";
import {connect} from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./Filter.module.scss";
import "./FilterAnimation.css";

interface propTypes {
  onChangeFilter: any,
  value: string,
}

const Filter = ({onChangeFilter, value}: propTypes) => (
  <div className={styles.findBlock}>
    <label className={styles.findLabel}>Find contacts by name</label>
    <input className={styles.findInput} value={value} type="text" name="filter" onChange={({target}) => onChangeFilter(target.value)}/>
  </div>
);

const mapStateToProps = (state: any) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
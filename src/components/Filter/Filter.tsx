import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./Filter.module.scss";
import "./FilterAnimation.css";

const Filter = ({onChangeFilter, value}) => (
  <div className={styles.findBlock}>
    <label className={styles.findLabel}>Find contacts by name</label>
    <input className={styles.findInput} value={value} type="text" name="filter" onChange={({target}) => onChangeFilter(target.value)}/>
  </div>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
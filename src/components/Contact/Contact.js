import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./Contact.module.scss";


class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  handleDeleteContact = () => {
    const {onDeleteContact, id} = this.props;
    onDeleteContact(id);
  }

  render() {
    const {name, number} = this.props;
    return (
      <li className={styles.contactItem}>
        <p className={styles.contactInfo}>{name}: {number}</p>
        <button className={styles.btn} type="button" onClick={this.handleDeleteContact}>Delete</button>
      </li>
    );
  }
}

const mapDispatchToProps = {
  onDeleteContact: contactsActions.deleteContact,
}

export default connect(null, mapDispatchToProps)(Contact);
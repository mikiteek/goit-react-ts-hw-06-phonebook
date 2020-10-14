import React, {Component} from "react";
import {connect} from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./Contact.module.scss";

interface propTypes {
  name: string,
  number: string,
  id: string,
  onDeleteContact: any,
}

class Contact extends Component<propTypes> {

  private handleDeleteContact = (): void => {
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
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./ContactForm.module.scss";
import "./ContactFormAnimation.css";


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  handleSubmit = event => {
    event.preventDefault();
    const {name, number} = this.state;
    const {onSubmit, onShowNotify, contacts} = this.props;

    if (name === "" || number === "")
      return;
    if (contacts.findIndex(contact => contact.name === name) !== -1) {
      onShowNotify();
      return;
    }
    onSubmit({name, number});
  }
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const inputStyles = [styles.formElement, styles.formInput].join(" ");
    return (
      <section className={styles.sectionContacts}>
        <CSSTransition in={true} appear={true} timeout={500} classNames="ContactFormTitle" unmountOnExit>
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <form className={styles.formContacts} onSubmit={this.handleSubmit}>
          <label className={styles.formElement} htmlFor="name">Name</label>
          <input className={inputStyles} type="text" name="name" onChange={this.handleChange}/>
          <label className={styles.formElement} htmlFor="number">Number</label>
          <input className={inputStyles} type="text" name="number" onChange={this.handleChange}/>
          <br/>
          <button className={styles.btn} type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
})

const mapDispatchToProps = {
  onSubmit: contactsActions.addContact,
  onShowNotify: contactsActions.toggleNotify
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
import React, {Component} from "react";
import {connect} from "react-redux";
import {CSSTransition} from "react-transition-group";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./ContactForm.module.scss";
import "./ContactFormAnimation.css";

interface stateTypes {
  name: string,
  number: string,
}

interface contactTypes {
  name: string,
  number: string,
  id: string,
}

interface propTypes {
  onSubmit: any,
  onShowNotify: any,
  contacts: contactTypes[],
}

class ContactForm extends Component<propTypes, stateTypes> {
  state = {
    name: "",
    number: "",
  }

  private handleSubmit = (event: any): void => {
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
    this.setState({name: "", number: ""});
    this.clearInputContactsData();
  }

  private clearInputContactsData = (): void => {
    const inputRefs = document.querySelectorAll(".js-form-input");
    inputRefs.forEach((inputItem: any) => inputItem.value = "");
  }

  private handleChange = (event: any): void => {
    const {name, value} = event.target;
    this.setState({[name]: value} as any);
  }

  render() {
    const inputStyles = [styles.formElement, styles.formInput, "js-form-input"].join(" ");
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

const mapStateToProps = (state: any) => ({
  contacts: state.contacts.items,
})

const mapDispatchToProps = {
  onSubmit: contactsActions.addContact,
  onShowNotify: contactsActions.toggleNotify
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.scss";

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

    this.props.onSubmit({name, number});
  }
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const inputStyles = [styles.formElement, styles.formInput].join(" ");
    return (
      <section className={styles.sectionContacts}>
        <h2 className={styles.title}>Phonebook</h2>
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
export default ContactForm;
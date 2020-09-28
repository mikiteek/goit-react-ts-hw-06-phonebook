import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";


class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }

  render() {
    const {name, number} = this.props;
    return (
      <li className={styles.contactItem}>
        <p className={styles.contactInfo}>{name}: {number}</p>
      </li>
    );
  }
}

export default Contact;
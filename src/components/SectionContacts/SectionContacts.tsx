import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./SectionContacts.module.scss";

class SectionContacts extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }
  render() {
    const {title, children} = this.props;
    return (
      <section>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default SectionContacts;
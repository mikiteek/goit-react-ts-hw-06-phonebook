import React, {Component} from "react";
import styles from "./SectionContacts.module.scss";

class SectionContacts extends Component {
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
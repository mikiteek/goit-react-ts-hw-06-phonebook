import React, {Component} from "react";
import styles from "./ContactNotifyExist.module.scss";

class ContactNotifyExist extends Component {
  render() {
    return (
      <div className={styles.notifyBlock}>
        <p>Contact already exist</p>
      </div>
    );
  }
}

export default ContactNotifyExist;
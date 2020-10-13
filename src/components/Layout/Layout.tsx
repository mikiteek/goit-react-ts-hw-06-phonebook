import React, {Component} from "react";
import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
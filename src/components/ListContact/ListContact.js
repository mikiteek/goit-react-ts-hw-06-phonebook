import React, {Component} from "react";

class ListContact extends Component {

  render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}
export default ListContact;
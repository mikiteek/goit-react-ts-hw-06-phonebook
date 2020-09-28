import React, {Component} from "react";

class SectionContacts extends Component {
  render() {
    const {title, children} = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

export default SectionContacts;
import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import contactsActions from "./redux/contacts/contactsActions"
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import SectionContacts from "./components/SectionContacts/SectionContacts";
import Contact from "./components/Contact/Contact";
import Filter from "./components/Filter/Filter";
import ContactNotifyExist from "./components/ContactNotifyExist/ContactNotifyExist";
import "./AppAnimation.css";

interface contactTypes {
  name: string,
  number: string,
  id: string,
}

interface propTypes {
  visibleContacts: contactTypes[],
  contacts: contactTypes[],
  notify: boolean,
  onHiddenNotify: any,
  saveContactsFromLS: any,
}

class App extends Component<propTypes> {

  componentDidUpdate(prevProps: propTypes) {
    const {contacts, notify} = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    if (notify) {
      setTimeout(this.hiddenNotify, 2500);
    }
  }
  componentDidMount() {
    const contactsLocalStorage = localStorage.getItem("contacts");
    const {saveContactsFromLS} = this.props;
    if (contactsLocalStorage) {
      saveContactsFromLS(JSON.parse(contactsLocalStorage))
    }
  }

  private hiddenNotify = (): void => {
    this.props.onHiddenNotify();
  }

  render() {
    const {visibleContacts, contacts, notify} = this.props;
    return (
      <Layout>
        <CSSTransition timeout={250} in={notify} classNames="ContactNotify" unmountOnExit>
          <ContactNotifyExist/>
        </CSSTransition>
        <ContactForm/>
        <SectionContacts title={"Contacts"}>
          <CSSTransition timeout={250} in={contacts.length > 1} classNames="FilterAnimation" unmountOnExit>
            <Filter/>
          </CSSTransition>
          <TransitionGroup component="ul" in={(visibleContacts.length > 0).toString()}>
            {visibleContacts.map(({name, number, id}) => (
              <CSSTransition key={id} timeout={250} classNames="ContactsItem">
                <Contact name={name} number={number} id={id}/>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </SectionContacts>
      </Layout>
    );
  }

}

const mapStateToProps = (state: any) => {
  const {items, filter, notify} = state.contacts;
  return {
    visibleContacts: items.filter(({name}:{name: string}) => name.toLowerCase().includes(filter.toLowerCase())),
    contacts: state.contacts.items,
    notify,
  }
}

const mapDispatchToProps = {
  onHiddenNotify: contactsActions.toggleNotify,
  saveContactsFromLS: contactsActions.getContactsFromLocalStorage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

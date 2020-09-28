import React, {Component} from 'react';
import {v4 as uuid} from "uuid";
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import SectionContacts from "./components/SectionContacts/SectionContacts";
import Contact from "./components/Contact/Contact";
import ListContact from "./components/ListContact/ListContact";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
  };

  addContact = ({name, number}) => {
    const {contacts} = this.state;

    if (name === "" || number === "")
      return;
    if (contacts.findIndex(contact => contact.name === name) !== -1) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contactNew = {
      id: uuid(),
      name,
      number,
    };
    this.setState(({contacts}) => ({
      contacts: [...contacts, contactNew],
    }));
  };

  render() {
    const {contacts} = this.state;
    return (
      <Layout>
        <ContactForm onSubmit={this.addContact}/>
        <SectionContacts title={"Contacts"}>
          {contacts.length > 0 && <ListContact>
            {contacts.map(({name, number, id}) => (
              <Contact key={id} name={name} number={number}/>
            ))}
          </ListContact>}
        </SectionContacts>
      </Layout>
    );
  }

}

export default App;

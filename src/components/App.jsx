import React, { Component } from 'react';

import { ContactForm } from './Form/Form';
import { Application, FormTitle } from './App.styled';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });

    const { contacts } = this.state;

    const isContactExists = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContactExists) {
      return alert(`${newContact.name} is already in your phonebook`);
    }
  };

  render() {
    return (
      <div>
        <Application>
          <div>
            <FormTitle>Phonebook</FormTitle>
            <ContactForm onAddContact={this.addContact}></ContactForm>
          </div>
          <div>
            <ContactList contacts={this.state.contacts} />
          </div>
        </Application>
      </div>
    );
  }
}

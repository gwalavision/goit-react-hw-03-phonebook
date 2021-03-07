import { useState } from 'react';

import ContactsInput from './components/ContactsInput';
import ContactsList from './components/ContactsList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteItem = id => {
    setContacts(prevState => [
      ...prevState.filter(contact => contact.id !== id),
    ]);
  };

  const getContacts = getVisibleContacts();

  return (
    <>
      <ContactsInput
        title="Phonebook"
        contacts={contacts}
        setContacts={setContacts}
      />
      <ContactsList
        title="Contacts"
        contacts={getContacts}
        filter={filter}
        onChange={changeFilter}
        onDelete={deleteItem}
      />
    </>
  );
}

export default App;

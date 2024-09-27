
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, selectContacts } from './redux/contactsSlice';
import { changeFilter, selectNameFilter } from './redux/filtersSlice';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={(value) => dispatch(changeFilter(value))} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

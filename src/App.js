import ContactList from './components/ContactList/ContactList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

export default function App() {
  return (
    <>
      <h1 className={s}>Phonebook</h1>
      <Form />
      <h2 className={s}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

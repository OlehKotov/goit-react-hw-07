import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";


function App() {
  return (
    <div>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />  
    </div>
  );
}

export default App;

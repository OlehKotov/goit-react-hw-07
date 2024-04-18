import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { getContacts, getStatusFilter } from "../../redux/selectors";

export const ContactList = () => {
  const selectContacts = useSelector(getContacts);
  const selectNameFilter = useSelector(getStatusFilter);

  const filteredContacts = useMemo(
    () =>
      selectContacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(selectNameFilter.toLowerCase()) ||
          contact.number.toLowerCase().includes(selectNameFilter.toLowerCase())
        );
      }),
    [selectNameFilter, selectContacts]
  );

  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((contact) => {
            return <Contact contact={contact} key={contact.id} />;
          })}
      </ul>
    </div>
  );
};
export default ContactList;

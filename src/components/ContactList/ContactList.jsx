import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getContacts, getStatusFilter } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps";

export const ContactList = () => {
//   const dispatch = useDispatch();

// useEffect(()=> {
// dispatch(fetchContacts())
// }, [dispatch])

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

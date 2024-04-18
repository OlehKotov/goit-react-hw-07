import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.contact}>
      <div className={css.contactWrapper}>
        <p className={css.contactName}>
          <FaUser className={css.contactIcon} />
          {contact.name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt className={css.contactIcon} />
          {contact.number}
        </p>
      </div>

      <button
        className={css.contactButton}
        type="button"
        onClick={() => {
          onDeleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

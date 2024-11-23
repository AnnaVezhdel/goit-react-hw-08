import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={s.contactItem}>
      <div className={s.contactData}>
        <div className={s.name}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={s.name}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;

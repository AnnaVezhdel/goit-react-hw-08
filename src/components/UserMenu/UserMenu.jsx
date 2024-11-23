import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.wrap}>
      <div className={s.welcome}>Welcome, {user.name}</div>
      <button className={s.exitBtn} onClick={() => dispatch(logout())}>
        EXIT
      </button>
    </div>
  );
};

export default UserMenu;

import styles from "../../styles/Dashboard.module.css";
import Input from "@material-ui/core/Input";
import { ReactComponent as Searchicon } from "../../assets/svg/search__icon.svg";
import { ReactComponent as NotificationBell } from "../../assets/svg/notification__bell.svg";
import DropdownMenu from "./DropdownMenu";
export default function UserBar({ user_data }) {
  return (
    <section className={styles.user__bar}>
      <div className={styles.user__bar__items}>
        <div className={styles.search__bar}>
          <Searchicon className={styles.search__icon} />
          <Input
            className={styles.search__input}
            placeholder="Buscar"
            disableUnderline={true}
            spellCheck={false}
          />
        </div>
        <NotificationBell className={styles.notification__bell} />
        <DropdownMenu user_data={user_data} />
      </div>
    </section>
  );
}

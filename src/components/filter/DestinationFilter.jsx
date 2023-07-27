import styles from "./DestinationFilter.module.scss";

const DestinationFilter = ({ title, active, setActive }) => {
  return (
    <nav
      className={active === title ? styles.selected : styles.unselected}
      onClick={() => {
        setActive(title);
      }}
    >
      {title}
    </nav>
  );
};

export default DestinationFilter;

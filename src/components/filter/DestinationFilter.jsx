import styles from "./DestinationFilter.module.scss";

const DestinationFilter = ({ title, active, index, setIndex }) => {
  return (
    <nav
      className={active === title ? styles.selected : styles.unselected}
      onClick={() => {
        setIndex(index);
      }}
    >
      {title}
    </nav>
  );
};

export default DestinationFilter;

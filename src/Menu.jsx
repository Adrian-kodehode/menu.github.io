import Dish from "./Dish";
import styles from "./Menu.module.css";

function Menu({ dishes }) {
  return (
    <div className={styles.menuContainer}>
      {dishes.map((dish) => (
        <Dish key={dish.id} data={dish} />
      ))}
    </div>
  );
}

export default Menu;

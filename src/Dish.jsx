import styles from "./Menu.module.css";

function Dish({ data }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{data.name}</h2>
        <p>
          <strong>Pris:</strong> {data.price}
        </p>
        <p>
          <strong>Ingredienser:</strong> {data.ingredients}
        </p>
        <p>
          <strong>Kategori:</strong> {data.category}
        </p>
      </div>
    </div>
  );
}

export default Dish;

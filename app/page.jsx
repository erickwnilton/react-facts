import styles from "../styles/home.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <div className={styles.second_child}>
          <button className={styles.button}>
            &#9889;
          </button>
        </div>
      </div>
    </div>
  )
}
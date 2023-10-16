import styles from "./modal.module.css";

export function Modal({ isOpen, isClose }) {

  if (isOpen) {
    return (
      <div className={styles.container}>
        <div className={styles.child}>
          <div className={styles.second_child}>
            <div className={styles.third__child}>
              <button
                onClick={isClose}
                className={styles.fourth__child}
              >
                &#10005;
              </button>
            </div>
            <div className={styles.content}>
              <h1>welcome</h1>
            </div>
            <div className={styles.second__content}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloremque.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
"use client"

import { Modal } from "@/modal";
import { useState } from "react";
import styles from "../styles/home.module.css";

export default function Main() {
  const [OpenModal, setOpenModal] = useState(false)

  function handleOpenModal() {
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <div className={styles.second_child}>
          <button
            className={styles.button}
            onClick={handleOpenModal}
          >
            &#9889;
          </button>
        </div>
        <div>
          <Modal
            isOpen={OpenModal}
            isClose={handleCloseModal} />
        </div>
      </div>
    </div>
  )
}
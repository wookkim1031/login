import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

export default function LoginButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))}
      >
        Sign in
      </motion.button>
      {modalOpen && (
        <Modal modalOpen={modalOpen} handleClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}

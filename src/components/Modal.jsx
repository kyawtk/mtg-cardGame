import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";
const Modal = ({ children }) => {
  return (
    
      <motion.div
      key={232234}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal"
      >
        {children}
      </motion.div>
   
  );
};

export default Modal;

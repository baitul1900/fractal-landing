"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

const Toast = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyles = clsx(
    "fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white transition-transform transform",
    {
      "bg-green-500": type === "success",
      "bg-red-500": type === "error",
      "translate-x-0 opacity-100": visible,
      "translate-x-full opacity-0": !visible,
    }
  );

  return (
    <div className={toastStyles}>
      {message}
    </div>
  );
};

export default Toast;

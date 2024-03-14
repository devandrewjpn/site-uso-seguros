import React, { createContext, useContext, useState } from 'react';

const FuneralModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plan, setPlan] = useState(1);

  const updatePlan = (newPlan) => {
    setPlan(newPlan);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FuneralModalContext.Provider value={{ isModalOpen, openModal, closeModal, plan, updatePlan }}>
      {children}
    </FuneralModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(FuneralModalContext);
};

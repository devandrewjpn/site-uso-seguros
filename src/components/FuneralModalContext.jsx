import React, { createContext, useContext, useState } from 'react';

const FuneralModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('abrir modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('fechar modal');
    setIsModalOpen(false);
  };

  return (
    <FuneralModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </FuneralModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(FuneralModalContext);
};

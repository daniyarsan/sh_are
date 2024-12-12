import React, { createContext, useState } from 'react';

export interface ModalContextType {
  modal: React.ReactNode | undefined;
  modalOpened: boolean;
  openModal: (modal: React.ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modal, setModal] = useState<React.ReactNode | undefined>();

  const openModal = (modal: React.ReactNode) => {
    setModal(modal);
    setModalOpened(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setModal(false);
    setModalOpened(false);
    document.body.classList.remove('overflow-y-hidden');
  };
  // useEffect(() => {
  //   console.log(modalOpened);
  // }, [modalOpened]);

  return (
    <ModalContext.Provider
      value={{ modal, modalOpened, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

import React from "react";
import { LuX } from "react-icons/lu";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#170C3F] rounded-xl p-8 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <LuX size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 dark:text-white">{title}</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="dark:text-[#B7B0B0] text-[#717070]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

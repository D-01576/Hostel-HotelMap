import React, { useEffect } from "react";

interface MessageProps {
  message: string;
  onClose: () => void;
  error: boolean;
}

const Message: React.FC<MessageProps> = ({ message, onClose, error }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div 
      className={`fixed bottom-4 left-4 ${error ? 'bg-green-100 border-green-400 text-green-700' : 'bg-green-100 border-green-400 text-green-700'} px-4 py-2 rounded-md shadow-md transition-opacity duration-300`}
    >
      {message}
    </div>
  );
};

export default Message;

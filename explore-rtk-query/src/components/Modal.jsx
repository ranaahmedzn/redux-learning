import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-white text-2xl leading-none"
                    >
                        &times;
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
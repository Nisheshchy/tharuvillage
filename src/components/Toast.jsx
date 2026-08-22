import { useState, useCallback } from 'react';
import { ToastContext } from '../hooks/useToast';

let toastId = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3500) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type, exiting: false }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 350);
    }, duration);
  }, []);

  const toast = useCallback(
    (message, type = 'info') => addToast(message, type),
    [addToast]
  );

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`toast-item toast-${t.type} ${t.exiting ? 'toast-exit' : ''}`}
          >
            <span style={{ fontSize: 18 }}>
              {t.type === 'success' && '✓'}
              {t.type === 'info' && '✦'}
              {t.type === 'warning' && '⚡'}
            </span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

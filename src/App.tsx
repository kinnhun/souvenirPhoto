import { useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';

const TOAST_LIMIT = 3;

function App() {
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <>
      <AppRouter />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: '14px',
          },
        }}
      />
    </>
  );
}

export default App;

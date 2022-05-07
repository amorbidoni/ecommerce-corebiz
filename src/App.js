import './App.scss';
import { CartProvider } from './components/context/CartProvider';

import { AppRouter } from './routes/routes';

function App() {
  return (
    <main className="main">
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </main>
  );
}

export default App;

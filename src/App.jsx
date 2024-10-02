import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home.jsx';
import ErrorPage from './views/ErrorPage.jsx';

// Definir las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />  // Proveedor de rutas
  );
};

export default App;

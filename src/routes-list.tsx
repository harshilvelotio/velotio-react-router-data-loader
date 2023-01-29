import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./404-page";
import PokemonDetails, { loader as pokemonLoader } from "./routes/pokemon";
import ProtecteRoute from "./routes/protected-route";
import Root, { loader as rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/pokemon/:id",
        element: <PokemonDetails />,
        loader: pokemonLoader,
      },
    ],
  },
  {
    element: <ProtecteRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <div>ProtectedRoute</div>,
      },
    ],
  },
]);

export default router;

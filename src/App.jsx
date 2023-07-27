import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";

const routeData = [
  {
    path: "/destination",
    element: <DestinationPage />,
  },
  {
    path: "/crew",
    element: <CrewPage />,
  },
  {
    path: "/technology",
    element: <TechnologyPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routeData.map((data) => (
            <Route path={data.path} element={data.element} key={data.path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

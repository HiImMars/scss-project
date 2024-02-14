import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default App;

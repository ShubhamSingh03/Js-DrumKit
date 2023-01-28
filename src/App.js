import "./App.css";

// routes
import { Routes, Route } from "react-router-dom";

//layout
import PageLayout from "./layout/PageLayout";

// pages
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

import sample from "./sample.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { parsePage } from "./utils/parse-page";

const router = createBrowserRouter(sample.map((e) => parsePage(e)));

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

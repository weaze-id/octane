import { Page } from "./models/page";
import sample from "./sample.json";
import { RenderComponent } from "./components/RenderComponent";
import { createBrowserRouter, json, RouteObject, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(sample.map((e) => parsePage(e)));

export function parsePage(page: Page): RouteObject {
  return {
    path: page.path,
    loader: async () => {
      let data: any = {};
      for (let i = 0; i < (page.loaders?.length ?? 0); i++) {
        const loader = page.loaders![i];
        const response = await fetch(loader.url);

        data[loader.name] = await response.json();
      }

      return json(data, 200);
    },
    element: (
      <>
        {page.components.map((e) => (
          <RenderComponent component={e} />
        ))}
      </>
    ),
  };
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

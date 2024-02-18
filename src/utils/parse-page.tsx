import { LoaderFunctionArgs, RouteObject, json } from "react-router-dom";
import { Page } from "../models/page";
import { RenderComponent } from "../components/RenderComponent";

async function createLoader(page: Page, { params }: LoaderFunctionArgs) {
  const data: any = {};
  const paramKeys = Object.keys(params);

  for (let i = 0; i < (page.loaders?.length ?? 0); i++) {
    const loader = page.loaders![i];

    let url = loader.url;
    for (let j = 0; j < paramKeys.length; j++) {
      const paramKey = paramKeys[j];
      url = url.replace(":" + paramKey, params[paramKey]!);
    }

    const response = await fetch(url);

    data[loader.name] = await response.json();
  }

  return json(data, 200);
}

export function parsePage(page: Page): RouteObject {
  return {
    path: page.path,
    loader: async (args) => createLoader(page, args),
    children: page.children?.map((e) => parsePage(e)),
    element: (
      <>
        {page.components.map((e) => (
          <RenderComponent component={e} />
        ))}
      </>
    ),
  };
}

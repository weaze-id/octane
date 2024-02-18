import { Component } from "../models/component";
import { RenderGrid } from "./RenderGrid";
import { RenderGridItem } from "./RenderGridItem";
import { RenderOutlet } from "./RenderOutlet";
import { RenderText } from "./RenderText";

export function RenderComponent({ component }: { component: Component }) {
  switch (component.name) {
    case "text":
      return <RenderText component={component} />;

    case "grid":
      return <RenderGrid component={component} />;

    case "grid-item":
      return <RenderGridItem component={component} />;

    case "outlet":
      return <RenderOutlet />;

    default:
      return <></>;
  }
}

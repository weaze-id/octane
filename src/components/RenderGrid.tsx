import { Grid } from "@mui/material";
import { Component } from "../models/component";
import { RenderComponent } from "./RenderComponent";
import { useGetProperty } from "../hooks/useGetProperty";

export function RenderGrid({ component }: { component: Component }) {
  const getProperty = useGetProperty();

  const properties = component.properties;
  const components = component.components;

  const spacing = getProperty("spacing", properties);

  return (
    <Grid container spacing={spacing as any}>
      {components?.map((e) => (
        <RenderComponent component={e} />
      ))}
    </Grid>
  );
}

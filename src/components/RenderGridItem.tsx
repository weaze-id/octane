import { Grid } from "@mui/material";
import { Component } from "../models/component";
import { RenderComponent } from "./RenderComponent";
import { useGetProperty } from "../hooks/useGetProperty";

export function RenderGridItem({ component }: { component: Component }) {
  const getProperty = useGetProperty();

  const properties = component.properties;
  const components = component.components;

  const spacing = getProperty("spacing", properties);
  const xs = getProperty("xs", properties);
  const sm = getProperty("sm", properties);
  const md = getProperty("md", properties);
  const lg = getProperty("lg", properties);
  const p = getProperty("p", properties);

  return (
    <Grid item spacing={spacing as any} xs={xs as any} sm={sm as any} md={md as any} lg={lg as any} p={p as any}>
      {components?.map((e) => (
        <RenderComponent component={e} />
      ))}
    </Grid>
  );
}

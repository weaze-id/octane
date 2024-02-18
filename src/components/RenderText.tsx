import { Typography } from "@mui/material";
import { Component } from "../models/component";
import { useGetProperty } from "../hooks/useGetProperty";

export function RenderText({ component }: { component: Component }) {
  const getProperty = useGetProperty();

  const properties = component.properties;

  const variant = getProperty("variant", properties);
  const align = getProperty("align", properties);
  const paragraph = getProperty("paragraph", properties);
  const gutterBottom = getProperty("gutterBottom", properties);
  const text = getProperty("text", properties);

  return (
    <Typography
      variant={variant as any}
      align={align as any}
      paragraph={paragraph as any}
      gutterBottom={gutterBottom as any}
    >
      {text}
    </Typography>
  );
}

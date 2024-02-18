import { Property } from "./property";

export type Component = {
  name: string;
  properties?: Property[];
  components?: Component[];
};

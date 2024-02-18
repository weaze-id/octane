import { Component } from "./component";
import { Loader } from "./loader";

export type Page = {
  path: string;
  loaders?: Loader[];
  children?: Page[];
  components: Component[];
};

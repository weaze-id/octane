import { useLoaderData } from "react-router";
import { Property } from "../models/property";

export function useGetProperty() {
  const data = useLoaderData() as any;

  const getProperty = (name: string, properties: Property[] | undefined) => {
    const value = properties?.find((e) => e.name === name)?.value;
    if (!(value?.startsWith("{fromData:") && value.endsWith("}"))) {
      return value;
    }

    const keys = value.replace("{fromData:", "").replace("}", "").split(":");

    let result = data;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result = result[key];

      if (result === undefined) {
        return undefined;
      }
    }

    return result;
  };

  return getProperty;
}

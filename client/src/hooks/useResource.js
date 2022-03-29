import { useState, useEffect } from "react";
import axios from "axios";
import { MESSAGES } from "../config/constants";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    if (resourceUrl) {
      (async () => {
        const response = await axios.get(resourceUrl);
        if (response.status !== 200) {
          throw new Error(MESSAGES.API_ERROR);
        }
        setResource(response.data);
      })();
    }
  }, [resourceUrl]);

  return resource;
};

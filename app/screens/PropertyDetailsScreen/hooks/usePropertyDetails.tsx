import { useEffect, useState } from "react";
import { fetchPropertyById } from "../../../../services/apis/Properties/PropertiesService";
import { PropertyDetailsType } from "../../../../services/apis/Properties/types";

const usePropertyDetailsHook = (id: number) => {
  const [property, setProperty] = useState<PropertyDetailsType>();

  useEffect(() => {
    fetchPropertyById(Number(id)).then((data) => {
      if (data?.id) {
        setProperty(data);
      }
    });
  }, [id]);

  return { property };
};

export default usePropertyDetailsHook;

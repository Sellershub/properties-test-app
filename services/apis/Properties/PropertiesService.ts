const fetchProperties = async (query: string = "", status?: number) => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/Properties?query=${query}&status=${status}`
    );
    const data = await response.json();
    return data.properties;
  } catch (error) {
    console.log(error);
  }
};

const fetchPropertyById = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/Properties/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchProperties, fetchPropertyById };

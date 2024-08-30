import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
//CRUD OPERATIONS
export const editUser = async (id, editData, setDetails) => {
  try {
    const response = await axios.patch(`${BASE_URL}/users/${id}`, editData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setDetails((prev) => {
      const index = prev.findIndex((user) => user.id === id);

      if (index !== -1) {
        const updatedDetails = [...prev];
        updatedDetails[index] = response.data;
        return updatedDetails;
      } else {
        return prev;
      }
    });
    if (response) console.log(response);
    return response;
  } catch (error) {
    console.error("Failed to edit user:", error);
    throw new Error("Failed to edit user");
  }
};
export const deleteUser = async (userId, setDetails) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);

    setDetails((prev) => {
      const updatedDetails = prev.filter((user) => user.id !== userId);
      return updatedDetails;
    });
    return response;
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw new Error("Failed to delete user");
  }
};
export const createUser = async (userData, setDetails, setTotalCount) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;
    setDetails((prev) => [...prev, data]);
    setTotalCount((prev) => prev + 1);
    console.log(response, "response");
    return response;
  } catch (error) {
    console.error("Failed to add user:", error);
    throw new Error("Failed to add user");
  }
};

export const getUsers = async (
  page,
  limit,
  setIsLoading,
  setError,
  setDetails
) => {
  setIsLoading(true);
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      params: { _page: page, _limit: limit },
    });
    setDetails(response.data);
    setIsLoading(false);
  } catch (error) {
    setError("Failed to fetch users");
    setIsLoading(false);
  }
};

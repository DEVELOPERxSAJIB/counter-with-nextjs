import Todo from "@/models/Todo";
import axios from "axios";

// create server component to get data
export const getAllUser = async () => {
  // get response
  const response = await axios.get("http://localhost:3000/api/user");

  // validation
  if (!response.data) throw new Error("can't get users");

  // send data
  return response.data.users;
};

// export user data
export default getAllUser;

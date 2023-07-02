import axios from "axios";

export const register = async (nick, mail, pass) => {
  try {
    const userList = await axios.get(
      "https://todo-team.onrender.com/api/user/all"
    );

    if (
      userList.data.some((user) => user.nick === nick) ||
      userList.data.some((user) => user.mail === mail)
    ) {
      alert("nick o mail en uso");
    } else {
      if (nick.includes("Admin")) {
        const userCreate = await axios.post(
          "https://todo-team.onrender.com/api/user/add",
          { nick, mail, pass, role: "Admin" }
        );
      } else {
        const userCreate = await axios.post(
          "https://todo-team.onrender.com/api/user/add",
          { nick, mail, pass }
        );
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

export const loggin = async (mail, pass) => {
  try {
    const userLog = await axios.post(
      "https://todo-team.onrender.com/api/user/loggin",
      { mail, pass }
    );
    localStorage.setItem("User", JSON.stringify(userLog.data.result));

    return userLog.data.canLog;
  } catch (error) {
    console.error(error);
  }
};

export const getUserGroups = async (user) => {
  try {
    const response = await axios.post(
      "https://todo-team.onrender.com/api/group/user/",
      user
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteGroup = async (id) => {
  try {
    const response = await axios.delete(
      `https://todo-team.onrender.com/api/group/${id}`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

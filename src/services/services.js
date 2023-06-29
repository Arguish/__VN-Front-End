import axios from "axios";

export const register = async (nick, mail, pass) => {
  try {
    const userList = await axios.get(
      "https://todo-team.onrender.com/api/user/all"
    );
    console.log(userList.data);

    if (
      userList.data.some((user) => user.nick === nick) ||
      userList.data.some((user) => user.mail === mail)
    ) {
      console.log("nick o mail repetido");
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
        console.log(userCreate);
      }
      alert("Usuario creado (de verdad)");
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
    console.log(userLog);
    console.log(userLog.data.canLog);
    localStorage.setItem("User", JSON.stringify(userLog.data.result));

    return userLog.data.canLog;
  } catch (error) {
    console.error(error);
  }
};

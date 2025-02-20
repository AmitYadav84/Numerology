const UserKey = "User";

export const getLocalStorageUserData = () => {
  const rawUser = localStorage.getItem(UserKey);
  if (!rawUser || rawUser === "undefined") {
    return {
      firstName: "",
      lastName: "",
      doB: "",
      gender: "",
    };
  }
  try {
    return JSON.parse(rawUser);
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return {
      firstName: "",
      lastName: "",
      doB: "",
      gender: "",
    };
  }
};

export const setLocalStorageUserData = (user) => {
    return localStorage.setItem(UserKey, JSON.stringify(user));
}
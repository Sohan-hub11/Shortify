//import wrapAsync from "../utils/tryCatchWrapper";

export const register_user = wrapAsync ((req, res) => {
  res.send("Register");
})

export const login_user = wrapAsync ((req, res) => {
  res.send("Login");
})
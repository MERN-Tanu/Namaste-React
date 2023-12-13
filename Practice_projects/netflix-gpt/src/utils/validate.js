// (?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*
// regex = /^(?!.*\.{2})[a-zA-Z0-9][a-zA-Z0-9#$%&\*\+-/=\?\_`|~]*@[a-zA-Z0-9][a-zA-Z0-9-_.]*\.[a-zA-Z]{2,4}$/;

export const checkValidateData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};

export const emailValidator = email => {
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return EMAIL_REGEX.test(email);
};

export const passwordValidator = password => {
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return PASSWORD_REGEX.test(password);
};

export const contactValidator = phoneNumber => {
  const CONTACT_REGEX = /^\d{1,10}$/;
  return CONTACT_REGEX.test(phoneNumber);
};

export const nameValidator = fullName => {
  const NAME_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return NAME_REGEX.test(fullName);
};

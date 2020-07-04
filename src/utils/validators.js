export const validateRequired = (value) => {
  if (value === '' || value === undefined || value === null) {
    return false;
  }
  return true;
};

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmail = (value) => value && EMAIL_PATTERN.test(value);

const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
export const validatePassword = (value) => value && PASSWORD_PATTERN.test(value);

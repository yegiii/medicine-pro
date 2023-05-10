const Validation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name Required";
  } else if (values.name.length < 5) {
    errors.name = "Name must be more than 5 char";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be more than 8 char";
  }

  return errors;
};

export default Validation;

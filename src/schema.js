import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Username is required")
    .min(2, "Name must be at least two characters"),
  size: yup.string().oneOf(["Small", "Medium", "Large"], "Size is required"),
  sauce: yup
    .string()
    .oneOf(
      ["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"],
      "Sauce is required"
    ),
});

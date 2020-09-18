import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = e => {
    e.preventDefault();
    submit();
  };

  const onChange = e => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Build your own pizza!</h2>
      <label htmlFor="name">
        <input
          type="text"
          value={values.name}
          onChange={onChange}
          name="name"
        />
      </label>
      <label htmlFor="size">
        Choice of Size
        <select name="size" value={values.size} onChange={onChange}>
          <option value="">Select</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <label>
        Choice of Sauce
        <input
          type="radio"
          name="sauce"
          value="Original Red"
          checked={values.sauce === "Original Red"}
          onChange={onChange}
        />
      </label>
      <label>
        <input
          type="radio"
          name="sauce"
          value="Garlic Ranch"
          checked={values.sauce === "Garlic Ranch"}
          onChange={onChange}
        />
      </label>
    </form>
  );
}

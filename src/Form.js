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
        Name
        <input
          type="text"
          value={values.name}
          onChange={onChange}
          name="name"
        />
      </label>
      <h3>Choice of Size</h3>
      <label htmlFor="size">
        <select name="size" value={values.size} onChange={onChange}>
          <option value="">Select</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <h3>Choice of Sauce</h3>
      <label>
        Original Red
        <input
          type="radio"
          name="sauce"
          value="Original Red"
          checked={values.sauce === "Original Red"}
          onChange={onChange}
        />
      </label>
      <label>
        Garlic Ranch
        <input
          type="radio"
          name="sauce"
          value="Garlic Ranch"
          checked={values.sauce === "Garlic Ranch"}
          onChange={onChange}
        />
      </label>
      <label>
        BBQ Sauce
        <input
          type="radio"
          name="sauce"
          value="BBQ Sauce"
          checked={values.sauce === "BBQ Sauce"}
          onChange={onChange}
        />
      </label>
      <label>
        Spinach Alfredo
        <input
          type="radio"
          name="sauce"
          value="Spinach Alfredo"
          checked={values.sauce === "Spinach Alfredo"}
          onChange={onChange}
        />
      </label>
      <h3>Add Toppings</h3>
      <label>
        Pepperoni
        <input
          type="checkbox"
          name="pepperoni"
          checked={values.pepperoni}
          onChange={onChange}
        />
      </label>
      <label>
        Sausage
        <input
          type="checkbox"
          name="sausage"
          checked={values.sausage}
          onChange={onChange}
        />
      </label>
      <label>
        Onions
        <input
          type="checkbox"
          name="onions"
          checked={values.onions}
          onChange={onChange}
        />
      </label>
      <label>
        Pineapple
        <input
          type="checkbox"
          name="pineapple"
          checked={values.pineapple}
          onChange={onChange}
        />
      </label>
      <h3>Special Instructions</h3>
      <label>
        Instructions
        <input
          type="textarea"
          name="instructions"
          value={values.instructions}
          onChange={onChange}
        />
      </label>
      <div>
        <button disabled={disabled}>Add to Order</button>
        <article className="errors">
          <p>{errors.name}</p>
          <p>{errors.size}</p>
          <p>{errors.sauce}</p>
        </article>
      </div>
    </form>
  );
}

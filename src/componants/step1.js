import React from "react";
import restaurantsData from "./data/dishes";
import Select from "react-select";
import { Field, Form, Formik, FormikProps } from "formik";
const category = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
];
function MealCategory(props) {
  return (
    <div className="item">
      <lable className="lable ">Followers</lable>
      <Select
        options={category}
        name="follow"
        onChange={(e) => props.setmealcategory(e)}
      />
      <input type="number" required />
    </div>
  );
}

export default MealCategory;

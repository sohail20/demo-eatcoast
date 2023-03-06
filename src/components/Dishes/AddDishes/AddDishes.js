import React from "react";
import { useState, useCallback } from "react";
import { useFormik } from "formik";
import debounce from "lodash.debounce";
import Box from "@mui/material/Box";
import AddDishesSubHeader from "./AddDishesSubHeader";
import { AddDishesFieldBox } from "./AddDishesFieldBox";



export default function AddDishes({ setOpenBackToDish }) {
  const [disabled, setDisabled] = useState(true)

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      mealCourse: "",
      addOnes: "",
      forReview: true,
      image: "",
      ingredient: [],
      nutritionInformation: []
    },
    onSubmit: (values) => {
      console.log("values,", values)
      // let formData = new FormData()

      // for (let key in form) {
      //   Array.isArray(form[key])
      //     ? form[key].forEach(value => formData.append(key, value))
      //     : formData.append(key, form[key]);
      // }
    },
  });

  const onChangeValue = useCallback(
    debounce(() => {
      setDisabled(false);
    }, 800),
    []
  );

  return (
    <>
      <Box pl="26px" pr="24px" pb="24px">
        <form onSubmit={formik.handleSubmit} onChange={onChangeValue}>
          <Box mb="28px">
            <AddDishesSubHeader disabled={disabled} setOpenBackToDish={setOpenBackToDish} />
          </Box>
          <Box>
            <AddDishesFieldBox formik={formik} disabled={disabled} setDisabled={setDisabled} />
          </Box>
        </form>
      </Box>
    </>
  );
}

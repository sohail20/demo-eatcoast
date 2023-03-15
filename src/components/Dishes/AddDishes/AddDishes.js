import React, { useMemo } from "react";
import { useState, useCallback } from "react";
import { useFormik } from "formik";
import debounce from "lodash.debounce";
import Box from "@mui/material/Box";
import AddDishesSubHeader from "./AddDishesSubHeader";
import { AddDishesFieldBox } from "./AddDishesFieldBox";
import { useAddDishesMutation, useGetSingleDishQuery, useUpdateDishesMutation } from "api/dishes"
import FullPageLoader from "components/Loader/FullPageLoader";
import { generateImageURL } from "helper";


export default function AddDishes({ id, setOpenBackToDish }) {
  const [disabled, setDisabled] = useState(true)
  const [isDraft, setIsDraft] = useState(false)
  const [image, setImage] = useState("./images/image profile.svg");
  const [addDishes, { isLoading }] = useAddDishesMutation()
  const [updateDish, { isLoading: updating }] = useUpdateDishesMutation()
  const { data: editedDishes, isLoading: loadingToEdit } = useGetSingleDishQuery(id, { skip: id === null })
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
    onSubmit: (form) => {
      let formData = new FormData()

      for (let key in form) {
        formData.append(key, form[key]);
      }
      if (id !== null) {
        formData.append("id", id);
        return updateDish({ data: formData, status: isDraft ? "draft" : "request" }).then((res) => {
          console.log("res", res)
        })
      }
      addDishes({ data: formData, status: isDraft ? "draft" : "request" }).then((res) => {
        console.log("res", res)
      })
    },
  });

  const onChangeValue = useCallback(
    debounce(() => {
      setDisabled(false);
    }, 800),
    []
  );

  useMemo(() => {
    if (id !== null && editedDishes && editedDishes.data) {
      const { name, description, image, forReview, ingridients, NutritionInformation } = editedDishes.data
      formik.initialValues.name = name
      formik.initialValues.description = description
      formik.initialValues.forReview = forReview
      formik.initialValues.ingredient = ingridients
      formik.initialValues.nutritionInformation = NutritionInformation
      setImage(generateImageURL("dishImages", image))
    }
  }, [editedDishes]);

  const handleDraft = () => {
    setIsDraft(true)
  }

  return loadingToEdit || isLoading || updating ? <FullPageLoader /> : (
    <>
      <Box pl="26px" pr="24px" pb="24px">
        <form onSubmit={formik.handleSubmit} onChange={onChangeValue}>
          <Box mb="28px">
            <AddDishesSubHeader disabled={disabled} handleAddToDraft={handleDraft} setOpenBackToDish={setOpenBackToDish} />
          </Box>
          <Box>
            <AddDishesFieldBox setImage={setImage} image={image} formik={formik} disabled={disabled} setDisabled={setDisabled} />
          </Box>
        </form>
      </Box>
    </>
  );
}

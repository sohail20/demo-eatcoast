import { CustomCloseIcon } from "./AddDishes/AddDishesDrawer/AddIngridient/CustomCloseIcon";
import { IngridientMenuButton } from "./AddDishes/AddDishesDrawer/AddIngridient/IngridientMenuButton";
import { IngridientMenuButton2 } from "./AddDishes/AddDishesDrawer/AddIngridient/IngridientMenuButton2";

export const Data = [
    {
      id: 1,
      title: "Beef",
      digit: "*10",
      // btnName: "Pcs",
      btnComp: <IngridientMenuButton />,
      closeIconComp: <CustomCloseIcon />,
      image: "./images/Beef.svg",
    },
    
  ];


export const Data2 = [
    {
      id: 2,
      title: "Protein",
      digit: "*10",
      btnComp: <IngridientMenuButton2 />,
      // btnName: "%",

      image: "./images/meat 1 (Traced).svg",
    },
    {
        id: 2,
        title: "Vitamin A",
        digit: "*10",
        // btnName: "Pcs",
        btnComp: <IngridientMenuButton2 />,
        closeIconComp: <CustomCloseIcon />,
        image: "./images/VitA.svg",
      },
]
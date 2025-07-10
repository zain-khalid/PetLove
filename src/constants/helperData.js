import { BREED_ICON, CAKE_ICON, COLOR_ICON, GENDERS_ICON } from "../assets/icons";
import MainTheme from "./MainTheme";

export const attributeSection = [
    {
        key: "age",
        title: "Age",
        icon: CAKE_ICON,
        color: MainTheme.colors.green
    },{
        title: "Sex",
        key: "gender",
        icon: GENDERS_ICON,
        color: MainTheme.colors.yellow
    },{
        title: "Color",
        icon: COLOR_ICON,
        key: "colorName",
        color: MainTheme.colors.blue
    },{
        key: "breed",
        title: "Breed",
        icon: BREED_ICON,
        color: MainTheme.colors.pink
    }
]
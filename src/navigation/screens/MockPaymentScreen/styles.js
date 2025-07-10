import { Dimensions, StyleSheet } from "react-native";
import MainTheme from "../../../constants/MainTheme";

const { width } = Dimensions.get("screen");
const IMAGE_WIDTH = width - (MainTheme.constants.spacing * 2)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainTheme.colors.white,
    paddingHorizontal: MainTheme.constants.spacing,
  },
  image: {
    height: 250,
    width: IMAGE_WIDTH,
    borderRadius: MainTheme.constants.radius,
  },
  name: {
    fontWeight: '700',
    fontSize: MainTheme.fontSize.lg,
  },
  breed: {
    fontSize: MainTheme.fontSize.sm,
    color: MainTheme.colors.secondary,
  },
  fee: {
    fontSize: MainTheme.fontSize.md,
  },
  bold: {
    fontWeight: '700',
    color: MainTheme.colors.themeColor,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: MainTheme.fontSize.md,
  },
  paymentOptions: {
    gap: 12,
    flexDirection: 'row',
  },
  methodButton: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: MainTheme.colors.secondary,
    paddingVertical: MainTheme.constants.spacing,
    borderRadius: MainTheme.constants.radius * 0.5,
  },
  activeMethod: {
    borderColor: MainTheme.colors.black,
  },
  methodText: {
    fontSize: MainTheme.fontSize.sm,
  },
  activeMethodText: {
    fontWeight: '600',
    color: MainTheme.colors.themeColor,
  },
  backIcon:{
    width: 50,
    height: 50,
    resizeMode: "contain",
    tintColor: MainTheme.colors.white
  },
  goBackContainer:{
    position: "absolute",
    top: MainTheme.constants.spacing,
    left: MainTheme.constants.spacing
  }
});

export default styles
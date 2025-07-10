import { StyleSheet } from "react-native";
import MainTheme from "../../constants/MainTheme";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: MainTheme.constants.spacing,
        backgroundColor: MainTheme.colors.white,
    },
    altRow: {
        backgroundColor: MainTheme.colors.greyWhite,
    },
    label: {
        flex: 1,
        fontWeight: '600',
        fontSize: MainTheme.fontSize.sm,
        color: MainTheme.colors.secondary,
    },
    value: {
        flex: 1,
        color: '#555',
        textAlign: 'right',
        fontSize: MainTheme.fontSize.sm,
    },
});

export default styles;
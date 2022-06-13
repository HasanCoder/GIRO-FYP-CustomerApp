import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    medium_title: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
    },
    flex_row: {
        flexGrow: 0,
        flexShrink: 1
    },
    medium_title_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWhiteText: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },
    primaryButton: {
        backgroundColor: '#FEDB29',
        borderRadius: 30,
        color: '#ff5c5c',
        height: 60,
        width: 180,
    },
    footer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
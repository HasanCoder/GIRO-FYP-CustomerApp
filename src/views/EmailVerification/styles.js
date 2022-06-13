import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    textInputView: {
        marginTop: 15,
        flexDirection: 'row',
        borderColor: '#000',
        alignItems: 'center',
        borderRadius: 40,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        margin: 5,

    },
    viewShadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text_body: {
        color: '#BABABA',
        fontSize: 20,
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: '#000'
    },
    medium_title: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
    },
    flex_row: {
        flexGrow: 0,
        flexShrink: 1
    },
    text_body_box_layout: {
        marginTop: 15,
        marginBottom: 15
    },
    text_body_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    medium_title_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll: {
        backgroundColor: '#F5F5F5',
        padding: 30,
        height: '100%',

    },
    textInput: {
        margin: 5,
        height: 40,
        fontSize: 15,
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 10,
        color: '#000',
        flex: 1,
        textAlign: 'center'
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
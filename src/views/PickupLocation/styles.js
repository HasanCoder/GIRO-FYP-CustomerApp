import { StyleSheet, StatusBar } from 'react-native';
import colors from '../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
  buttonsContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 5,
    flexDirection: 'row',
  },
  ShowOptions: {
    justifyContent: 'flex-end',
  },
  ShowOptionsbtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginLeft: 5,
    elevation: 10,
  },
  ConfirmButton: {
    height: 100,
    justifyContent: 'flex-end',
  },
  btnConfirm: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 80,
    marginBottom: 20,
    borderRadius: 30,
    marginHorizontal: 10,
    elevation: 10,
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
  RBsheet: {
    wrapper: {
      backgroundColor: 'transparent',
    },
    container: {
      backgroundColor: '#FFFFFF',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    draggableIcon: {
      backgroundColor: '#000',
    },
  },
  textbox: {
    fontWeight: '600',
    fontSize: 25,
    color: '#000000',
    textAlign: 'left',
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: -10,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    borderBottomColor: '#DFDFDF',
    borderTopColor: '#FFFFFF',
  },
});

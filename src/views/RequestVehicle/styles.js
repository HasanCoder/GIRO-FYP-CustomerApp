import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/color';

export default StyleSheet.create({
  requestvehicle: {
    fontFamily: 'NotoSans-SemiBold',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    padding: 8,
  },
  showOptions: {
    // marginTop: '2%',
    // marginBottom: '190%',
    // marginRight: '60%',
    // width: '35%',
    // height: '7%',
    padding: 5,
    alignItems: 'baseline',
    position: 'absolute',
    bottom: 10,
  },
  ShowOptionsbtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  RBsheet: {
    wrapper: {
      backgroundColor: 'transparent',
    },
    container: {
      backgroundColor: 'white',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    draggableIcon: {
      backgroundColor: 'white',
    },
  },
  selectVehicle: {
    textAlign: 'center',
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    marginTop: 10,
    color: '#000',
    textAlign: 'left',
    marginLeft: 20,
  },
  vehicleContainer: {
    paddingLeft: '2%',
    flexDirection: 'row',
    height: 75,
    width: '100%',
    flexGrow: 0,
  },
  vehicleCard: {
    backgroundColor: '#F5E9A6',
    margin: 5,
    padding: 10,
    borderRadius: 25,
    width: '19%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleCardImg: {
    width: 90,
    height: 35,
  },
  EcoImg: {
    width: 70,
    height: 30,
    marginBottom: 0,
    marginTop: 5,
  },
  BikeImg: {
    width: 70,
    height: 35,
  },
  AutoImg: {
    width: 60,
    height: 40,
  },
  vehicleCardText: {
    color: 'black',
    paddingBottom: 0,
    fontFamily: 'NotoSans-SemiBold',
    textAlign: 'center',
  },
  hr: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },
  fareInput: {
    width: '95%',
    color: 'black',
    backgroundColor: '#EFEFEF',
    marginBottom: 10,
  },
  ConfirmVehicle: {
    //backgroundColor: '#000000',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  pickndropContainer: {
    flexDirection: 'row',
    marginLeft: 20,

    flex: 1,
    marginTop: 10,
  },
  pointers: {},
  pickndropText: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 12,
    color: '#9B9B9B',
    marginTop: -5,
  },
  location: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 12,
    color: colors.black,
    marginTop: -5,
  },
  pickndropWrapper: {
    flexDirection: 'column',
    marginLeft: 13,
  },
  pickupWrapper: {},
  DropoffWrapper: {
    marginTop: 15,
  },
  btnConfirm: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 30,
    width: '95%',
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
});

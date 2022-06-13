import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/color';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  chevronLeft: {
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 8,
    elevation: 5,
    borderRadius: 20,
  },
  headerText: {
    flex: 1,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
  },
  LocationsWrapper: {
    margin: 20,
  },
  LocationHeading: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
    color: colors.black,
    marginBottom: 10,
  },
  pickup: {},
  arrowdown: {},
  dropoff: {},
  NormalText: {
    color: colors.black,
    fontFamily: 'Inter-Regular',
  },
  FareWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 8,
    borderTopColor: '#DFDFDF',
    borderTopWidth: 8,
  },
  recommendedFare: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  FareInput: {
    backgroundColor: '#DFDFDF',
    marginRight: 10,
    height: 40,
    color: colors.black,
  },
  instructions: {
    flexDirection: 'row',
    margin: 20,
  },
  pencilIcon: {
    backgroundColor: '#DFDFDF',
    padding: 5,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
  },
  addInstruction: {
    marginHorizontal: 10,
    marginTop: -10,
  },
  placeholder: {
    color: '#000000',
    marginTop: -20,
    marginLeft: -2,
  },
  warning: {
    backgroundColor: '#FFEEC2',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  warningText: {
    color: '#EE8F00',
    paddingHorizontal: 10,
  },
  btnConfirmWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginVertical: 20,
    // margin: 10,
  },
  btnConfirm: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginHorizontal: 30,
    borderRadius: 30,
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
});

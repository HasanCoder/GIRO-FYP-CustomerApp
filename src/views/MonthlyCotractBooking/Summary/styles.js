import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors/color';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  chevronLeft: {
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
  },
  headerText: {
    flex: 1,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
  },
  LocationsWrapper: {
    marginVertical: 20,
    marginHorizontal: 20,
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
    padding: 20,
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 2,
    borderTopColor: '#E4E4E4',
    borderTopWidth: 2,
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
    paddingHorizontal: 20,
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
    marginVertical: 20,
    alignSelf: 'center',
  },
  btnConfirm: {
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 80,
    marginHorizontal: 30,
    borderRadius: 30,
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
  Contractdetails: {
    padding: 20,
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 2,
  },
  calendarIcon: {
    paddingRight: 10,
  },
  dates: {
    flexDirection: 'row',
  },
  greyText: {
    color: '#7C7C7C',
  },
  DaysOfWeek: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  pickupTime: {
    flexDirection: 'row',
  },
});

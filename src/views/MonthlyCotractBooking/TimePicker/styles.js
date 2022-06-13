import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors/color';

export default StyleSheet.create({
  container: {},
  headingText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
  },
  chevron: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    elevation: 10,
    width: '10.5%',
    //height: '9%',
    margin: 10,
    marginHorizontal: 15,
  },
  chevronicon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Headingwrapper: {
    margin: 10,
    marginHorizontal: 20,
  },

  center: {
    height: '76%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  DateCard: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C8C8C8',
    padding: 15,
    marginBottom: 25,
  },
  SelectedCard: {
    borderColor: '#FFB800',
  },
  number: {
    color: '#6A6A6A',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#DFDFDF',
    borderRadius: 30,
    //marginRight: '10%',
  },
  SelectedNumber: {
    color: '#FFB800',
    backgroundColor: '#FDF2D5',
  },
  normalText: {
    color: colors.black,
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    marginRight: '20%',
    alignSelf: 'center',
  },
  chevronright: {
    alignSelf: 'center',
  },
  btnConfirm: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginBottom: 20,
    borderRadius: 30,
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
  Continue: {
    marginHorizontal: 20,
  },
});

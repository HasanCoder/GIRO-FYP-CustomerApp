import { StyleSheet, StatusBar } from 'react-native';
import colors from '../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  userProfile: {
    width: 130,
    height: 130,
    borderRadius: 70,
    margin: 20,
    marginTop: 80,
  },
  text: {
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    paddingHorizontal: 20,
  },

  textWrapper: {
    margin: 10,
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flex: 1,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
    color: colors.black,
    alignSelf: 'center',
    marginLeft: '10%',
  },
  chevronLeft: {
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
  },
  red: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#FF0000',
  },
  username: {
    fontFamily: 'NotoSans-SemiBold',
    color: '#000',
    fontSize: 20,
  },
  nameWrapper: {
    alignItems: 'center',
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
    marginHorizontal: 30,
    paddingBottom: 30,
  },
});

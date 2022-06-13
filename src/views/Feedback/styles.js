import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  headingContainer: {
    marginTop: '3%',
  },
  headingText: {
    fontFamily: 'NotoSans-SemiBold',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    padding: 8,
  },
  mapContainer: {
    height: hp('40%'),
  },
  driverImageContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 70,
    width: '30%',
    zIndex: 1,
    marginTop: '-18%',
  },
  driverImageWrapper: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  driverImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  driverContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  driverDetails: {
    marginLeft: 20,
  },
  driverName: {},
  NameText: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
    color: 'black',
  },
  driverRatingWrapper: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  driverRating: {
    width: 200,
    height: 30,
    padding: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    position: 'relative',
    bottom: 5,
  },
  RateButton: {
    backgroundColor: colors.yellow,
    padding: 20,
    flex: 1,
    borderRadius: 15,
    elevation: 2,
  },
  ContactButtonText: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    color: colors.black,
    alignSelf: 'center',
  },

  message: {
    backgroundColor: '#F7F8F9',
    paddingBottom: 80,
    margin: 10,
    color: colors.black,
  },
});

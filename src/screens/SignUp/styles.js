import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/data/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  iconBack: {
    marginTop: 40,
    marginLeft: 15,
  },
  imageBg: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'RobotoMono-ExtraLight',
    color: COLORS.gray,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  dataContainer: {
    marginTop: 50,
  },
  textInput: {
    color: 'grey',
    marginTop: 15,
    width: '83%',
    height: 50,
    borderBottomColor: COLORS.yellow,
    borderBottomWidth: 1,
    marginHorizontal: 8,
    marginVertical: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  textTncPrivacy: {
    fontSize: 14,
    color: 'grey',
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'RobotoMono-Bold',
  },
  textTerm: {
    color: COLORS.green,
    fontFamily: 'RobotoMono-Bold',
  },
  textTncPrivacyAnd: {
    fontSize: 14,
    color: 'grey',
    marginTop: 9,
    fontFamily: 'RobotoMono-Bold',
  },
  text: {
    fontSize: 15,
    color: 'grey',
    marginHorizontal: 20,
    marginTop: 10,
    fontFamily: 'RobotoMono-Bold',
  },

  textJoin: {
    color: 'grey',
    marginHorizontal: 15,
    fontFamily: 'RobotoMono-Bold',
    marginTop: 2,
  },
  textGreen: {
    color: COLORS.green,
    fontFamily: 'RobotoMono-Bold',
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: -15,
  },
  textBlue: {
    color: COLORS.green,
  },
  textPrivacy: {
    color: COLORS.green,
    fontFamily: 'RobotoMono-Bold',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: COLORS.yellow,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginHorizontal: 20,
  },
  textFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  icon: {
    marginTop: 15,
    paddingLeft: 5,
  },
});

export default styles;

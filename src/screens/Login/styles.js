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
    iconEye: {
        marginTop: 15,
        marginRigth: 10,
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
    width: '80%',
    height: 50,
    borderBottomColor: COLORS.yellow,
    borderBottomWidth: 1,
    marginHorizontal: 8,
    marginVertical: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 12,
    marginRight: 15,
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
  textContainerfooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  textWrapOr: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textOr: {
    color: COLORS.gray,
    fontFamily: 'RobotoMono-ExtraLight',
  },
  buttonGoogle: {
    width: '90%',
    height: 50,
    backgroundColor: COLORS.lightgray,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  iconGoogle: {
      position: 'absolute',
      left: 15,
    width: 40,
    height: 40,
  },
});

export default styles;

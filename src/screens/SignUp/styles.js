import { StyleSheet } from 'react-native';
import {COLORS} from '../../assets/data/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imageBg: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  dataContainer: {
    marginTop: 50,
  },
  textInput: {
    color: 'grey',
    marginTop: 20,
    width: '90%',
    height: 50,
    borderBottomColor: COLORS.yellow,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    color: 'grey',
    marginVertical: 5,
    paddingHorizontal: 15,
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
    marginTop: 40,
    marginHorizontal: 20,
  },
  textFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default styles;

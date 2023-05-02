import { StyleSheet, Text, View } from 'react-native'; 


const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2B34',
    },
    image: {
        width: 300,
        right: 45,
        aspectRatio: 3 / 4,
        marginBottom: 20,
    },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    right: 55,
    marginBottom: 50,
    marginLeft: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#8E8E8E',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#2C2B34',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
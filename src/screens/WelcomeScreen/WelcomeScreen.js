import React from 'react';
import { View, Text,  StatusBar, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles';

const WelcomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.contatiner}>
        <ImageBackground
          source={require('../../assets/images/toyota.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.text}>
          <Text style={styles.title}>Premium cars. Enjoy the luxury</Text>
          <Text style={styles.subtitle}>
            Premium and prestige car daily rental. Experience the thrill at a
            lower price
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Let`s Go</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default WelcomeScreen;

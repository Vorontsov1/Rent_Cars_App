import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground, StatusBar} from 'react-native';
import styles from './styles';

const SignUp = ({navigation}) => {
const [change, setChange] = useState(false)



  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <View
            style={{
              marginTop: 50,
              marginBottom: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Here supposed to be Icons</Text>
          </View>
          <ImageBackground
            source={require('../../assets/images/email.png')}
            style={styles.imageBg}
          />
          <View>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="gray"
            onChange={() => setChange(true)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="email"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Full name"
            placeholderTextColor="gray"
            onChange={() => setChange(true)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChange={() => setChange(true)}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              By signing up, you agree to our{' '}
              <Text style={styles.textBlue}>Terms & Conditions</Text> and{' '}
              <Text style={styles.textBlue}>Privacy Policy</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('WelcomeScreen')}
            style={styles.button}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Continue
            </Text>
          </TouchableOpacity>
          <View style={styles.textFooter}>
            <Text style={styles.text}>
              Joined us before?
              <Text style={styles.textBlue}> Login</Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUp;

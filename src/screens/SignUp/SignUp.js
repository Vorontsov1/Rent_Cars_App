import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground, StatusBar} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SignUp = ({navigation}) => {
const initialstate = {
  email: '',
  fullname: '',
  mobile: '',
};
  const [state, setState] = useState(initialstate);



  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={styles.iconBack}>
          <Ionicons name="ios-arrow-back" size={25} color="gray" />
        </TouchableOpacity>
        <View style={styles.dataContainer}>
          <ImageBackground
            source={require('../../assets/images/email.png')}
            style={styles.imageBg}
          />
          <View>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          <View style={styles.iconWrap}>
            <Entypo style={styles.icon} name="email" color="gray" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="gray"
              onChangeText={value =>
                setState(prevState => ({
                  ...prevState,
                  email: value,
                }))
              }
            />
          </View>
          <View style={styles.iconWrap}>
            <FontAwesome5
              style={styles.icon}
              name="user-alt"
              color="gray"
              size={20}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Full name"
              placeholderTextColor="gray"
              onChangeText={value =>
                setState(prevState => ({
                  ...prevState,
                  fullname: value,
                }))
              }
            />
          </View>
          <View style={styles.iconWrap}>
            <Entypo
              style={styles.icon}
              name="old-phone"
              color="gray"
              size={20}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Mobile"
              placeholderTextColor="gray"
              keyboardType='numbers-and-punctuation'
              onChangeText={value =>
                setState(prevState => ({
                  ...prevState,
                  mobile: value,
                }))
              }
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              By signing up, you agree to our{' '}
              <Text style={styles.textBlue}>Terms & Conditions</Text> and{' '}
              <Text style={styles.textBlue}>Privacy Policy</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.button}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textJoin}>Joined us before? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textGreen}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}></TouchableOpacity>
      </View>
    </>
  );
};

export default SignUp;

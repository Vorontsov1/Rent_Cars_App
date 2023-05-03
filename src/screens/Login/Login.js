import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  const initialstate = {
    email: '',
    fullname: '',
    mobile: '',
  };
  const [state, setState] = useState(initialstate);
  const [showPassword, setShowPassword] = useState(false);

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
            <Text style={styles.title}>Login</Text>
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
            <Entypo style={styles.icon} name="lock" color="gray" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="gray"
              keyboardType="numbers-and-punctuation"
              onChangeText={value =>
                setState(prevState => ({
                  ...prevState,
                  mobile: value,
                }))
              }
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Entypo
                style={styles.iconEye}
                name={showPassword ? 'eye' : 'eye-with-line'}
                color={showPassword ? 'red' : 'gray'}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.button}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
          <View style={styles.textWrapOr}>
            <Text style={styles.textOr}>Or</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('WelcomeScreen')}
            style={styles.buttonGoogle}>
            <Image
              style={styles.iconGoogle}
              source={require('../../assets/images/google.png')}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                fontFamily: 'RobotoMono-ExtraLight',
              }}>
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainerfooter}>
          <Text style={styles.textJoin}>New to Logistics? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textGreen}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;

import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/data/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.yellow,
  },
  text: {
      fontSize: 60,
      textAlign: 'center',
    fontWeight: '300',
    color: COLORS.green,

    fontFamily: 'RobotoMono-Thin',
  },
});

export default styles;
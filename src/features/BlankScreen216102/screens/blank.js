import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_3:
      " jhgjhgjh jhgjhgj jhgjhgfhjg jhgjhghjg jhghjgjhg jhgjhgfhjg jhgjhgjhg jhgjfhghjg jhgjfhgjhg jhgfjhgfhjgb jhgjhg jhgjhghg jhgjhghfj jhgjhghj jhgjhghjg jhgjhgjhg jhgjhgfj jhgjhgjhgghgjhgjhg jhgjhghj jhgfhjghjg jhgfjhgjhg jhgfjhghjg jhghjghjg jhgjhghjg jhgfhjgjhg jhgjhghfhgfghf hgfhgf jhgjhgjh jhgjhgj jhgjhg jhgjhgjh jhjgjh jhgjhgjh jhgjhgjfh jhghjg jhgjhgjh jhgjhg",
    TextInput_4: ""
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_2: {},
  TextInput_3: {
    height: 100,
    color: "#8d65ec",
    backgroundColor: "#cef2a1",
    fontFamily: "Merriweather-Regular",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  TextInput_4: {}
})

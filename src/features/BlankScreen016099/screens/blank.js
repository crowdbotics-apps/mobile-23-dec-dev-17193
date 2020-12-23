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

  state = {}

  render = () => (
    <View>
      <View style={styles.View_2}>
        <View>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
        </View>
        <View>
          <Text>Sample text content</Text>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: {},
  Text_7: {},
  Text_23: {},
  Text_24: {},
  Text_25: {},
  Text_26: {},
  Text_27: {},
  Text_28: {},
  View_4: {},
  Text_22: {},
  Button_10: {}
})

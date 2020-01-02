import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
  SafeAreaView
} from "react-native";



class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    console.log(this.props);
  }

  render() {
    let itemData = this.props.data
    let itemType = this.props.type
    return (
      <View>
        <Text>
          {{ itemData, itemType }}
        </Text>
      </View>
    );
  }
}

export default ProductViewer;
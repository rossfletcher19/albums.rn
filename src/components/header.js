// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';


// make a Component
const Header = (props) => {
  const { textStyle } = styles;
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


// styling
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};


// make the component available to other parts of the app
export default Header;

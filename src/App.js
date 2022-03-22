import React from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#7f7f7f" }}>
      <Text>
       <h3><b>Budget Buddy</b></h3>
      
      </Text>
      <TextInput
      style={{
          height: 40,
          borderColor: 'orange',
          borderWidth: 5
        }}
        placeholder="Enter amount spent here!"/>
         <TextInput
      style={{
          height: 40,
          borderColor: 'orange',
          borderWidth: 5,
        }}
        placeholder="Enter category here!"/>
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Add to log" color="orange"/>
    </View>
  );
}

export default App;

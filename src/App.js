import React from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

const App = () => {
   
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#7f7f7f" }}>
      <Text>
       <h3><b>Budget Buddy</b></h3>
      
      </Text>
      <input id="amount"
        style={{
            height: 40,
            borderColor: 'orange',
            borderWidth: 5
          }}
          placeholder="Enter amount spent here!"/>
      <input id = "category"
          style={{
              height: 40,
              borderColor: 'orange',
              borderWidth: 5,
            }}
            placeholder="Enter category here!"/>
      <Button
          onPress={() => {
            addToLog();
          }}
          title="Add to log" color="orange"/>
    </View>
  );
}
function addToLog()
{
  var amount = [];
  var category = [];
  if("amount" in localStorage)
  {
   amount = JSON.parse(localStorage.getItem("amount"));
  }
  if("category" in localStorage)
  {
   category = JSON.parse(localStorage.getItem("category"));
  }

  alert("Added to log!");
  
  amount.push(document.getElementById("amount").value);
  window.localStorage.setItem("amount",JSON.stringify(amount));
  category.push(document.getElementById("category").value);
  window.localStorage.setItem("category",JSON.stringify(category));
}
export default App;

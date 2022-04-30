import { ArcElement } from 'chart.js';
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
  var parseAmount = [];
  var amount = [];
  var category = [];
  var matchingCategoryFound = false;
  if("amount" in localStorage)
  {
   parseAmount = JSON.parse(localStorage.getItem("amount"));
   for(var i=0; i<parseAmount.length; i++)
   {
     amount[i] = parseFloat(parseAmount[i]);
     console.log(amount[i]);
   }
  }
  if("category" in localStorage)
  {
   category = JSON.parse(localStorage.getItem("category"));
  }

  alert("Added to log!");
  
  for(var i=0; i <category.length;i++)
  {
    if(document.getElementById("category").value == category[i])
    {
      amount[i] += parseFloat(document.getElementById("amount").value);
      console.log(amount[i]);
      window.localStorage.setItem("amount",JSON.stringify(amount));
      matchingCategoryFound = true;
    }
  }
  if(matchingCategoryFound == false)
  {
    amount.push(document.getElementById("amount").value);
    window.localStorage.setItem("amount",JSON.stringify(amount));
    category.push(document.getElementById("category").value);
    window.localStorage.setItem("category",JSON.stringify(category));
  }
  
}
export default App;

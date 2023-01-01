import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import { View, Button, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function CounterScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View>
      <Text>{selectedValue} Foi selecionado no Picker</Text>
       <RNPickerSelect
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      <Button
        title="Details"
        onPress={() => navigation.reset({
          routes: [{ name: 'Details' }],
        })}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View>
       <Text>{selectedValue} Foi selecionado no Picker</Text>
       <RNPickerSelect
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
       <Button
        title="Counter"
        onPress={() => navigation.reset({
          routes: [{ name: 'Counter' }],
        })}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Counter" component={CounterScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
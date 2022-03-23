import React from "react";
import { View, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Camera from "./src/components/Camera";
import Map from './src/components/Map'
const App = () => {
  const onSaveData = () => {
    AsyncStorage.setItem('my-data', JSON.stringify({ name: 'ali' }))
    .then(() => console.log('Saved'))
  }

  const onGetData = () => {
    AsyncStorage.getItem('my-data')
    .then((res) => console.log(JSON.parse(res)))
  }


  const onClear = () => {
    AsyncStorage.removeItem('my-data')
    .then(() => console.log('Cleared Data'))
  }
  return (
    <View style={{ flex: 1, }}>

      <Button title="Save Data" onPress={onSaveData} />
      <Button title="Get Data" onPress={onGetData} />
      <Button title="Clear Data" onPress={onClear} />
      {/* <Map /> */}
    </View>
  )
}

export default App;
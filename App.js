import React from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';


const App = () => {

  const start = () => {
    alert('Start')
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={start}
        title="Start"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;

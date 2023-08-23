import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Image source={{uri: 'https://mb.cision.com/Public/MigratedWpy/91322/745520/a8bbb399629629fc_800x800ar.jpg'}}
       style={{width: 300, height: 200, marginBottom: 50}} />
      <Text>Tryg forsikring</Text>
      <Text>Benjamin Joshua Munck Nielsen</Text>
      <Button title='Hyr mig' style={{}}>Hej</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.textWrapper}>
    <Text style={styles.sectionTitle}>Today's Task</Text>
    </View>


    <View style={styles.items}>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  sectionTitle :{},
  textWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items:{},
});

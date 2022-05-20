import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.textWrapper}>
    <Text style={styles.sectionTitle}>Today's Task</Text>
    </View>


    <View style={styles.items}>
    <Task  text= {'Task 1'}/>
    <Task  text= {'Task 2'}/>
    
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  sectionTitle :{
    fontSize :24,
    fontWeight: 'bold',
  },
  textWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items:{ 
    marginBottom : 30,
  },
});

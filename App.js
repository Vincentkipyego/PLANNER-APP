import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style= {styles.addTextWrapper}>
    <TextInput style= {styles.input} placeholder ={"Write your Text"}/>

    <TouchableOpacity>
    <View style={styles.addWrapper}>
    <Text style={styles.addtext}>+</Text>
    </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>
    

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
  addTextWrapper:{
    position: 'absolute',
    bottom : 60,
    width :'100%',
    flexDirection : 'row',
    justifyContent :'space-around',
    alignItems : 'center',
  },
  input:{
    paddingHorizontal: 15,
    paddingVertical: 15,
    width :250,
    backgroundColor : "#FFF",
    borderWidth: 1,
    borderRadius : 60,
    borderColor :'#C0C0C0',
  },
  addWrapper: {
    width: 60,
    height :60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent :'center',
    alignItems:'center',
    borderWidth :1,
  },
  addtext:{},
});

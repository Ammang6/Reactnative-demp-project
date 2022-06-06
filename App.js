import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View,Button,TextInput} from 'react-native';
import {Image} from 'react-native' ; 
export default function App() {
  return (
<View style = {styles.main}>
    <Image source={require('./img/dan2.png')} style ={styles.img} />
    <Text style={styles.txtone}>Login</Text>  
    <TextInput style = {styles.input}
        placeholder="Email"
        defaultValue={""}
      />
    <TextInput style = {styles.input}
        placeholder="Password"
        defaultValue={""}
      />
      <View style={styles.forget}>
    <Button title="Forgot Password?" color="#70E304" />
    </View>

</View>

    
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    backgroundColor:"#003380",
    
  },
  img:{
    backgroundColor:"#70E304",
    padding: 15,
    borderRadius:20,
    width: 150, 
    height: 150,
    marginTop:0,
    marginBottom:100,
    marginLeft:"auto",
    marginRight:"auto",
   
  },
  txtone:{
    color:"white",
    marginLeft:"auto",
    marginRight:"auto",
    fontSize:30,
    marginBottom:10
  },
  input:{
    backgroundColor:"white",
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
    padding:15,
    borderRadius:20,
    borderColor:"pink",
    borderWidth:2,
    marginBottom:15

  },
  forget:{
    width:"50%",
    marginLeft:"auto",
    marginRight:"auto",
   
  }
});

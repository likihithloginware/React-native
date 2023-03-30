import React from 'react'
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native'

export default class App extends React.Component{
  state={
    email:'',
    password:''

  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.logo}>WELLCOME!</Text>
        <View style={styles.inputView}>
          <TextInput 
          style={styles.inputText}
          placeholder ="Email.."
          placeholderTextColor="#003f5c"
          onChangeText={text=>this.setState({email:text})}/>
        </View>

        <View style={styles.inputView}>
          <TextInput 
          secureTextEntry
          style={styles.inputText}
          placeholder="password"
          placeholderTextColor="#003f5c"
          onChangeText={text=>this.setState({password:text})}/>
        </View>
        
        <View>
          <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="password"
          placeholderTextColor="#003f5c"
          onChangeText={text=>this.setState({password:text})}>
            
          </TextInput>
        </View>

        <TouchableOpacity>
          <Text style={styles.forget}>
            forget password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>SignUP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
  const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      alignItems:"center",
      justifyContent:"center",
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40,
    },
    inputView:{
      width:"80%",
      backgroundColor:"#6699ff",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
    },
    inputText:{
      height:50,
      color:"white"
    },
    forget:{
      color:"white",
      fontSize:18
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10

    },
    loginText:{
      color:"white"
    }

    }
  );
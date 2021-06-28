import {View,Text,TextInput,TouchableOpacity,AlertStyleSheet} 
from 'react-native';

export default class Login extends Component {
  render() {
    return (
     <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.textBtn}>
            Entrar
          </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1E2E1',
  },
  title: {
    marginBottom: 80,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    margin: 10,
    width: 300,
    height: 60,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 3.17
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 60,
    backgroundColor: '#00756c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3.17
  },
  textBtn: {
    color: 'white',
    fontSize: 16
  }
})

import {View,Text,TextInput,TouchableOpacity,AlertStyleSheet} 
from 'react-native';

export default class Login extends Component {
    state = {
      user: '',
      password: '',
    }
    checkLogin = () => {
      if (this.state.user === 'teste' && this.state.password === '1234') {
        alert('Usuário logado');
      } else {
        alert('Erro ao logar');
      }
    }
    render() {
      return (
         
              <TouchableOpacity
                onPress={this.checkLogin}
                style={styles.button}>
                <Text style={styles.textBtn}>
                  Entrar
              </Text>
              </TouchableOpacity>
    
          );
    }
  }

import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './produtoStyle';
import  Item  from '../components/index';
import { color } from 'react-native-reanimated';


export function Produtos() {


    return (
      <View style={{ flex: 1, alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    width: '100%'}}>
        <View style={styles.insert}>
          <TextInput  style={styles.input} 
              placeholder='Nome do produto'
              placeholderTextColor="#707070"
            >
          </TextInput>

          <TextInput style={styles.insertQuantity}
          keyboardType= 'numeric'
          placeholder = '0'
          placeholderTextColor= "#707070"
          >
          <Text style={{textAlign: 'center'}}></Text>
          </TextInput>

          <TouchableOpacity style={styles.registerProduct}>
            <Text></Text>
          </TouchableOpacity>

          <View style={styles.products}>
            
          </View>
        </View>
      </View>
    );
  }


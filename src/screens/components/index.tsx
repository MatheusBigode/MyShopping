import {View, Text,TouchableOpacity} from 'react-native';
import {styles} from './indexStyles';


export default function Item () {
   
    return(
        <View style={styles.number}> 
            <Text style={styles.productName}>Café</Text>

            <Text style={styles.productAmount}>Quantidade: 3</Text>

            <TouchableOpacity
            >
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} >
                
            </TouchableOpacity>
        </View>
    )
}
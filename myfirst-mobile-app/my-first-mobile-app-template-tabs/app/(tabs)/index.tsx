import { StyleSheet } from "react-native";
import {Text, View} from '@/components/Themed';

export default function TabOneScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
      HelloWorld! Coding has started on tab one. Infact, we don't even need multiple
tabs for our code to work. Feel free to startup project without specifying template and then purge with
"npm run reset-project" to start without tabs. Easy to add tabs as well
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
    padding: 30,
  }
});
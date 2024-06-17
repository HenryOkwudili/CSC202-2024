import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import Component1 from '@/components/core/Component1';
import Component2 from '@/components/core/Compontent2';
import Component3 from '@/components/core/Component3';

//Let's creat a simple separator component that will only be used here in App.rsx

const Separator: React.FC=()=>{
  return<View style={styles.separator}/>
}

export const TabOneScreen:React.FC=() =>{
  return (
    <View style={styles.container}>
      <Component1/>
      <Separator/>
      <Component2 name="Mary"/>
      <Separator/>
      <Component2/>
      <Separator/>
      <Component3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightblue',
    alignItems:'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 6,
    alignItems: 'center'
  },
  separator:{
    backgroundColor: '#eee',
    height: 3,
    width:'100%',
    margin:9
  }
});

export default TabOneScreen;
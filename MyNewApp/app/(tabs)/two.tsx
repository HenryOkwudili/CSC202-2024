import { StyleSheet, KeyboardAvoidingView, ScrollView, SafeAreaView, Platform, Image } from 'react-native';
import { View } from '@/components/Themed';
import Component1 from '@/components/core/Component1';
import Component2 from '@/components/core/Component2';
import Component3 from '@/components/core/Component3';
import Component4 from '@/components/core/Component4';
import Component5 from '@/components/core/component5/Component5';
import Component6 from '@/components/core/Component6';

//Let's creat a simple separator component that will only be used here in App.rsx

const Separator: React.FC=()=>{
  return<View style={styles.separator}/>
}

export const TabOneScreen:React.FC=() =>{
  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView>
        <View style={styles.screenHeader}>
          <Image style={styles.logo}
            source={require('../../assets/images/clinic.png')}
          />
        </View>
        <View style={styles.screenBody}>
          <Component3 />
          <Separator />
          <Component5 />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 15
    },
    text: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'yellow',
    padding: 6,
    alignItems: 'center'
    },
    separator: {
    backgroundColor: '#eee',
    height: 3,
    width: '100%',
    margin: 9
    },
    
    screenHeader: {
      flex: 1,
      paddingTop: 0,
      justifyContent: 'center',
      backgroundColor: 'yellow'
      },
      screenBody: {
      backgroundColor: 'yellow',
      flex: 6,
      justifyContent: 'center',
      },
      logo: {
      alignSelf: 'center',
      width: 300,
      height: 82,
      margin: 9
      }
      });

export default TabOneScreen;
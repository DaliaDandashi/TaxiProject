import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import WavyBackground from "react-native-wavy-background";
import Images from './assets/logoCar.png';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{ position: 'absolute', top: 0, left: 0,right: 0,}}>
        <WavyBackground height={150} width={1700} amplitude={20} frequency={1} offset={90}
          color="#FFCC0029" top/>
      </View>
      <Image source={Images} style={{ width: 50, height: 50 }} />
      
     
     
      {/* <StatusBar style="auto" /> */}
      <View style={styles.circle} >
        <View>
          <Svg height="50%" width="50%" viewBox="0 0 100 100" >
          <Circle cx="50" cy="50" r="50" stroke="#FFCC00" strokeWidth=".5" fill="#FFCC00" />
      </Svg>
      </View>
      <Text style={styles.titleText}>Hello, nice to meet you!</Text>
      </View>

      <View style={{ position: 'absolute', bottom: 0, left: 0,right: 0,}}>
        <WavyBackground height={150} width={1700} amplitude={20} frequency={1} offset={90}
          color="#FFCC0029" bottom/>
      </View>
      <View>
        <Text style={styles.baseText}>You Can Pick Up the nearest taxi</Text>
        <Text style={styles.ButtonText}>  By Clicking Pick up Button</Text>
      </View>
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "Cochin"
  },
  baseText: {
    fontSize:15,
    fontWeight: "Cochin",
  },
  ButtonText: {
    fontSize:15,
    fontWeight: 'bold'
    
  },
});

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Svg, Rect, Text as SvgText } from 'react-native-svg';

const TransparentRoundedRectangle = ({ onPress }) => {
  return (
    <>
    {/*Big blue transparent rounded rectangle*/}
    <View style={styles.blueTransparentRoundedRectangle}>
      <Svg width="100%" height="100%">
        <Rect
        />
      </Svg>
    </View>

    <TouchableOpacity onPress={onPress} style = {styles.transparentRoundedRectangle}>
      <Svg width="100%" height="100%">
        <Rect
          width="30%"
          height="15%"
          rx={20}
          fill="#ffffff80"
        />
      </Svg>
    </TouchableOpacity>
    </>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/*TOP HALF WITH IMAGE*/}
    <View style={styles.container}>
      <View style={styles.topHalf}>
      {/* <Image
        source={require('C:\Users\Toalima\Downloads\Untitled design.jpg')}
        style={styles.image} */}

      {/*Top half big text*/}
        <Text style={[styles.text, styles.firstNameAge]}>First Name, Age
        </Text>
      </View>

      {/*Destinations Text underneath*/}
      <View style={styles.topSmall}>
        <Text style={[styles.text, styles.destinationText]}>{'\u{1F4CD}'}Destinations: Spain, New Zealand, Italy, Morocco
        </Text>
      </View>

        {/*Transparent Rounded Rectangle*/}
      <TransparentRoundedRectangle 
        onPress={() => console.log('Pressed')}/>
        <Text style={[styles.text, styles.profileText]}>profile</Text>
    </View>


    {/*BOTTOM HALF*/}
    <View style={styles.bottomHalf}>
      {/*Blue Transparent Rectangle at the bottom*/}
        <View style={styles.blueBottomRectangle}>
        </View>

      {/*Text in the center, info*/}
      <View style={styles.bottomCenter}>
        <Text style={[styles.text, styles.infoText]}>info {'\u2708\uFE0F'}
        </Text>
      </View>
    </View>

      {/*Text in the upper bottom half, bio*/}
      <View style={styles.upperBottomHalf}>
        <Text style={[styles.text, styles.bioText]}>bio {'\u2708\uFE0F'}
        </Text>
      </View>

      {/*Everything in the bottom left*/}
      <View style={styles.bottomLeft}>
        <Text style={[styles.text, styles.travelText]}>travel interests {'\u2708\uFE0F'}
        </Text>
      </View>

      {/*Rounded rectangle with text - bio*/}
      <View style={styles.bioRoundedRectangle}>
        <Text style={styles.bioRoundedText}> 
        This is a sample bio for the person using the app, {'\n'}
        there will be a minimum amount of words that a {'\n'}
        user can write in their bio.
        </Text>
      </View>
      

      {/*Rounded rectangle with text - info*/}
      <View style={styles.infoRoundedRectangle}>
        <Text style={styles.infoRoundedText}>gender: female
        </Text>
      </View>

      <View style={styles.secondinfoRoundedRectangle}>
        <Text style={styles.secondinfoRoundedText}>{'\u{1F307}'}based in: united states
        </Text>
      </View>

      <View style={styles.thirdinfoRoundedRectangle}>
        <Text style={styles.thirdinfoRoundedText}>{'\u{1F4B0}'}budget: 800-1000
        </Text>
      </View>
      
      <View style={styles.fourinfoRoundedRectangle}>
        <Text style={styles.fourinfoRoundedText}>travel dates: july-august
        </Text>
      </View>

      {/*Rounded rectangle with text - Travel Interests*/}
      <View style={styles.roundedRectangle}>
        <Text style={styles.roundedText}>foodie {'\u{1F355}'}
        </Text>
      </View>

      <View style={styles.secondRoundedRectangle}>
        <Text style={styles.secondRoundedText}>history buff {'\u{1F4DA}'} 
        </Text>
      </View>

      <View style={styles.thirdRoundedRectangle}>
        <Text style={styles.thirdRoundedText}>bars/clubs {'\u{1F37E}'}
        </Text>
      </View>

      <View style={styles.fourRoundedRectangle}>
        <Text style={styles.fourRoundedText}>sight seer {'\u{1F5FC}'}
        </Text>
      </View>

      <View style={styles.fiveRoundedRectangle}>
        <Text style={styles.fiveRoundedText}>swimming {'\u{1F30A}'}
        </Text>
      </View>

      {/*Status Bar*/}
      <StatusBar style="auto" />
      
      {/*Navigation button to second screen*/}
      <TouchableOpacity
        onPress={() => navigation.navigate('Second')}
        style={styles.navigateButton}
      >
      </TouchableOpacity>
    </ScrollView>
  );
};

const SecondScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/*Content for Second Screen*/}
      <View style={styles.container}>
        <Text style={styles.text}>This is the second screen</Text>
      </View>
    </ScrollView>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    {/*TOP HALF WITH IMAGE*/}
    <View style={styles.container}>
      <View style={styles.topHalf}>
      {/* <Image
        source={require('C:\Users\Toalima\Downloads\Untitled design.jpg')}
        style={styles.image} */}

      {/*Top half big text*/}
        <Text style={[styles.text, styles.firstNameAge]}>First Name, Age
        </Text>
      </View>

      {/*Destinations Text underneath*/}
      <View style={styles.topSmall}>
        <Text style={[styles.text, styles.destinationText]}>{'\u{1F4CD}'}Destinations: Spain, New Zealand, Italy, Morocco
        </Text>
      </View>

        {/*Transparent Rounded Rectangle*/}
      <TransparentRoundedRectangle 
        onPress={() => console.log('Pressed')}/>
        <Text style={[styles.text, styles.profileText]}>profile</Text>
    </View>

      {/*BOTTOM HALF*/}
      <View style={styles.bottomHalf}>
      {/*Blue Transparent Rectangle at the bottom*/}
        <View style={styles.blueBottomRectangle}>
        </View>

      {/*Text in the center, info*/}
      <View style={styles.bottomCenter}>
        <Text style={[styles.text, styles.infoText]}>info {'\u2708\uFE0F'}
        </Text>
      </View>
    </View>

      {/*Text in the upper bottom half, bio*/}
      <View style={styles.upperBottomHalf}>
        <Text style={[styles.text, styles.bioText]}>bio {'\u2708\uFE0F'}
        </Text>
      </View>

      {/*Everything in the bottom left*/}
      <View style={styles.bottomLeft}>
        <Text style={[styles.text, styles.travelText]}>travel interests {'\u2708\uFE0F'}
        </Text>
      </View>

      {/*Rounded rectangle with text - bio*/}
      <View style={styles.bioRoundedRectangle}>
        <Text style={styles.bioRoundedText}> 
        This is a sample bio for the person using the app, {'\n'}
        there will be a minimum amount of words that a {'\n'}
        user can write in their bio.
        </Text>
      </View>
      

      {/*Rounded rectangle with text - info*/}
      <View style={styles.infoRoundedRectangle}>
        <Text style={styles.infoRoundedText}>gender: female
        </Text>
      </View>

      <View style={styles.secondinfoRoundedRectangle}>
        <Text style={styles.secondinfoRoundedText}>{'\u{1F307}'}based in: united states
        </Text>
      </View>

      <View style={styles.thirdinfoRoundedRectangle}>
        <Text style={styles.thirdinfoRoundedText}>{'\u{1F4B0}'}budget: 800-1000
        </Text>
      </View>
      
      <View style={styles.fourinfoRoundedRectangle}>
        <Text style={styles.fourinfoRoundedText}>travel dates: july-august
        </Text>
      </View>

      {/*Rounded rectangle with text - Travel Interests*/}
      <View style={styles.roundedRectangle}>
        <Text style={styles.roundedText}>foodie {'\u{1F355}'}
        </Text>
      </View>

      <View style={styles.secondRoundedRectangle}>
        <Text style={styles.secondRoundedText}>history buff {'\u{1F4DA}'} 
        </Text>
      </View>

      <View style={styles.thirdRoundedRectangle}>
        <Text style={styles.thirdRoundedText}>bars/clubs {'\u{1F37E}'}
        </Text>
      </View>

      <View style={styles.fourRoundedRectangle}>
        <Text style={styles.fourRoundedText}>sight seer {'\u{1F5FC}'}
        </Text>
      </View>

      <View style={styles.fiveRoundedRectangle}>
        <Text style={styles.fiveRoundedText}>swimming {'\u{1F30A}'}
        </Text>
      </View>

      {/*Status Bar*/}
      <StatusBar style="auto" />

    </ScrollView>
  );
}

{/*const windowHeight = Dimensions.get('window').height;*/}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#d7f9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topHalf: {
    position: 'absolute',
    top: '83%',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  firstNameAge: {
    fontSize: 40,
    fontWeight: 'semibold',
    color: '#000000',
  },
  topSmall: {
    position: 'absolute',
    top: '93%',
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  blueTransparentRoundedRectangle: {
    position: 'absolute',
    bottom: -100,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(128, 170, 255, 0.2)',
    borderRadius: 100,
  },
  transparentRoundedRectangle: {
    position: 'absolute',
    top: '20%',
    left: '80%',
    width: '60%',
    height: '60%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    marginTop: -40,
  },
  profileText: {
    fontSize: 17,
    fontWeight: 'thin',
    color: '#000000',
    left: '39.5%',
    top: '-33.5%',
  },
  destinationText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#000000',
  },
  bottomHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d7f9ff',
  },
  blueBottomRectangle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(128, 170, 255, 0.2)',
  },
  bottomCenter: {
    position: 'absolute',
    bottom: '59%',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  upperBottomHalf: {
    position: 'absolute',
    bottom: '43%',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomLeft: {
    position: 'absolute',
    bottom: '13%',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bioRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '36%',
    left: 45,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '25%',
    left: 45,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondinfoRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '25%',
    left: 160,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdinfoRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '20%',
    left: 45,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourinfoRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '20%',
    left: 197,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '10%',
    left: 45,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '10%',
    left: 127,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '10%',
    left: 240,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '6%',
    left: 90,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fiveRoundedRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: '6%',
    left: 190,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bioRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  infoRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  secondinfoRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  thirdinfoRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  fourinfoRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  roundedText: {
    fontSize: 15,
    color: '#000000',
  },
  secondRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  thirdRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  fourRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  fiveRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  bioText: {
    fontSize: 25,
  },
  infoText: {
    fontSize: 25,
  },
  travelText: {
    fontSize: 25,
  },

});

import React, { useRef } from "react";
import { Text, View, StyleSheet, Image, Animated, PanResponder, 
  TouchableOpacity, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import pumpkin from './images/pumpkin.jpg'

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Itemhdjhfadfjlkadflkadjflkjdfldksjflkasjdflkasdjflakdjfajsklfjalsdfkjslfkjsadlfjsdfjlasjkdflakdjfla;skdjfa",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{item.title}</Text>
//   </TouchableOpacity>
// );

export default function App() {

  // const [selectedId, setSelectedId] = useState(null);

  // const renderItem = ({ item }) => {
  //   const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //   const color = item.id === selectedId ? 'white' : 'black';



  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      
      <View style={styles.photoContainer}>
        <Image source={require("./images/pumpkin.jpg")} style={styles.photo} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameAndPronouns}>RAINA WAN</Text>
      </View>
      <View style={styles.blurbContainer}>
        <Text style={styles.blurb}>raina the pumpkin</Text>
      </View>

      <View style = {styles.wholeBox}>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }]
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box}>
            <Text style={styles.boxText}>Drag me!</Text>
          </View>
        </Animated.View>
      </View>

      <TouchableOpacity onPress={() => alert('jk')} style={styles.button}>
        <Text style={styles.buttonText}>click me i dont work</Text>
      </TouchableOpacity>

    <SafeAreaView style={styles.scroll}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.scrollText}>
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
          scroll me scroll me scroll me scroll me scroll me scroll me scroll me
        </Text>
      </ScrollView>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.scrollText}>
        words words words words words
      </Text>
      </ScrollView>
    </SafeAreaView>

    {/* <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      /> */}

    </View>
  );
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EDDC",
  },
  photoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  nameContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  blurbContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    resizeMode: "contain",
    // width: "90%",
    flex: 2,
    padding: 50,
    width: 300,
    height: 300,
  },
  nameAndPronouns: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#EB1D36",
  },
  blurb: {
    fontSize: 20,
    color: "#A2B5BB",
  },

  //drag and release box
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    backgroundColor: "#A2B5BB",
    borderRadius: 5,
    margin: 30,
  },
  boxText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    padding: 20,
  },
  wholeBox: {
    justifyContent: "center",
    alignItems: "center",
  },

  //button
  button: {
    backgroundColor: "#ef4c60",
    padding: 20,
    borderRadius: 5,
    margin: 30,
    marginHorizontal: 150,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: '#fff',
  }, 

  //sectioned scroll
  scroll: {
    flex: 2,
    paddingRight: 70,
    paddingLeft: 70,
    flexDirection: 'row',
    position: 'relative',
    paddingBottom: 30,
    paddingTop: StatusBar.currentHeight,
    // marginHorizontal: 270,
    // marginLeft: 550,
    // marginRight: 30,
  },
  scrollView: {
    flex: 1,
    padding: 30,
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});

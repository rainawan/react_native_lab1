import React, { useRef } from "react";
import { Text, View, StyleSheet, Image, Animated, PanResponder } from "react-native";

export default function App() {

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
        <Image source={require("./assets/perry.png")} style={styles.photo} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameAndPronouns}>Raina A. Wan</Text>
      </View>
      <View style={styles.blurbContainer}>
        <Text style={styles.blurb}>bawk</Text>
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

    </View>
  );
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
    width: "90%",
    padding: 50,
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
  }
});

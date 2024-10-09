import { StyleSheet, Text,TextInput, View, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={styles.image}
        />
        <Text style={styles.text2}>Full Name</Text>
<TextInput 
  style={styles.input}
  placeholder="Enter your full name"
/>

<Text style={styles.text3}>Email Address</Text>
<TextInput 
  style={styles.input}
  placeholder="Enter your email address"
  keyboardType="email-address"
/>

<Text style={styles.text2}>Password</Text>
<TextInput 
  style={styles.input}
  placeholder="Enter your password"
  secureTextEntry={true}
/>

       

        <View style={styles.row}>
          <View style={styles.box3} />
          <Text style={styles.text4}>I agree to Mealtime’s Terms & Conditions</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text5}>Create an Account</Text>
        </View>

        <View style={styles.row2}>
          <View style={styles.box4} />
          <Text style={styles.text6}>Or</Text>
          <View style={styles.box4} />
        </View>

        <View style={styles.row3}>
          <View style={styles.column}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image3}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.absoluteImage}
            />
          </View>
          <View style={styles.column2}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image4}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.absoluteImage2}
            />
          </View>
          <Text style={styles.text7}>Sign Up with Google</Text>
        </View>

        <View style={styles.row4}>
          <View style={styles.column3}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image5}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.absoluteImage3}
            />
          </View>
          <Text style={styles.text8}>Sign Up with Facebook</Text>
        </View>

        <Text style={styles.text9}>Already a member? Login</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  input: {
    height: 57,
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16, // to keep consistent padding around input
    fontSize: 16, // adjust font size
    color: "#333333", // input text color
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFAF5",
    borderRadius: 20,
    paddingTop: 59,
    paddingBottom: 46,
  },
  image: {
    width: 18,
    height: 15,
    marginBottom: 35,
    marginHorizontal: 18,
  },
  text: {
    color: "#191919",
    fontSize: 32,
    marginBottom: 35,
    marginLeft: 17,
  },
  text2: {
    color: "#191919",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 17,
  },
  text3: {
    color: "#191919",
    fontSize: 18,
    marginBottom: 9,
    marginLeft: 17,
  },

  

  text4: {
    fontSize: 16,
    flex: 1,
  },
  text5: {
    color: "#999999",
    fontSize: 18,
  },
  text6: {
    color: "#999999",
    fontSize: 16,
  },
  text7: {
    color: "#191919",
    fontSize: 18,
  },
  text8: {
    color: "#FFFAF5",
    fontSize: 18,
  },
  text9: {
    fontSize: 18,
    marginLeft: 109,
  },
  box: {
    height: 57,
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  box2: {
    height: 57,
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 21,
    marginHorizontal: 16,
  },
  box3: {
    width: 20,
    height: 20,
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 9,
  },
  box4: {
    width: 180,
    height: 1,
    backgroundColor: "#E6E6E6",
  },
  view: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderRadius: 16,
    borderWidth: 1,
    paddingLeft: 356,
    paddingRight: 23,
    marginBottom: 15,
    marginHorizontal: 16,
  },
  view2: {
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 16,
    paddingVertical: 23,
    marginBottom: 25,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 21,
    marginHorizontal: 16,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 21,
    marginHorizontal: 16,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 21,
    marginBottom: 14,
    marginHorizontal: 16,
  },
  row4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1877F2",
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 98,
    marginHorizontal: 16,
  },
  column: {
    width: 5,
    marginRight: 7,
  },
  column2: {
    width: 11,
    marginRight: 11,
  },
  column3: {
    width: 24,
    marginRight: 10,
  },
  image2: {
    width: 19,
    height: 18,
    marginTop: 20,
  },
  image3: {
    height: 10,
  },
  image4: {
    height: 11,
  },
  image5: {
    height: 23,
  },
  absoluteImage: {
    position: "absolute",
    top: -7,
    left: 1,
    width: 19,
    height: 9,
  },
  absoluteImage2: {
    position: "absolute",
    bottom: -2,
    right: 3,
    width: 19,
    height: 9,
  },
  absoluteImage3: {
    position: "absolute",
    bottom: -1,
    left: 7,
    width: 10,
    height: 19,
  },
});

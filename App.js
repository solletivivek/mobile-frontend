import { StyleSheet, Text, View, Button , TextInput} from 'react-native';

export default function App() {
  return (
    <View style={css.appContainer}>
        <View>
          <TextInput placeholder='our goal' style={css.text}/>
          <Button title ='add' style={css.button}/>
          <View>
            <Text style={css.text2}>List of our goals..</Text>
          </View>
        </View>

    </View>
      
  );
}

const css = StyleSheet.create({
  appContainer: {
    padding: 50,
    margin: 50
  },
  text:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 4
  },text2:{
    padding: 4,
    margin: 4
  },
  button:{
    padding: 4,
    margin: 4,
    borderRadius: 20,
    backgroundColor: 'black'
  }

});

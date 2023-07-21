import React from 'react';
import {Button, SafeAreaView, StyleSheet, View, FlatList, Text, Image, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const DATA = [
    {
        id:1,
        description:"Lady with a red umbrella",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/spunky-sam.png"
      },
      {
        id:2,
        description:"Flowers and some fruits",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png"
      },
      {
        id:3,
        description:"Beautiful scenery",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/purple-pi.png"
      },
      {
        id:4,
        description:"Some kind of bird",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png"
      },
      {
        id:5,
        description:"The attack of dragons",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png"
      },
      {
        id:6,
        description:"Lady with a red umbrella",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/spunky-sam.png"
      },
      {
        id:7,
        description:"Flowers and some fruits",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png"
      },
      {
        id:8,
        description:"Beautiful scenery",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/purple-pi.png"
      },
      {
        id:9,
        description:"Some kind of bird",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png"
      },
      {
        id:10,
        description:"The attack of dragons",
        imageUrl:"https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png"
      }
  ];

  

const MenuItem = ({navigation}) => {

  const Navfunc = (item) => {
    navigation.navigate('MenuDetails',item);
  }

  const Item = ({description, imageUrl}) => (
    <View style={styles.viewGrid}>
          <TouchableOpacity onPress={() => Navfunc(imageUrl)}>
             <Image style = {styles.image} source={{
                 uri: imageUrl,
                 }}/>
             <Text style={styles.textGrid}>{description}</Text>
         </TouchableOpacity>
         
     </View>
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList 
            data = {DATA}
            renderItem={({item}) => 
            <Item 
            navigation={navigation}
            imageUrl={item.imageUrl}
            description={item.description} 
            />}
            keyExtractor={item => item.id} 
            numColumns={2}/>
      </View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container : {
        //backgroundColor: 'red',
    },
    viewGrid : {
        width : '40%',
        height: 200,
        //backgroundColor: 'green',
        justifyContent:'center',
        left: 19,
        top: 10,
        marginBottom : 25,
        margin : 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center'
    },
    textGrid: {
        color : 'black',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
        backgroundColor : 'gray',
        height: 50,
        marginTop: 0,
        
    },
    image : {
        width: '100%',
        height : 150,
        backgroundColor: 'transparant',
        justifyContent: 'center',
        alignItems : 'center'
    }
});

export default React.memo(MenuItem);
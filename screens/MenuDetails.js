import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet,View, Image, BackHandler} from 'react-native';

const MenuDetails = (props) => {
  console.log('check====>', props.route.params);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => onBackPress())
    return () => backHandler.remove()
  }, [])

  const onBackPress = () => {
    navigation.navigate('MenuItem');
  }

  return (
    <SafeAreaView>
      <View>
      <Image style = {styles.image} source={{
                 uri: props.route.params,
                 }}/>
      </View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image : {
    width : '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default MenuDetails;
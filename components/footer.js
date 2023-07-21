import React from "react";
import {View, Text, StyleSheet, Dimensions} from 'react-native'

var {width, height} = Dimensions.get('window')

const Footer = (props) => {
    return(
        <View style={styles.viewFooter}>
            <Text style={styles.footerText}>{props.footerText}</Text>
            <Text style={styles.footerText}>{props.footerText1}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
      viewFooter: {
        backgroundColor: 'black',
        width : width,
        height: 100,
        bottom: -310,
        position: 'absolute',
        justifyContent: 'flex-start'
        
      },
      footerText: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center'
      }
      
});
export default Footer;
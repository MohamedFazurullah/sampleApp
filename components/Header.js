import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'

const Header = (props) => {
    return(
        <View style={styles.container}>
            <View style = {styles.viewImage}>
                <Image
                style={styles.logo}
                source={{ 
                    uri: props.url 
                }}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        height: 70,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection: 'row'
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'transparent'
    },
    viewImage: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 50,
        marginLeft: 10
    } 
});
export default Header;
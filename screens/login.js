import React, {
    useState, 
    useEffect, 
    useCallback, 
    useMemo, 
    useFocusEffect,
    useReducer} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Header from "../components/Header";
import CustomTextInput from '../components/TextInput'
import CustomButton from "../components/Button";
import Footer from "../components/footer";
import ForgetPassword from "./forgetPassword";

const Login = ({navigation}, props) => {
    const [userName, onChangeuserName] = useState('');
    const [password, onChangePassword] = useState('');
    const [isDisable, setisDisable] = useState(false);

    const forceUpdate = () => {
        setisDisable(true);
    }
    if(isDisable === false){
        console.log('----Attempt----');
        forceUpdate();
    }

    const loginLogic = (params) => {
        if(userName === '' && password === ''){
            alert('field is not empty');
        }else{
            console.log('success...');
            navigation.navigate(params);
        }
    }
    const forgetPasswordLogic = (params) => {
        navigation.navigate(params)
    }

    return(
        <View>
            <Header 
                url={'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'}
            />
            <View style = {styles.viewTextInput}>
                <CustomTextInput 
                    onChangeText={onChangeuserName} 
                    value={userName} 
                    placeholder={'UserName'}
                    keyboardType={'email-address'} />

                <CustomTextInput 
                    onChangeText={onChangePassword} 
                    value={password} 
                    placeholder={'Password'}
                    keyboardType={'visible-password'} />

                    <TouchableOpacity onPress={() => forgetPasswordLogic('forgetPassword')}>
                        <Text style={styles.forgetPassword}>forget Password</Text>
                    </TouchableOpacity>
                    

                <View style={styles.viewCustombutton}>
                    <CustomButton 
                        onPress = {() => loginLogic('Home')}
                        title ={'Login'}
                        color={'#2196F3'}
                        />
                </View>
            </View>
            <Footer 
                footerText={'© COPYRIGHT 2023 SAMPLE. ALL RIGHTS RESERVED.'}
                footerText1={'Powered by : SingleInterface'}/>
        </View>
    );
}
const styles = StyleSheet.create({
    viewTextInput : {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop: '40%'
    },
    viewCustombutton: {
        padding: 10
    },
    forgetPassword: {
        justifyContent:'center',
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
});
export default React.memo(Login);
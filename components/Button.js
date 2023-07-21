import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

const customButton = (props) => {
  return (
    <SafeAreaView>
      <Button
        onPress={props.onPress}
        title={props.title}
        color={props.color}
        accessibilityLabel={props.accessibilityLabel}
        disabled={props.disabled}
/>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default customButton;
import React from 'react';
import {
StyleSheet,
View,
ImageBackground,
Text,
KeyboardAvoidingView,
Platform,
} from 'react-native';
import {Clear} from './assets/getImageForWeather';
import SearchInput from './components/SearchInput';
export default class App extends React.Component {
    render() {
            const location = 'San Francisco';
        return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
        source={Clear}
        style={styles.imageContainer}
        imageStyle={styles.image}        
>
<View style={styles.detailsContainer}>
<Text style={[styles.largeText, styles.textStyle]}>
San Francisco
</Text>
<Text style={[styles.smallText, styles.textStyle]}>
Light Cloud
</Text>
<Text style={[styles.largeText, styles.textStyle]}>24°</Text>
<SearchInput placeholder="Search any city" />
</View>
</ImageBackground>
</KeyboardAvoidingView>
);
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495E',

         },
         textStyle: {
            textAlign: 'center',
            fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
            color: 'white'
             },
            
         largeText: {
         fontSize: 44,
         },
         smallText: {
         fontSize: 18,
         },
         smallText: {
            fontSize: 18,
            },
            textInput: {
            backgroundColor: '#666',
            color: 'white',
            height: 40,
            width: 300,
            marginTop: 20,
            marginHorizontal: 20,
            paddingHorizontal: 10,
            alignSelf: 'center',
            },
            imageContainer: {
                flex: 1,
                },
                image: {
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover',
                },
                detailsContainer: {
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    paddingHorizontal: 20,
                    },
                    
            
 });

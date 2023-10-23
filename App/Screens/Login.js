import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react';
import AppImage from '../../assets/img_2.png'
import Colors from '../Shared/Colors'
import SignInWithOAuth from "../Components/SignInWithOAuth";
import {useWarmUpBrowser} from "../../hooks/warmUpBrowser";

export default function Login(){


    return(
        <View styles={{alignItems: 'center'}}>
            <Image style={styles.image} source={AppImage} alt={'Image Test'}></Image>
            <View style={{backgroundColor: Colors.white, padding: 25, alignItems: 'center', marginTop: -50,
                borderTopLeftRadius: 25, borderTopRightRadius: 25
            }}>
                <Text style={styles.heading}>건강한 일상의 시작</Text>
                <Text style={styles.heading}>비대면으로 예약하세요</Text>
                <TouchableOpacity
                    onPress={() => signIn}
                    style={{padding: 16, backgroundColor: Colors.primary, marginTop: 20, borderRadius: 90, alignItems:'center', width: Dimensions.get('screen').width * 0.8}}>
                    <SignInWithOAuth>구글 ID로 로그인</SignInWithOAuth>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 400,
        objectFit: 'contain',
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
    },
})
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useAuth } from "@clerk/clerk-expo";

const SignOut = () => {
    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
        return null;
    }

    return (
        <View>
            <Button
                title="Sign Out"
                onPress={() => {
                    signOut();
                }}
            />
        </View>
    );
}

export default function Home() {
    return(
        <View>
            <Text>Home</Text>
            <SignOut/>
        </View>
    )
}
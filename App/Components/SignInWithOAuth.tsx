import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Button } from 'react-native';
import { useOAuth} from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';


WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({strategy: 'oauth_google'});
    const onPress = React.useCallback(async () => {
        try {
            const {createdSessionId, signIn, signUp, setActive} = await startOAuthFlow();
            if (createdSessionId) {
                setActive({session: createdSessionId});
            } else {
                console.log('User already exists');
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <Button
            title={"구글 ID로 로그인"}
            onPress={onPress}
        />
    )
}

export default SignInWithOAuth;
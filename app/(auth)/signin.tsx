import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const SignIn = () => {
    return(
        <View>
            <Text>SignIn</Text>
            <Link href='/(auth)/signup'>Create Account</Link>
        </View>
    )
}

export default SignIn;
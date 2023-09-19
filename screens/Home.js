import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { useState } from 'react';


export default function Home({ navigation }) {

    const [counter, setCounter] = useState(0);

    return (
        <Layout
            style={styles.container}
            level='1'
        >
            <View>
                <Button onPress={() => setCounter(counter + 1)}>
                    BUTTON
                </Button>

                <Text style={styles.text}>
                    {`Pressed ${counter} times`}
                </Text>
            </View>

            <Button onPress={() =>  navigation.push('About')}>About Page</Button>


        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 8,
    },
});

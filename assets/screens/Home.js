import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, Input } from '@ui-kitten/components';
import { useState, React } from 'react';


export default function Home({ navigation }) {

    const [counter, setCounter] = useState(0);

    const [value, setValue] = useState(0);

    return (
        <Layout
            style={styles.container}
            level='1'
        >
             <Input style={styles.inputBar}
                placeholder='Place your Text'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />

            <View style={styles.buttonCounter}>
                <Button style={styles.button} onPress={() => setCounter(counter + 1)}>
                    Press Me!
                </Button>
                <Text style={styles.text}>
                    {`Pressed ${counter} times`}
                </Text>
            </View>

            <Button style={styles.aboutButton} onPress={() => navigation.push('About')}>About Page</Button>


        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'col',
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
        backgroundColor: 'transparent'
    },
    text: {
        marginHorizontal: 8,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 16
    },
    buttonCounter: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'col',
        gap: 5,
        color: '#132939',
    },
    button: {
        backgroundColor: '#3b739c',
        borderColor: '#132939',
        width: 200,
        fontSize: 20,
        height: 50
    },
    inputBar: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30, 
        borderColor: '#132939'       
    },
    aboutButton: {
        backgroundColor: '#4893cb',
        borderColor: '#3d6786',
        marginTop: 50
    }
});

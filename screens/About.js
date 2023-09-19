import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { Datepicker, Layout, Text } from '@ui-kitten/components';
import React from 'react';

export default function About({ navigation }) {

    const [date, setDate] = React.useState(new Date());
    return (
        <Layout
            style={styles.container}
            level='1'
        >

            <View style={styles.container}>
                <Text>About Page</Text>
                <StatusBar style="auto" />
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>
            <Text category='h6'>
                {`Selected date: ${date.toLocaleDateString()}`}
            </Text>

            <Datepicker
                date={date}
                onSelect={nextDate => setDate(nextDate)}
            />

        </Layout>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        minHeight: 376,
      }
});

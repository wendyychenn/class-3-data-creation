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
            <View style={styles.calendar}>
                <Text style={styles.calendarText} category='h6'>
                    {`Selected date: ${date.toLocaleDateString()}`}
                </Text>
                <Datepicker
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />
            </View>

                <Button style={styles.backButton} title="Go Back" onPress={() => navigation.goBack()} />
  

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
    calendar: {
        minHeight: 376,
        marginTop: -100,
        marginBottom: 50
    },
    calendarText: {
        color:'#132939',
        marginBottom: 10
    },
    backButton: {
        backgroundColor: '#4893cb',
        borderColor: '#3d6786',
        width: 200
    }
});

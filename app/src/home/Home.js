import * as React from 'react';
import { useState } from 'react';
import { Button, Text, StyleSheet, View, TextInput } from 'react-native';

function Home({ navigation }) {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pet CCTV</Text>
            <View style={styles.inputs}>
                <TextInput
                    style={styles.input}
                    value={text}
                    // onChangeText={handleTextChange}
                    placeholder="아이디를 입력해주세요."
                />
                <TextInput
                    style={styles.input}
                    value={text}
                    // onChangeText={handleTextChange}
                    placeholder="비밀번호를 입력해주세요."
                />
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        position: 'absolute',
        top: 0
    },
    inputs: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
    }
})
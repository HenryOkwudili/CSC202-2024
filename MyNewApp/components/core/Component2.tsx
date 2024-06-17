import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PatientBiodata = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [surName, setSurName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [DOB, setDOB] = useState<string>("");  // Changed to string for input compatibility
    const [homeAddress, setHomeAddress] = useState<string>("");
    const [DOR, setDOR] = useState<string>("");  // Changed to string for input compatibility
    const [mat_no, setMat_no] = useState<string>("");

    return (
        <View style={{ padding: 20 }}>
            <Text>Biodata of Patient</Text>
            <View style={{ marginVertical: 10 }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Name"
                        onChangeText={setFirstName}
                        value={firstName}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Surname"
                        onChangeText={setSurName}
                        value={surName}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Middlename"
                        onChangeText={setMiddleName}
                        value={middleName}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="DOB (mm/dd/yy)"
                        onChangeText={setDOB}
                        value={DOB}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Home Address"
                        onChangeText={setHomeAddress}
                        value={homeAddress}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Date of Registration (mm/dd/yy)"
                        onChangeText={setDOR}
                        value={DOR}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Matric Number"
                        onChangeText={setMat_no}
                        value={mat_no}
                        style={styles.input}
                    />
                </View>
                <Button
                    title="Enter"
                    onPress={() => { /* Add your onPress logic here */ }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    }
});

export default PatientBiodata;

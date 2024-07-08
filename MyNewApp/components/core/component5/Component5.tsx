import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PatientBiodata = () => {
    const [clinicDate, setClinicDate] = useState<string>("");  
    const [NoA, setNoA] = useState<string>("");
    const [medPres, setMedPres] = useState<string>("");
    const [procedureUnd, setProcedureUnd] = useState<string>("");
    const [DoNApt, setDoNApt] = useState<string>(""); 

    return (
        <View style={{ padding: 20 }}>
            <Text>Clinical Record</Text>
            <View style={{ marginVertical: 10 }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Clinic Date (mm/dd/yy)"
                        onChangeText={setClinicDate}
                        value={clinicDate}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Nature of Ailment"
                        onChangeText={setNoA}
                        value={NoA}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Medicine Prescribed"
                        onChangeText={setMedPres}
                        value={medPres}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Procedure Undertaken"
                        onChangeText={setProcedureUnd}
                        value={procedureUnd}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Date of Next Appointment (mm/dd/yy)"
                        onChangeText={setDoNApt}
                        value={DoNApt}
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
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    input: {
        borderBottomWidth: 0,
        borderBottomColor: '#ccc',
        padding: 5,
    },
});

export default PatientBiodata;

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import api from "./services/api";

export default function App() {
    const [apiData, setApiData] = useState([]);

    async function getData() {
        const response = await api.get("facts");
        const el = response.data.filter(fact => fact._id === "5887e1d85c873e0011036889");
        console.log(el);
        setApiData(response.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            {apiData.map(fact => (
                <Text key={fact._id}>{fact.text}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

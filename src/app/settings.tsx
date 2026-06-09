import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";

import { useMission } from "../context/MissionContext";

export default function Settings() {
  const { threshold, setThreshold } = useMission();

  const [value, setValue] = useState(
    threshold.toString()
  );

  const handleSave = () => {
    const number = Number(value);

    if (
      isNaN(number) ||
      number < 0 ||
      number > 100
    ) {
      Alert.alert(
        "Erro",
        "Digite um valor entre 0 e 100"
      );
      return;
    }

    setThreshold(number);

    Alert.alert(
      "Sucesso",
      "Limite atualizado"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Temperatura Crítica
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />

      <Button
        title="Salvar"
        onPress={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  label: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
});
import { View, Text, StyleSheet } from "react-native";

export default function AlertCard({
  message,
}: {
  message: string;
}) {
  return (
    <View style={styles.alert}>
      <Text style={styles.text}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: "#8B0000",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
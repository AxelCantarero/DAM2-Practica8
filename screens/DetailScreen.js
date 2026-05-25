import react  from "react";
import { View, Text, StyleSheet, ScrollView, Image} from "react-native";

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: item.url }}
        style={styles.image}
      />

      <Text style={styles.titulo}>
        {item.nombre}
      </Text>

      <Text style={styles.precio}>
        {item.precio}
      </Text>

      <Text style={styles.detalles}>
        {item.descripcion}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },

  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  precio: {
    fontSize: 24,
    color: "green",
    fontWeight: "bold",
    marginBottom: 15,
  },

  detalles: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
  },
});
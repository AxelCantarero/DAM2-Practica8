import react from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet, Image, View } from "react-native";

const data = [
    {id:1,nombre:'Control PS4', precio:'$50', descripcion:'Control de PlayStation color blanco ', url:'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg'},
    {id:2,nombre:'Control Nintendo 64', precio:'$75', descripcion:'Control de Nintendo 64 Color Gris ', url:'https://images.pexels.com/photos/9281228/pexels-photo-9281228.jpeg'},
    {id:3,nombre:'Consola Switch', precio:'$350', descripcion:'Consola Switch nueva color blanco', url:'https://images.pexels.com/photos/6654174/pexels-photo-6654174.jpeg'},
    {id:4,nombre:'Consola Xbox One ', precio:'$50', descripcion:'Consola Xbox One color negro ', url:'https://images.pexels.com/photos/16776036/pexels-photo-16776036.jpeg'},
    {id:5,nombre:'Consola Super Nintendo', precio:'$50', descripcion:'Consola Super Nintendo color blanco ', url:'https://images.pexels.com/photos/4502975/pexels-photo-4502975.jpeg'},
    
]
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}  onPress={() => navigation.navigate("detail", { item })}>
          <Image source={{ uri: item.url }} style={styles.image} />

          <View style={styles.info}>
            <Text style={styles.title}>{item.nombre}</Text>

            <Text style={styles.description}>
              {item.descripcion}
            </Text>

            <Text style={styles.price}>{item.precio}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5,
  },

  image: {
    width: "100%",
    height: 200,
  },

  info: {
    padding: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/foto.jpg')}
        style={styles.image}
      />

      <Text style={styles.title}>Tugas Mobile Programming</Text>
      <Text>Nama: Hanna Pati Lopian Br Situmeang</Text>
      <Text>NIM: 2405102001</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
});

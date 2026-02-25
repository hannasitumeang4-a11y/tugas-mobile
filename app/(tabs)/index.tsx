import { useFonts } from 'expo-font';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  // 1. Load font di sini agar bisa digunakan di file ini
  const [fontsLoaded, fontError] = useFonts({
    'Jakarta': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/foto.jpg')}
        style={styles.image}
      />

      {/* 3. Gunakan style.jakartaFont di setiap komponen Text */}
      <Text style={[styles.title, styles.jakartaFont]}>Tugas Mobile Programming</Text>
      <Text style={styles.jakartaFont}>Nama: Hanna Pati Lopian Br Situmeang</Text>
      <Text style={styles.jakartaFont}>NIM: 2405102001</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  jakartaFont: {
    fontFamily: 'Jakarta',
  },
});
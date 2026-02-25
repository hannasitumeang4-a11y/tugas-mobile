import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [showAbout, setShowAbout] = useState(false);

  const [fontsLoaded] = useFonts({
    'Jakarta': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE4E1' }}>
        <ActivityIndicator size="large" color="#FF69B4" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.imageWrapper}>
        <Image 
          source={require('../../assets/foto.jpg')}
          style={styles.image}
        />
      </View>

      <Text style={[styles.title, styles.jakartaFont]}>Tugas Mobile Programming</Text>
      
      <View style={styles.identityContainer}>
        <Text style={[styles.infoText, styles.jakartaFont]}>Nama: Hanna Pati Lopian Br Situmeang</Text>
        <Text style={[styles.infoText, styles.jakartaFont]}>NIM: 2405102001</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setShowAbout(!showAbout)}
      >
        <Text style={[styles.buttonText, styles.jakartaFont]}>
          {showAbout ? 'CLose' : 'About Me'}
        </Text>
      </TouchableOpacity>

          {showAbout && (
        <View style={styles.aboutCard}>
          <Text style={[styles.aboutText, styles.jakartaFont]}>
            Halo semua! Namaku Hanna Pati Lopian Br Situmeang, biasa di panggil Hanna,Ana atau Cipeng. Aku lahir dan besar di Medan. Fun fact tentang aku, aku tuh suka banget hitung-hitungan dan memecahkan masalah karena menurutku itu memerlukan logika dan analitis yg kuat. 
          </Text>
          <Text style={[styles.aboutText, styles.jakartaFont]}>
            Semoga kita bisa berteman dekat! 
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE4E1', 
    paddingVertical: 40,
  },
  imageWrapper: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D81B60',
    marginBottom: 10,
  },
  identityContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  aboutCard: {
    backgroundColor: '#FFF',
    width: '85%',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#FF69B4',
  },
  aboutText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'left',
    lineHeight: 20,
    marginBottom: 8,
  },
  jakartaFont: {
    fontFamily: 'Jakarta',
  },
});
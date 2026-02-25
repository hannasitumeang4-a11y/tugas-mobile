import { Ionicons } from '@expo/vector-icons'; // Menggunakan Ionicons untuk hobi
import { useFonts } from 'expo-font';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  const [fontsLoaded] = useFonts({
    'Jakarta': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF69B4" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, styles.jakartaFont]}>My Hobbies & Skills</Text>
        <Text style={[styles.headerSubtitle, styles.jakartaFont]}>Apa saja yang Hanna suka?</Text>
      </View>

      <View style={styles.content}>
        {/* Hobi 1: Hitung-hitungan */}
        <View style={styles.skillCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="calculator" size={30} color="#D81B60" />
          </View>
          <View style={styles.skillInfo}>
            <Text style={[styles.skillTitle, styles.jakartaFont]}>Matematika & Logika</Text>
            <Text style={[styles.skillDesc, styles.jakartaFont]}>Suka banget memecahkan masalah angka.</Text>
          </View>
        </View>

        {/* Hobi 2: Coding */}
        <View style={styles.skillCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="code-slash" size={30} color="#D81B60" />
          </View>
          <View style={styles.skillInfo}>
            <Text style={[styles.skillTitle, styles.jakartaFont]}>Mobile Programming</Text>
            <Text style={[styles.skillDesc, styles.jakartaFont]}>Lagi belajar buat aplikasi pakai React Native.</Text>
          </View>
        </View>

        {/* Hobi 3: Travelling / Medan Pride */}
        <View style={styles.skillCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="map" size={30} color="#D81B60" />
          </View>
          <View style={styles.skillInfo}>
            <Text style={[styles.skillTitle, styles.jakartaFont]}>Explore Medan</Text>
            <Text style={[styles.skillDesc, styles.jakartaFont]}>Lahir dan besar di Medan, suka jalan-jalan!</Text>
          </View>
        </View>

        {/* Bagian Quote */}
        <View style={styles.quoteBox}>
          <Text style={[styles.quoteText, styles.jakartaFont]}>
            "Logika akan membawamu dari A ke B. Imajinasi akan membawamu ke mana saja."
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBEE', // Pink senada dengan Home
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEBEE',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 25,
    paddingBottom: 20,
    backgroundColor: '#FF69B4',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFE4E1',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  skillCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  skillInfo: {
    flex: 1,
  },
  skillTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D81B60',
  },
  skillDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  quoteBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFF0F5',
    borderRadius: 15,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#FF69B4',
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 14,
    color: '#D81B60',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  jakartaFont: {
    fontFamily: 'Jakarta',
  },
});
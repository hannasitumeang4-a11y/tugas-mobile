import { useFonts } from 'expo-font';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabTwoScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Jakarta': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    if (fontError) {
       console.error("Font Gagal Load:", fontError);
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.jakartaFont}>
          Explore
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.jakartaFont}>
        This app includes example code to help you get started.
      </ThemedText>

      <Collapsible title="File-based routing">
        <ThemedText style={styles.jakartaFont}>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold" style={styles.jakartaFont}>app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold" style={styles.jakartaFont}>app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
      </Collapsible>

      {/* Bagian lainnya tetap sama, pastikan semua menggunakan styles.jakartaFont */}
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  jakartaFont: {
    fontFamily: 'Jakarta',
    ...Platform.select({
        web: {
            fontFamily: 'Jakarta, sans-serif',
        }
    })
  },
});
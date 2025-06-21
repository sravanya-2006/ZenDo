import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TopNavigation() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.item}>👤</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.item}>🔥</Text> {/* You can later replace this with a real streak counter */}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.item}>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  item: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

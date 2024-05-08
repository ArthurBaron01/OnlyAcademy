import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Nome do Usuário</Text>
      <Text style={styles.bio}>Bio do usuário</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.stats}>Seguidores: XX</Text>
        <Text style={styles.stats}>Seguindo: XX</Text>
      </View>
      {/* Botão para seguir ou deixar de seguir o usuário */}
      <TouchableOpacity
        style={[styles.followButton, { backgroundColor: isFollowing ? 'gray' : 'blue' }]}
        onPress={toggleFollow}>
        <Text style={styles.followButtonText}>
          {isFollowing ? 'Deixar de Seguir' : 'Seguir'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    marginTop: 5,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  stats: {
    marginRight: 20,
  },
  followButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserProfile;

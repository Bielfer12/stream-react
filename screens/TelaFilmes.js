import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaFilmes({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [filmes, setFilmes] = useState([]);

  const buscarFilmes = async () => {
    try {
      const response = await fetch('https://www.omdbapi.com/?s=spider%20man&apikey=1cd66749');
      const json = await response.json();
      setFilmes(json.Search);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarFilmes();
  }, []);

  function renderFilme({ item }) {
    return (
      <TouchableOpacity
        style={estilos.card}
        onPress={() => navigation.navigate('TelaDetalhe', { filme: item })}
      >
        <Image
          source={{ uri: item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/300x450' }}
          style={estilos.poster}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['#1565C0', '#B71C1C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={estilos.tituloBox}
        >
          <Text style={estilos.tituloFilme} numberOfLines={2}>
            {item.Title.toUpperCase()}
          </Text>
          <Text style={estilos.anoFilme}>{item.Year}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={estilos.container}>

      <LinearGradient
        colors={['#1565C0', '#B71C1C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={estilos.header}
      >
        <Text style={estilos.headerTitulo}>🕷️ FILMES DO SPIDER-MAN</Text>
      </LinearGradient>
      {isLoading ? (
        <View style={estilos.loading}>
          <ActivityIndicator size="large" color="#1565C0" />
          <Text style={{ marginTop: 10, color: '#555' }}>Carregando filmes...</Text>
        </View>
      ) : (
        <FlatList
          data={filmes}
          keyExtractor={item => item.imdbID}
          renderItem={renderFilme}
          numColumns={2}
          columnWrapperStyle={estilos.linha}
          contentContainerStyle={{ padding: 10, paddingBottom: 30 }}
        />
      )}

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linha: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 14,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  poster: {
    width: '100%',
    height: 200,
  },
  tituloBox: {
    padding: 8,
    height: 65,
    justifyContent: 'center',
  },
  tituloFilme: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  anoFilme: {
    color: '#ddd',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 2,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Title, Paragraph, Text, Divider, Chip } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaDetalhe({ route }) {

  const { filme } = route.params;

  return (
    <ScrollView style={estilos.container}>

      <LinearGradient
        colors={['#1565C0', '#B71C1C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={estilos.header}
      >
        <Text style={estilos.headerTitulo}>🎬 DETALHES DO FILME</Text>
      </LinearGradient>

      <Image
        source={{ uri: filme.Poster !== 'N/A' ? filme.Poster : 'https://via.placeholder.com/300x450' }}
        style={estilos.poster}
        resizeMode="cover"
      />

      <View style={estilos.info}>

        <Title style={estilos.titulo}>{filme.Title.toUpperCase()}</Title>

        <Divider style={{ marginVertical: 10 }} />

        <View style={estilos.chips}>
          <Chip icon="calendar" style={estilos.chip} textStyle={{ color: '#fff' }}>
            {filme.Year}
          </Chip>
          <Chip icon="movie" style={estilos.chip} textStyle={{ color: '#fff' }}>
            {filme.Type}
          </Chip>
        </View>

        <Divider style={{ marginVertical: 10 }} />

        <Paragraph style={estilos.label}>ID no IMDB:</Paragraph>
        <Text style={estilos.valor}>{filme.imdbID}</Text>

        <Divider style={{ marginVertical: 10 }} />

        <Paragraph style={estilos.rodape}>
          Dados fornecidos pela API OMDB
        </Paragraph>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
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
  poster: {
    width: '100%',
    height: 400,
  },
  info: {
    padding: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  chips: {
    flexDirection: 'row',
    gap: 10,
  },
  chip: {
    backgroundColor: '#B71C1C',
  },
  label: {
    color: '#888',
    marginBottom: 4,
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rodape: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
});

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import axios from 'axios';

const APIKEY = '83d9869c';
const BASE_URL = 'http://www.omdbapi.com/';

const Busca = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?apikey=${APIKEY}&s=${query}`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Busca de Filmes</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme (em ingles)"
        value={query}
        onChangeText={text => setQuery(text)}
      />
      <Button title="Buscar" onPress={searchMovies} />
      {movies && movies.length > 0 ? (
        movies.map(movie => (
          <View key={movie.imdbID} style={styles.movieContainer}>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
            <Text style={styles.movieTitle}>{movie.Title}</Text>
            <Text style={styles.movieYear}>{movie.Year}</Text>
          </View>
        ))
      ) : (
        <Text>Nenhum filme encontrado</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  movieContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieYear: {
    fontSize: 16,
    color: '#666',
  },
});

export default Busca;

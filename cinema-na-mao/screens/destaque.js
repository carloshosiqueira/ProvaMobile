import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Destaque = () => {
  const filmes = [
    {
      id: 1,
      titulo: 'Kung Fu Panda 4',
      dataLancamento: '21 de Março de 2024',
      sinopse: 'Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados.',
      imagem: 'https://dx35vtwkllhj9.cloudfront.net/universalstudios/kung-fu-panda-4/images/regions/us/onesheet.jpg',
    },
    {
      id: 2,
      titulo: 'Deadpool e Wolwerine',
      dataLancamento: '26 de Julho de 2024',
      sinopse: 'Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum.',
      imagem: 'https://i0.wp.com/alangeek.com.br/wp-content/uploads/2024/04/ab81d54c-c97d-4478-b070-81c4042a202b-1.jpg?fit=2000%2C1334&ssl=1',
    },
    {
      id: 3,
      titulo: 'Haikyuu, A batalha do lixão',
      dataLancamento: '30 de Maio de 2024',
      sinopse: 'Haikyu - A Batalha do Lixão é do mesmo diretor da série Haykyu!! (2014-2016), Haykyu!! 3: O Talento e o Instinto (2017) e Haykyu!! 4: A Batalha dos Conceitos (2017). A história do filme começa no ponto em que terminou a série, após quatro temporadas, que não terá novos episódios. Nela, a aguardada partida entre os antigos times rivais do Colégio Karasuno e Colégio Nekoma irá acontecer. Ou seja, o jovem Hinata, atleta da equipe Karasuno, irá enfrentar o astro da escola Nekoma em uma batalha que promete ser épica. E agora, quem sairá vencedor deste importante duelo?',
      imagem: 'https://www.kinoplex.com.br/filmes/images/cartaz/262x388/haikyu-a-batalha-do-lixao.jpg?',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Filmes em Destaque</Text>
      {filmes.map((filme) => (
        <View key={filme.id} style={styles.movie}>
          <Image source={{ uri: filme.imagem }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.releaseDate}>Data de Lançamento: {filme.dataLancamento}</Text>
            <Text style={styles.synopsis}>{filme.sinopse}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  movie: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  releaseDate: {
    fontStyle: 'italic',
    color: '#888',
    marginBottom: 10,
  },
  synopsis: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Destaque;

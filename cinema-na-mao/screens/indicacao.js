import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const filmes = [
  {
    id: 1,
    titulo: 'Kimi no na wa (Your Name)',
    dataLancamento: '11 de outubro de 2017',
    sinopse: 'Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos.',
    imagem: 'https://cdn.kobo.com/book-images/fae775d5-9baa-4997-b7a6-543718f25b13/1200/1200/False/your-name-vol-1-manga-1.jpg',
  },
  {
    id: 2,
    titulo: 'Tenki no ko (Weathering with You)',
    dataLancamento: '26 de novembro de 2020',
    sinopse: 'O estudante do ensino médio Hodaka Morishima deixa seu lar numa ilha isolada e se muda pra Tóquio. Vive seus dias em isolamento, mas finalmente encontra um emprego como escritor para uma revista obscura ocultista. Depois de começar seu trabalho, o tempo fica chuvoso dia após dia. Em um canto da cidade cheia e agitada, Hodaka conhece uma garota chamada Hina Amano. Devido a certas circunstâncias, Hina e seu irmão mais novo vivem juntos, mas têm uma vida alegre e resistente. Hina também tem um certo poder: o poder de fazer parar de chover e limpar o céu.',
    imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgISGlzxFjFLtSuDLwZkRCM3Pii7oOH6BQegm3jQgmQaKcLt5OG_rKL7JpMx1ioiJC2uqAG_c7Ruwy2MnHL7d4LE4M6WyDZEqpJ7aAu854UqYQkNFyhwqdNKEqRzO0XQE6W5VzHKtSeygA/s1600/01+-+Tenki+no+Ko.jpg',
  },
  {
    id: 3,
    titulo: 'Let Me Eat Your Pancreas (Kimi no Suizō o Tabetai)',
    dataLancamento: '1 de Setembro de 2018',
    sinopse: 'A história do romance é contada do ponto de vista de um protagonista sem nome que encontra um diário no hospital um dia. O diário pertence a sua colega de classe, uma garota chamada Sakura Yamauchi, que revela estar sofrendo de uma doença terminal em seu pâncreas e que só tem alguns meses para viver.',
    imagem: 'https://miro.medium.com/v2/resize:fit:736/1*lVf-0N3i1rjSfpXhY3v8Bg.jpeg',
  },
  {
    id: 4,
    titulo: 'Koe no Katachi (A Silent Voice)',
    dataLancamento: '17 de Setembro de 2016',
    sinopse: 'Uma estudante com problemas de audição sofre com o bullying dos colegas e decide mudar de escola. Anos mais tarde, um dos rapazes que a importunavam resolve se redimir.',
    imagem: 'https://media.fstatic.com/tM_yqUIAZnjHMaRBil7ptyujlV0=/fit-in/210x312/smart/media/movies/covers/2016/12/koe_no_katachis_filmow_poster.jpg',
  },
  {
    id: 5,
    titulo: 'Boku ga Aishita Subete no Kimi | Kimi wo Aishita Hitori no Boku e (To Every You I`ve Loved Before | To Me, the One Who Loved You)',
    dataLancamento: '14 de Setembro de 2022 | 7 de Outubro de 2022',
    sinopse: 'Dependendo de qual dos dois filmes você assistir primeiro, você verá o outro com uma perspectiva diferente e eu acho que isso é o que torna esses dois filmes tão bom.',
    imagem: 'https://s1.zerochan.net/Cross-Over.600.3777920.jpg',
  },
];

const Indicacao = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.header}>Filmes indicados</Text>
      {filmes.map((filme) => (
        <View key={filme.id} style={styles.movieContainer}>
          <Image source={{ uri: filme.imagem }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.movieTitle}>{filme.titulo}</Text>
            <Text style={styles.releaseDate}>Data de Lançamento: {filme.dataLancamento}</Text>
            <Text style={styles.synopsis}>{filme.sinopse}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  movieContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  releaseDate: {
    fontStyle: 'italic',
    color: '#888',
    marginBottom: 10,
  },
  synopsis: {
    color: '#000',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Indicacao;

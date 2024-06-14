import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Indicacao = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Kimi no na wa (Your Name)</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/200x250' }} // URL da imagem do filme
          style={styles.image}
        />
        <Text style={styles.synopsis}>
          Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu
           emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos
        </Text>
      </View>

      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Tenki no ko (Weathering with You)</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/200x250' }} // URL da imagem do filme
          style={styles.image}
        />
        <Text style={styles.synopsis}>
        O estudante do ensino médio Hodaka Morishima deixa seu lar numa ilha isolada e se muda pra Tóquio. Vive seus dias em isolamento, mas finalmente encontra um emprego como
         escritor para uma revista obscura ocultista. Depois de começar seu trabalho, o tempo fica chuvoso dia após dia. Em um canto da cidade cheia e agitada,
          Hodaka conhece uma garota chamada Hina Amano. Devido a certas circunstâncias, Hina e seu irmão mais novo vivem juntos, mas têm uma vida alegre e resistente. 
          Hina também tem um certo poder: o poder de fazer parar de chover e limpar o céu.
        </Text>
      </View>

      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Let me eat your pancreas(Kimi no Suizō o Tabetai)</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/200x250' }} // URL da imagem do filme
          style={styles.image}
        />
        <Text style={styles.synopsis}>
          A história do romance é contada do ponto de vista de um protagonista sem nome que encontra um diário no hospital um dia. O diário pertence a sua colega de
           classe, uma garota chamada Sakura Yamauchi, que revela estar sofrendo de uma doença terminal em seu pâncreas e que só tem alguns meses para viver
        </Text>
      </View>

      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Koe no Katachi(Silent Voice)</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/200x250' }} // URL da imagem do filme
          style={styles.image}
        />
        <Text style={styles.synopsis}>
        Uma estudante com problemas de audição sofre com o bullying dos colegas e decide mudar de escola. Anos mais tarde, um dos rapazes que a importunavam
         resolve se redimir.
        </Text>
      </View>

      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Boku ga Aishita Subete no Kimi | Kimi wo Aishita Hitori no Boku e <br></br>(To Every You I've Loved Before | To me the One Who Loved You)</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/200x250' }} // URL da imagem do filme
          style={styles.image}
        />
        <Text style={styles.synopsis}>
          Motivo: Dependendo de qual dos dois filmes você assistir primeiro, você verá o outro com uma perspectiva diferente
           e eu acho que isso é o que torna esses dois filmes tão bom. </Text>

           {/* Sinopse Boku ga Aishita Subete no Kimi (To every you I've loved before): Após o divórcio de seus pais, Koyomi Takasaki, que mora com sua mãe, entra em uma escola
            secundária local. No entanto, ele é repentinamente abordado por sua colega de classe Kazune Takigawa.
            Ela diz a ele que se mudou do mundo 85 e que ambos são amantes lá… Ele mesmo está no mundo paralelo neste mundo?
        </Text>
        <Text style={styles.synopsis}>
          Sinopse Kimi wo Aishita Hitori no Boku e (To me the One Who Loved You): Koyomi Hidaka, que vive com seu pai após o divórcio de seus pais, conhece uma garota chamada
           Sato Shiori no Instituto de Ciências da Falsa Qualidade, onde seu pai trabalha. Os dois estão um pouco apaixonados, mas quando os pais se casam, tudo muda.
        </Text> */}
      </View>

      {/* Repita para os demais filmes... */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#000', // fundo preto
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  movieContainer: {
    width: '90%',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // texto branco
    marginBottom: 10,
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  synopsis: {
    color: '#fff', // texto branco
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Indicacao;

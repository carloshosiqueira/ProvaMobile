import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Contato = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Mensagem"
        placeholderTextColor="#888"
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Enviar" onPress={() => {}} />

      <Text style={styles.sectionHeader}>Quem Somos</Text>
      <Text style={styles.text}>
        Bem-vindo ao nosso aplicativo! Nosso objetivo é trazer inovação e praticidade ao seu cotidiano. Aqui estão algumas das novidades que oferecemos:
      </Text>
      <Text style={styles.text}>
        - Integração com diversos serviços para facilitar sua rotina.
      </Text>
      <Text style={styles.text}>
        - Interface intuitiva e fácil de usar.
      </Text>
      <Text style={styles.text}>
        - Atualizações constantes com novas funcionalidades.
      </Text>
      <Text style={styles.text}>
        - Suporte ao usuário disponível 24/7.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  textArea: {
    height: 100,
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default Contato;

import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';


const Contato = () => {
  return (
   <>
    <Text>Tela para contato e sobre nós</Text>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Contato;
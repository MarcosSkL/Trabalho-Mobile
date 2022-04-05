import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Esse é o cabeçalho da página
const Header = () =>{
	return(
		<View>
			<Text style={estilo.header}>
                esse é a tela inicial.
			</Text>
		</View>
	);};
// Esse é o estilo de texto
const estilo = StyleSheet.create({
	header: {
		flex: 1,
		backgroundColor: "black",
		fontFamily: "Roboto"

	}
}
);

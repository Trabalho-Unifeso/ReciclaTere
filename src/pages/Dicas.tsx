import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/NavBar';
import { NavegatorService } from '../service/NavegatorService';

export default function Dicas(NavegatorService: NavegatorService){
    const dicas = [
        {
            title: 'Recicle seu lixo',
            description: 'Separe corretamente os materiais recicláveis e encaminhe para a coleta seletiva.',
        },
        {
            title: 'Evite o uso de sacolas plásticas',
            description: 'Opte por sacolas reutilizáveis ou ecobags ao fazer compras.',
        },
        {
            title: 'Reduza o consumo de água',
            description: 'Feche a torneira enquanto escova os dentes e tome banhos mais curtos.',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dicas de Redução de Lixo</Text>
            {dicas.map((dica, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.cardTitle}>{dica.title}</Text>
                    <Text style={styles.cardDescription}>{dica.description}</Text>
                </View>
            ))}
            <Navbar route={NavegatorService.navigation.navigate}></Navbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        width: '80%',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 16,
    },
});

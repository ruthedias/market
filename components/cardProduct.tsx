import { Link } from "expo-router";
import { Product } from "../types/product";
import { Pressable, Text, Image, StyleSheet, View } from "react-native";

type Props = {
    data: Product;
}
export const CardProduct = ({data}: Props) => {
    return (
        <Link href={`/products/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image 
                    source={{ uri: data.image}} 
                    resizeMode="cover"
                    style={styles.img}
                />
                <View style={styles.info}>
                    <Text style={styles.h1}>{data.name}</Text>
                    <Text style={styles.h2}>Por: R${data.value.toFixed(2)}</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.textButton}>Adicionar ao Carrinho</Text>
                    </Pressable>
                </View>
            </Pressable>
        </Link>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        padding: 10,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    h2: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    button: {
        flex: 1,
        height: 10,
        width: '100%',
        backgroundColor: '#FFCD00',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        

    },
    textButton: {
        fontSize: 16,
        color: '#CD1105',
        fontWeight: 'bold',
        
    }
});
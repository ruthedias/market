import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { getAllProducts } from "../../services/products";
import { CardProduct } from "../../components/cardProduct";
import { BannerMercado } from "../../components/banner";
import { ButtonCategory } from "../../components/buttonCategory";

export default function HomePage(){
    const products = getAllProducts();
    return(
            <View style={styles.container}>
                <BannerMercado/>
                <ButtonCategory/>
                <Text style={styles.text}>TODOS OS PRODUTOS</Text>
                <FlatList style={styles.list}
                    data={products}
                    renderItem={ ({item}) => <CardProduct data={item}/>}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        
    );
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#E0E0E0'
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10

    }
});
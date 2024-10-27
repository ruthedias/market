import { Category } from "../types/category";
import { Text, Pressable, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

type Props = {
    data: Category;
}
export const ProductsCategory = ({ data }: Props) => {
    return (
            <Link href={`/products/${data.id}`} asChild>
                <Pressable>
                    <View style={styles.container}>
                        <Image style={styles.image} source={{uri: data.image}}/>
                        <Text style={styles.text}>{data.name}</Text>
                    </View>
                </Pressable>
            </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 4,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 12,
    }, 
    image: {
        width: 50,
        height: 50,
        borderRadius: 12,
        marginRight: 5,
    }, 
    text: {
        fontSize: 34,
        fontWeight: 'bold'
    },
    
});

import { Text, Image, StyleSheet, View, FlatList, Pressable} from "react-native";
import { ProductsCategory } from "./categorias";
import { getAllCategories } from "../services/category";
import { useState } from "react";

export const ButtonCategory = () => {
    const [areaShow, setAreaShow] = useState(false);

    const categorys = getAllCategories();
    const handleClick = () =>{
        setAreaShow(!areaShow);
    }
    return(
        <View>
            <Pressable onPress={handleClick} style={styles.buttonCategory}>
                <Text style={styles.text}>CATEGORIAS</Text>
            </Pressable>
            {areaShow &&  
                <FlatList
                data={categorys}
                renderItem={ ({item}) => <ProductsCategory data={item}/>}
                keyExtractor={item => item.id.toString()}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    buttonCategory: {
        width: '100%',
        height: 40, 
        backgroundColor: '#FFCD00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
        
    }
});

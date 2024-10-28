import { Link } from "expo-router";
import { Category } from "../types/category";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { DropContainer } from "./container";
import { ImageDrop } from "./image";
import { H1 } from "./text";
import { useState } from "react";
import { getAllCategories } from "../services/category";

type Props = {
    data: Category;
}
type ButtonProps ={
    children : React.ReactNode;
}

export const ButtonCategory = ({ data }: Props) => {
    return (
        <Link href={`/products/${data.id}`} asChild>
            <Pressable>
                <DropContainer>
                    <ImageDrop source={{uri: data.image}}/>
                    <H1>{data.name}</H1>
                </DropContainer>
            </Pressable>
        </Link>
    );
}

export const DropdownCategory = () => {
    const [areaShow, setAreaShow] = useState(false);
    const categorys = getAllCategories();
    const handleClick = () =>{
        setAreaShow(!areaShow);
    }
    return(
        <View>
            <Pressable onPress={handleClick} style={styles.buttonDropDown}>
                <H1 color="red">CATEGORIAS</H1>
            </Pressable>
            {areaShow &&  
                <FlatList
                data={categorys}
                renderItem={ ({item}) => <ButtonCategory data={item}/>}
                keyExtractor={item => item.id.toString()}
                />
            }
        </View>
    );
}
export const ButtonCart = ({children}: ButtonProps) =>{
    return(
        <Pressable style={styles.buttonCart}>{children}</Pressable>
    );
}
const styles = StyleSheet.create({
    buttonDropDown: {
        width: '100%',
        height: 50, 
        backgroundColor: '#FFCD00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCart: {
        flex: 1,
        height: 10,
        width: '100%',
        backgroundColor: '#FFCD00',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});
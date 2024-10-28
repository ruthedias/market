import { FlatList } from "react-native";
import { getAllProducts } from "../../services/products";
import { DropdownCategory } from "../../components/button";
import { Banner } from "../../components/image";
import { CardProduct } from "../../components/cards";
import { H1 } from "../../components/text";
import { MainContainer } from "../../components/container";

export default function HomePage(){
    const products = getAllProducts();
    return(
            <MainContainer>
                <Banner source={require('../../assets/categorias/banner.png')}/> 
                <DropdownCategory/>
                <H1>TODOS OS PRODUTOS</H1>
                <FlatList data={products} 
                    renderItem={({item})=> (
                        <CardProduct
                            source={{ uri: item.image }}
                            title={item.name}
                            value={item.value.toFixed(2)}
                        />
                    )}
                />
            </MainContainer>
    );
}
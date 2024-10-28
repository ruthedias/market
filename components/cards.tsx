import { H2, H3, TextButton } from "./text";
import { Product } from "../types/product";
import { ColumnContainer, RowContainer } from "./container";
import { ImageCard } from "./image";
import { ButtonCart } from "./button";

type Props = {
    product?: Product;
    source: any;
    title: string;
    value: string;
}
export const CardProduct = ({ product, source, title, value}: Props) => {
    return (
        //card de produtos
            <RowContainer>
                <ImageCard source={product ? { uri: product.image } : source}/>
                <ColumnContainer>
                    <H2>{product? product.name : title}</H2>
                    <H3>Por: R${product? product.value.toFixed(2) : value}</H3>
                    <ButtonCart>
                        <TextButton color="#CD1105" >Adicionar ao Carrinho</TextButton>
                    </ButtonCart>
                </ColumnContainer>
            </RowContainer>
    );
}

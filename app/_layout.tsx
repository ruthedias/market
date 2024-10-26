import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Supermarket'}}/>
            <Stack.Screen name="description" options={{ title: 'Descrição'}}/>
            <Stack.Screen name="cartShopping" options={{ title: 'Carrinho de Compras'}}/>
        </Stack>
    );
}
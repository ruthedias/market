import { Tabs, router } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet } from "react-native";


export default function TabLayout(){
    const HandleClick = () => {
        router.navigate('/cartShopping');
    }
    return(
        <Tabs screenOptions={{
            headerStyle : { backgroundColor: "#FFCD00"},
            headerTintColor: "#ED1105",
            headerTitleStyle : {
                fontWeight: "bold",
                fontSize: 24,
            },
            tabBarActiveTintColor: "#FFCD00",
            tabBarInactiveTintColor: "white",
            tabBarStyle: {backgroundColor: '#ED1105'},
            headerRight : () => 
                <Pressable style={styles.cartHeader} onPress={HandleClick}>
                    <FontAwesome name="shopping-cart" size={24} color="#ED1105"/>
                </Pressable>
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "REDE MERCADO",
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28} name="home" color={color}
                    />
                }}
            />
            <Tabs.Screen
                name="cartShopping"
                options={{
                    title: "Carrinho",
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28} name="shopping-cart" color={color}
                    />
                }}
            />
        </Tabs>
    );
}
const styles = StyleSheet.create({
    cartHeader : {
       marginRight: 16, 
    }
});

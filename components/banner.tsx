import { Image, StyleSheet, View } from "react-native";

export const BannerMercado = () => {
    return(
        <View>
            <Image style={styles.banner} source={require( '../assets/categorias/banner.png')} resizeMode="repeat"/>
        </View>
    );
}
const styles = StyleSheet.create({
    banner: {
        width: 1000,
        height: 112,
    },
});
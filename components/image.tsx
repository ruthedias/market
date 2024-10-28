import { Image, StyleSheet } from "react-native";

type ImageProps = {
    source: any;
};

export const Banner = ({source}: ImageProps) => {
    return(
        <Image source={source} style={styles.imageBanner}/>
    );
} 
export const ImageCard = ({source}: ImageProps) => {
    return(
        <Image source={source} style={styles.imageCard}/>
    );
} 
export const ImageDrop = ({source}: ImageProps) => {
    return(
        <Image source={source} style={styles.imageDrop}/>
    );
} 
const styles = StyleSheet.create({
    imageBanner: {
        width: "100%",
        height: 112
    },
    imageCard: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 12,
    },
    imageDrop: {
        width: 50,
        height: 50,
        borderRadius: 12,
        marginRight: 5,
    }
    
});
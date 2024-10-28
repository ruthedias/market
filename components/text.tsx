import { Text, StyleSheet } from "react-native";

type hProps = {
    children: React.ReactNode;
    color? : string;
}

export const H1 = ({children, color}: hProps) => {
    return <Text style={[styles.h1, { color: color || 'black' }]}>{children}</Text>
}

export const H2 = ({children, color}: hProps) => {
    return <Text style={[styles.h2, { color: color || 'black' }]}>{children}</Text>
}


export const H3 = ({children, color}: hProps) => {
    return <Text style={[styles.h3 , { color: color || 'black' }]}>{children}</Text>
}

export const TextButton = ({children, color}: hProps) => {
    return <Text style={[styles.textButton , { color: color || 'white' }]}>{children}</Text>
}

const styles = StyleSheet.create({
    h1: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    h2: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    h3: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    }, 
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',  
    }
    
});

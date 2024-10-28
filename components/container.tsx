import { StyleSheet, View } from "react-native";

type Props = {
    children : React.ReactNode;
    style? : object;
}

export const MainContainer = ({children}: Props) =>{
    return(
        <View style={styles.main}>{children}</View>
    );
}
export const RowContainer = ({children}: Props) =>{
    return(
        <View style={styles.rowContainer}>{children}</View>
    );
}
export const ColumnContainer = ({children}: Props) =>{
    return(
        <View style={styles.columnContainer}>{children}</View>
    );
}
export const DropContainer = ({children}: Props) =>{
    return(
        <View style={styles.dropContainer}>{children}</View>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#E0E0E0'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    }, 
    dropContainer: {
        flexDirection: 'row',
        margin: 4,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 12,
    },
    columnContainer: {
        flex: 1,
    }
});

import { View, Text, StyleSheet } from "react-native"
 type Props ={
id: number;
 name: string;
 idade: number;  
 }
 export const UserItem = (props: Props) => {
 return (
    <View style ={styles.container}>
        <Text style={styles.big}> Nome:{props.name}- Idade:{props.idade} anos </Text>
    </View>
 );

}

const styles = StyleSheet.create({
big:{
    fontSize:28
},

container:{
    margin:10,
}


});
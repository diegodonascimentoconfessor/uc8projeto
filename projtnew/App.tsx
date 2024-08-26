
import { SafeAreaView, StyleSheet, Text, View, StatusBar,FlatList } from 'react-native';
import { UserItem } from './componets/user-item';

type User = {
id: number;
name: string;
idade : number;

}
export default function App() {
  const list: User []= [
    { id: 1, name: "joao", idade:20},
    { id: 1, name: "maria", idade:39},
    { id: 1, name: "Lucia", idade:40},
    { id: 1, name: "Ronaldo", idade:90}
  ]
  return (
    <SafeAreaView>
      <StatusBar/>
     
     <FlatList
     data={list}
     renderItem={({item}) => (<UserItem id={item.id}name={item.name} idade={item.idade}/>)}
     keyExtractor={item => item.id.toString()}

     
     
     
     />

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     height:502,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

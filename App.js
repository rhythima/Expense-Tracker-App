import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AllExpenses from './screens/AllExpenses';
import RecentExpense from './screens/RecentExpense';
import { GlobalStyles } from './constants/styles';
import ManageExpense from './screens/ManageExpense';
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expense-context';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverView(){
  return <BottomTabs.Navigator
    screenOptions={({navigation})=>(
      {
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:"white",
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
      headerRight:({tintColor}) => <IconButton icon="add" size={24} color={tintColor} onPress={()=>navigation.navigate('ManageExpense')}/>
    }
    )}
  >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpense}
        options={{
          title:"Recent Expenses",
          tabBarLabel:"Recent",
          tabBarIcon:({color,size}) => <Ionicons name='hourglass' size={size} color={color}/>
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title:"All Expenses",
          tabBarLabel:"All",
          tabBarIcon:({color,size}) => <Ionicons name='calendar' size={size} color={color}/>
        }}
      />
  </BottomTabs.Navigator>
}


export default function App() {
  return (
        <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
        headerTintColor:"white"
      }}
      >
        <Stack.Screen
        name="ExpensesOverview"
        component={ExpensesOverView}
        options={{headerShown:false}}        

        />
        <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          presentation:"modal"
        }}

        />
      </Stack.Navigator>

      </NavigationContainer>
      </ExpensesContextProvider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

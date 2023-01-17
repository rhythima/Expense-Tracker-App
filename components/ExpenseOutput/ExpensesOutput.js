
import {View,Text,StyleSheet} from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'


function ExpensesOutput({expensesPeriod,expenses}){
return <View style={styles.container}>
        <ExpensesSummary periodName={expensesPeriod} expenses={expenses}/>
        <ExpensesList expenses={expenses}/>        
</View>
}

export default  ExpensesOutput

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700

    }
})

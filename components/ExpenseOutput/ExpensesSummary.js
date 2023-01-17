
import {View,Text,StyleSheet} from 'react-native'
import { GlobalStyles } from '../../constants/styles'

function ExpensesSummary({periodName,expenses}){
    // const expensesSum = expenses.reduce((sum,expense) => sum+expense.amount,0)
    const expensesSum = expenses.reduce((sum,expense) => {
        return sum + expense.amount
    },0)
    return <View style={styles.container}>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>Rs.{expensesSum}</Text>
    </View>

}

export default ExpensesSummary

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:6,
    },
    period:{
        fontSize:12,
        color:GlobalStyles.colors.primary400
    },
    sum:{
        fontSize:16,
        fontWeight:"bold",
        color:GlobalStyles.colors.primary500
    }
})

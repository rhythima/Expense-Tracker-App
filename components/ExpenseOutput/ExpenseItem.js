
import {View,Text,StyleSheet,Pressable} from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import { getFormattedDate } from '../../util/date'
import {useNavigation} from '@react-navigation/native'
function ExpenseItem({id,description,date,amount}){
  
    const navigation = useNavigation()

    function expensePressHandler(){
        navigation.navigate('ManageExpense',{
            expenseId:id
        })
    }



    return <Pressable style={({pressed})=> pressed && styles.pressed} onPress={expensePressHandler}> 
    <View style={styles.expenseItem}>
            <View >
                <Text style={[styles.textBase,styles.description]}>{description}</Text>
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>Rs.{amount.toFixed(2)}</Text>
            </View>
            
    </View>
    </Pressable>
}

export default ExpenseItem

const styles = StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    expenseItem:{
        padding:12,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:8,
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.5,
    },
    textBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:"bold"
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4,
        minWidth:80
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:"bold"
    }
})

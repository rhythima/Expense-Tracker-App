
import { useState } from 'react'
import {Text, View,StyleSheet} from 'react-native'
import { getFormattedDate } from '../../util/date'
import Button from '../UI/Button'
import Input from './Input'

function ExpenseForm({submitButtonLabel,onSubmit,onCancel,defaultValues}){
 
    const [inputValues,setInputValues] = useState({
        amount:defaultValues ? defaultValues.amount.toString():"",
        date:defaultValues ? getFormattedDate(defaultValues.date):"",
        description:defaultValues ? defaultValues.description :""
    })


    function inputChangeHandler(inputIdentifier,enteredValue){
        // console.log(inputIdentifier,enteredValue)
        setInputValues((curInputValues) =>{
           
            return {
                ...curInputValues,
                [inputIdentifier]:enteredValue
            }
        })
    }

    function submitHandler(){
        const expenseData = {
            amount:+inputValues.amount,
            description:inputValues.description,
            date:new Date(inputValues.date)
        }
            onSubmit(expenseData)
    }

    return <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
            <Input
            style={styles.rowInput}
            label="Amount"
            textInputConfig={{
                keyboardType:"decimal-pad",
                onChangeText: inputChangeHandler.bind(this,'amount'),
                value:inputValues.amount
            }}
            />
            <Input
            style={styles.rowInput}
            label="Date"
            textInputConfig={{
                placeholder:'YYYY-MM-DD',
                maxLength:10,
                onChangeText: inputChangeHandler.bind(this,'date'),
                value:inputValues.date
            }}
            />
            </View>
            <Input
            label="Description"
            textInputConfig={{
                multiline:true,
                autoCapitalize:"none",
                autoCorrect:false,
                onChangeText: inputChangeHandler.bind(this,'description'),
                value:inputValues.description
            }}

            />
           <View style={styles.buttons}>
            <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
    </View>
}

export default ExpenseForm

const styles = StyleSheet.create({
    form:{
        marginTop:40
    },
    inputsRow:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:"white",
        marginVertical:24,
        textAlign:"center"
    },
    rowInput:{
        flex:1
    },
    button:{
        minWidth:120,
        marginHorizontal:8
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
})


import { useLayoutEffect,useContext } from 'react'
import {View,StyleSheet} from 'react-native'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import Button from '../components/UI/Button'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles'
import { ExpensesContext } from '../store/expense-context'
import { deleteExpense, storeExpense, updateExpense } from '../util/http'

function ManageExpense({route,navigation}){
    const expensesCtx = useContext(ExpensesContext)



        const editedExpenseId = route.params?.expenseId
        const isEditing = !!editedExpenseId

        const selectedExpense = expensesCtx.expenses.find(expense => expense.id == editedExpenseId)


      useLayoutEffect(()=>{
        navigation.setOptions({
            title:isEditing ? 'Edit Expense':'Add Expense'
        })
      },[navigation,isEditing])

      async function deleteExpenseHandler(){
          await deleteExpense(editedExpenseId)
        expensesCtx.deleteExpense(editedExpenseId)
        navigation.goBack()
      }

      async function confirmHandler(expenseData){
        if(isEditing){
            expensesCtx.updateExpense(editedExpenseId,expenseData)
            await updateExpense(editedExpenseId,expenseData)
          }else{

              const id = await storeExpense(expenseData)
                expensesCtx.addExpense({...expenseData,id:id})
        }
        navigation.goBack()
      }
    
      function cancelHandler(){
        navigation.goBack()
      }



    return <View style={style.container}>
            <ExpenseForm
                submitButtonLabel={isEditing ? "Update":"Add"}
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
                defaultValues={selectedExpense}
            />
 
            {isEditing && (
                <View style={style.deleteContainer}>
                <IconButton
                    icon="trash"
                    color={GlobalStyles.colors.error500}
                    size={36}
                    onPress={deleteExpenseHandler}
                    />
                </View>
            )}
    </View>
}

export default ManageExpense

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary800
    },

    deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:"center"
    }
})

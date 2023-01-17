

import { useContext,useEffect,useState } from 'react'
import ExpensesOutput from '../components/ExpenseOutput/ExpensesOutput'
import LoadingOverlay from '../components/UI/LoadingOverlay'
import { ExpensesContext } from '../store/expense-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpense } from '../util/http'

function RecentExpense(){

        const [isFetching,setIsFetching] = useState(true)
       const expensesCtx =  useContext(ExpensesContext)
       const recentExpenses = expensesCtx.expenses.filter(expense =>{
        const today = new Date()
        const date7DaysAgo = getDateMinusDays(today,7)
        return expense.date >=date7DaysAgo && expense.date<=today
       })

       useEffect(()=>{
        async function getExpenses(){
         const expenses =    await fetchExpense()
         expensesCtx.setExpense(expenses)
        }
        getExpenses()
        setIsFetching(false)
       },[])

       if(isFetching){
        return <LoadingOverlay/>
       }

    return <ExpensesOutput expensesPeriod="Last 7 days" expenses={recentExpenses}/>
}

export default RecentExpense

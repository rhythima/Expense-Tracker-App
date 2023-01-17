
import { useContext } from 'react'
import ExpensesOutput from '../components/ExpenseOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expense-context'

function AllExpenses(){
        const expensesCtx = useContext(ExpensesContext)
        // console.log(expensesCtx.expenses)
    return <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses}/>
}

export default AllExpenses

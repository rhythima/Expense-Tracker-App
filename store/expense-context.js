
import {createContext,useReducer} from 'react'

const  DUMMY_EXPENSES = [
    {
        id:'e1',
        description:"Movies",
        amount:1000,
        date: new Date('2022-08-17')
    },
    {
        id:'e2',
        description:"Darru Party",
        amount:7000,
        date:new Date('2022-08-10')
    },
    {
        id:"e3",
        description:"Book",
        amount:300,
        date:new Date("2022-05-21")
    },
    {
        id:"e4",
        description:"Online Courses",
        amount:5000,
        date:new Date('2022-07-21')
    },
    {
        id:"e5",
        description:"Shopping",
        amount:15000,
        date:new Date('2022-07-21')
    },
    {
        id:"e6",
        description:"Travelling",
        amount:3600,
        date:new Date('2022-07-21')
    },
    {
        id:"e7",
        description:"Gym",
        amount:12000,
        date:new Date('2022-07-11')
    },
    {
        id:"e8",
        description:"Food and Online ",
        amount:3600,
        date:new Date('2022-08-21')
    },
    {
        id:"e9",
        description:"College Trips ",
        amount:2300,
        date:new Date('2022-08-21')
    },
]

export const ExpensesContext = createContext()

function expensesReducer(state,action){
    switch(action.type){
        case 'ADD':
        return [action.payload,...state]
        case 'SET':
        const inverted = action.payload.reverse()
        return inverted;
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(expense => expense.id === action.payload.id)
            const updatableExpense = state[updatableExpenseIndex]
            const updatedItem = {...updatableExpense,...action.payload.data}
            const updatedExpenses = [...state]
            updatedExpenses[updatableExpenseIndex] = updatedItem
            return updatedExpenses
        case 'DELETE': 
        return state.filter(expense => expense.id !== action.payload)
        default:
            return state
    }
}

function ExpensesContextProvider({children}){
         const [expensesState,dispatch] =    useReducer(expensesReducer,[])
      
         function addExpense(expenseData){
            dispatch({type:"ADD",payload:expenseData})
         }

         function deleteExpense(id){
            dispatch({type:"DELETE",payload:id})
         }

         function updateExpense(id,expenseData){
            dispatch({type:"UPDATE",payload:{id,data:expenseData}})
         }

         function setExpense(expenseData){
            dispatch({type:"SET",payload:expenseData})
         }
       
         const value={
            expenses:expensesState,
            addExpense:addExpense,
            updateExpense:updateExpense,
            deleteExpense:deleteExpense,
            setExpense:setExpense
        }
    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider

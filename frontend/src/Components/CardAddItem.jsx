import { createContext,useReducer,useContext} from "react"

//global state:->global state which one we can change from anywhere
const CartStateContext=createContext()
const CartDispatchContext=createContext()



const reducer=(state,action)=>{
  switch (action.type) {
    case "ADD":
         return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
    case "REMOVE":
        let newArr= [...state]
        newArr.splice(action.index,1)
        return newArr;
   case "UPDATE":
        let arr=[...state]
        arr.find((food,index)=>{
          if(food.id===action.id){
            console.log(food.qty,parseInt(action.qty),action.price+food.price)
            arr[index]={...food,qty:parseInt(action.type) + food.qty,price:action.price+food.price}

          }
          return arr
        })
        return arr
    default:
      console.log("Error in Reducer")
  }

}

const CardAddItem = ({children}) => {
  const [state,dispatch]=useReducer(reducer,[])
  return (
    <div>
      <CartDispatchContext.Provider value={dispatch}>
           <CartStateContext.Provider value={state}>
            {
              children
            }
           </CartStateContext.Provider>
      </CartDispatchContext.Provider>
    </div>
  )
}
export const useCart=()=>useContext(CartStateContext)
export const useDispatchCart=()=>useContext(CartDispatchContext)
export default CardAddItem
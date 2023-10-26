import { createContext,useReducer,useContext} from "react"

//global state:->global state which one we can change from anywhere
const CartStateContext=createContext()
const CartDispatchContext=createContext()



const reducer=(state,action)=>{
  switch (action.type) {
    case "ADD":
      return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
  
    default:
      break;
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
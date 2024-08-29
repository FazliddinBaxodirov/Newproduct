import { ACTIONS } from "./Actions"

const initialState = {
    products:[],
}

export const reducer = (state = initialState ,action) => {
    switch(action.type){
        case ACTIONS.GETDATA:
            return {
                products:[...action.payload]
            }
        case ACTIONS.SEARCH :
            const filteredData = state.products.filter(item => item.title.toLowerCase().includes(action.payload))
            return{
                products : filteredData
            }
        default : 
          return state
    }
}
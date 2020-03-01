import {
  GET_USER_WALLET,
  GET_ALL_TRANSACTIONS,
  GET_CHARGES,
  WALLET_DETAILS,
  WALLET_ERRORS
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case GET_USER_WALLET:
      return {
        ...state,
        userWallet: action.payload[0].data.data,
        walletTransactions: action.payload[1].data.data,
        errors: null
      }
    case GET_ALL_TRANSACTIONS:
      return {
        ...state,
        walletTransactions: action.payload,
        errors: null
      }
    case GET_CHARGES:
      return {
        ...state,
        walletCharges: action.payload,
        errors: null
      }
    case WALLET_DETAILS:
      return {
        ...state,
        walletDetails: action.payload,
        errors: null
      }
    case WALLET_ERRORS:
      return {
        ...state,
        userData: null,
        errors: action.payload
      };
      default: 
        return state
  }
}
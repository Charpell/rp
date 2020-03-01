import React, { useReducer, createContext, useState, useContext, useMemo } from 'react';
import axios from 'axios'
import apiCalls, { getMethod } from '../../utils/axios'
import walletReducer from './walletReducer'

export const WalletContext = createContext(null)

import {
  GET_USER_WALLET,
  GET_ALL_TRANSACTIONS,
  GET_CHARGES,
  WALLET_DETAILS,
  WALLET_ERRORS
} from '../types'

const WalletState = props => {
  const initialState = {
    userWallet: [],
    walletTransactions: [],
    walletCharges: [],
    walletDetails: [],
    errors: []
  }

  const [state, dispatch] = useReducer(walletReducer, initialState)
  const [ loading, setLoading ] = useState(false)


  const getUserWallet = async () => {
    setLoading(true)
    try {
      const result = await Promise.all([getMethod('wallet'), getMethod('wallet/transactions')])
      setLoading(false)
        dispatch({
          type: GET_USER_WALLET,
          payload: result
        })
     
    } catch (error) {
      dispatch({
        type: WALLET_ERRORS,
        payload: error
      })
    }
  }

  const getAllService = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    setLoading(true)
    try {
      const result = await axios('https://rubeepay.herokuapp.com/rbq/v1/services', config)
      setLoading(false)

  
      if (result.data.status === 'success') {
        dispatch({
          type: GET_ALL_SERVICE,
          payload: result.data.data
        })
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const setService = formData => {
    dispatch({
      type: SET_SERVICE,
      payload: formData
    })
  }

  const values = useMemo(() => {
    return {
      userWallet: state.userWallet,
      walletTransactions: state.walletTransactions,
      walletCharges: state.walletCharges,
      walletDetails: state.walletDetails,
      getUserWallet,
      loading,
      state
    }
  })



  return (
    <WalletContext.Provider
      value={values}
    >
      {props.children}
    </WalletContext.Provider>
  )
}

export default WalletState;
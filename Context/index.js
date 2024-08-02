import React, { useState, useContext, createContext, useContext } from 'react';
import { ethers } from 'ethers';
import {
	checkIfWalletConnected,
	connectWallet,
	connectingTOKENCONTRACT,
	getBalance,
	connectingTOKENCONTRACT,
} from '../Utils/index';

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const TOKEN_ICO = 'TOKEN SELL DAPP'
    return(
        <StateContext.Provider value={{TOKEN_ICO}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContextProvider);
import React, { useState, useContext, createContext, useContext } from 'react';
import { ethers } from 'ethers';
import {
	checkIfWalletConnected,
	connectWallet,
	connectingTOKENCONTRACT,
	getBalance,
    connectingTOKENSALECONTRACT
} from '../Utils/index';

const StateContext = createContext()

export const StateProvider = ({ children }) => {
    return(
        <StateContext.Provider value={{}}>
            {children}
        </StateContext.Provider>
    )
}
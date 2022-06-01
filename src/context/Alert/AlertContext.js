import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext()

export const AlertContextProvider = ({ children }) => {

    let initialState = {
        showAlert: false,
        alertMessage: "Default error message",
        alertPosition: 'bottom-center',
        alertPositionCssClasses: 'bottom-0 left-0 mx-auto',
        alertType: 'error'
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const displayAlert = (message, alertType = '', alertPosition = 'bottom-center') => {
        console.log(alertType)
        dispatch({ type: 'DISPLAY_ALERT', payload: { message, alertType, alertPosition } })
        setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
    }

    return (
        <AlertContext.Provider value={{
            showAlert: state.showAlert,
            alertMessage: state.alertMessage,
            alertPositionCssClasses: state.alertPositionCssClasses,
            alertType: state.alertType,
            displayAlert,
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext
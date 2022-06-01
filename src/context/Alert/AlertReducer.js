const AlertReducer = (state, action) => {
    switch(action.type) {
        case 'DISPLAY_ALERT': return ({
            ...state,
            showAlert: true,
            alertMessage: action.payload.message,
            alertType: action.payload.alertType,
            alertPosition: action.payload.alertPosition,
            alertPositionCssClasses: getPosition(action.payload.alertPosition)
        })
        case 'REMOVE_ALERT': return ({
            ...state,
            showAlert: false,
        }) 
        case 'UPDATE_ALERT_POSITION': return ({
            ...state,
            alertMessage: action.payload.position
        }) 
        default: return {
            ...state
        }
    }
}

const getPosition = (pos) => {
    switch(pos) {
        case 'top-left' : return 'top-0 left-0'
        case 'top-right' : return 'top-0 left-full'
        case 'top-center' : return 'top-0 left-0 right-0 mx-auto'
        case 'bottom-left' : return 'bottom-0 left-0'
        case 'bottom-right' : return 'bottom-0 left-full'
        case 'bottom-center' : return 'bottom-0 left-0 right-0 mx-auto'
    }
}

export default AlertReducer
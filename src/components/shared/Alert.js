import { useContext } from 'react'
import AlertContext from '../../context/Alert/AlertContext'
import { ReactComponent as DefaultAlertSVG } from '../../res/img/alert/default.svg'
import { ReactComponent as ErrorAlertSVG } from '../../res/img/alert/error.svg'
import { ReactComponent as WarningAlertSVG } from '../../res/img/alert/warning.svg'
import { ReactComponent as InfoAlertSVG } from '../../res/img/alert/info.svg'
import { ReactComponent as SuccessAlertSVG } from '../../res/img/alert/success.svg'

function Alert() {
    const { showAlert, alertMessage, alertType, alertPositionCssClasses } = useContext(AlertContext)

    const getSVG = () => {
        switch (alertType) {

            case 'error': return <ErrorAlertSVG />
            case 'warning': return <WarningAlertSVG />
            case 'success': return <SuccessAlertSVG />
            case 'info': return <InfoAlertSVG />
            default: return <DefaultAlertSVG />
        }
    }

    return (
        showAlert &&
        <div className={`alert ${'alert-' + alertType} shadow-lg absolute w-fit m-8 ${alertPositionCssClasses}`}>
            <div>
                {getSVG()}
                <span>{alertMessage}</span>
            </div>
        </div>
    )
}

export default Alert
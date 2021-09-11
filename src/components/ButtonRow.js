import { IonRow } from "@ionic/react";
import styles from "./ButtonRow.module.css";
// import styles from "../pages/Home.module.css";

const ButtonRow = props => {

    return (
        <IonRow className={ styles.buttonRow }>
            { props.children }
        </IonRow>
    );
}

export default ButtonRow;
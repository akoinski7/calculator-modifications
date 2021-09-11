import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import styles from "./Menu.module.css";

export const Menu = () => {
    return(
        <IonMenu side="start" contentId="main">
            <IonHeader>
                <IonToolbar classname={styles.menuContainer}>
                    <IonTitle>MENU</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent>
                <IonList>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink="/home" routerDirection="none">
                            <IonLabel>Home</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    {/* <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink="/home" routerDirection="none">
                            <IonLabel>History</IonLabel>
                        </IonItem>
                    </IonMenuToggle> */}
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink="/customize" routerDirection="none">
                            <IonLabel>Customize</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    {/* <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink="/home" routerDirection="none">
                            <IonLabel>Conversions</IonLabel>
                        </IonItem>
                    </IonMenuToggle> */}
                </IonList>
            </IonContent>
        </IonMenu>





    );
}
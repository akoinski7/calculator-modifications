import { IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonLabel , IonButtons , IonSelectOption ,
 IonListHeader, IonSelect , IonItemDivider} from "@ionic/react";
import React , {useState} from "react";
import { NavButtons } from "../components/NavButtons";


const Customize = () => {


    const [theme, setTheme] = useState("classic");

    const switchTheme = (themeName) => {
        setTheme(themeName);
        switch(themeName){
            case "classic":
                document.documentElement.setAttribute("data-theme", "root");
                break;
            case "dark":
                document.documentElement.setAttribute("data-theme", "dark");
                break;
            case "spooky":
                document.documentElement.setAttribute("data-theme", "spooky");
                break;
        }

    }


    return(
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>CUSTOMIZE</IonTitle>
                    {/* <IonButton routerLink={"/home"}>Home </IonButton>
                    <IonButton routerLink={"/customize"}>Customize </IonButton> */}
                    <IonButtons slot="start">
                        <NavButtons />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonListHeader>
                        <IonLabel>
                            Customization
                        </IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonLabel>Themes</IonLabel>
                        <IonSelect value={theme} placeholder="Select One" onIonChange={e => switchTheme(e.detail.value)}>
                            <IonSelectOption value="classic">Classic</IonSelectOption>
                            <IonSelectOption value="dark">Dark</IonSelectOption>
                            <IonSelectOption value="spooky">Spooky</IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Font</IonLabel>
                        <IonSelect okText="Okay" cancelText="Dismiss">
                            <IonSelectOption value="brown">Brown</IonSelectOption>
                            <IonSelectOption value="blonde">Blonde</IonSelectOption>
                            <IonSelectOption value="black">Black</IonSelectOption>
                            <IonSelectOption value="red">Red</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );



};

export default Customize;
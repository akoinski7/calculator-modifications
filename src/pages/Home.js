import { IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonMenu , IonToolbar , IonTitle , IonButtons , IonList, IonItem , IonButton , IonMenuButton , IonRouterOutlet} from '@ionic/react';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';
import styles from "./Home.module.css";

import { NavButtons } from "../components/NavButtons";
import { buttons } from "../utils/Buttons";
import { theme } from "../pages/Customize";

const Home = () => {
	//My code
	const [ calcHistory, setCalcHistory ] = useState("");
	//End my code
	const [ showTitle, setShowTitle ] = useState("_______");
	const [ sum, setSum ] = useState("0");
	const [ sumHistory, setSumHistory ] = useState("Ionic Calculator");

	const handleClick = (e, operator) => {

		const tempSumHistory = sumHistory.replace("Ionic Calculator", "");

		if (operator === "=") {

			calculate();
			console.log("Breakpoint 3: " + sum);
			//setCalcHistory(calcHistory + sumHistory + '\n' + sum);//+ "\n" + sum + "\n");
		} else if (operator === "C") {

			reset();
		} else if (operator === "Del") {
			
			backspace();
		} else {
			
			setSumHistory(tempSumHistory + operator);

			//e.target.classList.add("animate__headShake");

			setTimeout(() => {
				e.target.classList.remove("animate__headShake");
			}, 500);
		}
	}

	//This is the part that automatically updates stuff. Makes it feel a bit like the = button doesn't do anything so I'll keep auto update off for now.
	// useEffect(() => {

	// 	calculate();
	// }, [sumHistory]);

	const calculate = () => {

		try {

			// eslint-disable-next-line no-eval
			console.log("breakpoint 1: " + sum);
			setSum(eval(sumHistory).length > 5 ? eval(sumHistory).toFixed(4) : eval(sumHistory));
			//setCalcHistory(calcHistory + sumHistory + '\n' + sum);//+ "\n" + sum + "\n");
			setShowTitle("Ionic Calculator");
			console.log("breakpoint 2: " + sum);
		} catch (e) {


		}
	}

	const reset = () => {

		setSumHistory("Ionic Calculator");
		setSum("0");
		setShowTitle("_______");
	}

	const backspace = () => {

		const tempSum = sumHistory.substr(0, sumHistory.length -1);
		setSumHistory(tempSum);
	}

	return (



		<IonPage>
			<IonHeader>
				<IonToolbar className={ styles.headerContainer } >
					<IonTitle>HOME</IonTitle>
					{/* <IonButton routerLink={"/home"}>Home </IonButton>
                    <IonButton routerLink={"/customize"}>Customize </IonButton> */}
					<IonButtons slot="start">
						<NavButtons/>
					</IonButtons>
				</IonToolbar>	
			</IonHeader>

			<IonContent fullscreen>

				<div className={ styles.sumContainer }>

					{ showTitle && <h4>{ showTitle }</h4> }
					<p>{ sumHistory }</p>
					<h1 className="animate__animated animate__headShake">{ sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</h1>
				</div>
			</IonContent>

			<IonFooter className={ styles.calculatorContainer }>
				<IonGrid className="ion-text-center ion-justify-content-center">

					{ buttons.map((buttonRow, index) => {

						return (
							<ButtonRow key={ index }>
								{ buttonRow.map(button => {

									return <Button key={ button.value } value={ button.value } special={ button.special } clickEvent={ handleClick } />;
								})}
							</ButtonRow>
						);
					})}
				</IonGrid>
			</IonFooter>


		</IonPage>
	);
};

export default Home;

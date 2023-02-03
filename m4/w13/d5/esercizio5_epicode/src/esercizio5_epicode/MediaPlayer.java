package esercizio5_epicode;

import java.util.Scanner;

public class MediaPlayer {

	// creo i 5 elementi vuoti e li metto in un array
	static ElementoMultimediale e1 = null;
	static ElementoMultimediale e2 = null;
	static ElementoMultimediale e3 = null;
	static ElementoMultimediale e4 = null;
	static ElementoMultimediale e5 = null;
	static ElementoMultimediale arr[] = { e1, e2, e3, e4, e5 };

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		System.out.println("Benvenuto utente, ti chiedo di inizializzare 5 elementi multimediali");

		// ciclo rapido per richiedere all'utente il tipo di Contenuto Multimediale che
		// vuole creare e in seguito i dati necessari (ho deciso di limitare i valori
		// che è possibile ricevere di durata,volume,luminosita in un range da 1-10, per
		// bellezza nel caso di volume e luminosità, per utilità nel caso di durata,
		// insomma sarebbe bruttino trovarsi 300 righe di stampa in console, oltre a
		// questo non è possibile lasciare vuoto il campo titolo), in caso
		// inserisca un tipo non
		// concesso gli viene mostrato un
		// messaggio di errore e si torna a richiedere il tipo, finito questo ciclo
		// avremo un array di 5 elementi corretti
		for (int i = 0; i < 5; i++) {
			System.out.println("");
			System.out.println("Elemento numero:" + (i + 1));
			System.out.println("Scegliere il tipo (1 per immagine, 2 per audio o 3 per video)");

			int scelta = Integer.parseInt(scan.nextLine());

			if (scelta == 1) {

				System.out.println("");
				System.out.println("Devi fornirmi un Titolo e un Valore di luminosità(1-10)");
				System.out.println("");
				System.out.println("Titolo: ");
				String titolo = scan.nextLine();
				if (titolo == "") {
					System.out.println("Titolo necessario");
					i--;
					continue;
				}
				System.out.println("Luminosità(1-10): ");
				int lum = Integer.parseInt(scan.nextLine());
				if (lum < 1 || lum > 10) {
					System.out.println("valore di luminosità non consentito");
					i--;
					continue;
				}

				arr[i] = new Image(titolo, lum);

			} else if (scelta == 2) {
				System.out.println("");
				System.out.println("Devi fornirmi un Titolo, una Durata(1-10) e un Volume(1-10)");
				System.out.println("");
				System.out.println("Titolo: ");
				String titolo = scan.nextLine();
				if (titolo == "") {
					System.out.println("Titolo necessario");
					i--;
					continue;
				}
				System.out.println("Durata(1-10): ");
				int dur = Integer.parseInt(scan.nextLine());
				if (dur < 1 || dur > 10) {
					System.out.println("valore di luminosità non consentito");
					i--;
					continue;
				}
				System.out.println("Volume(1-10): ");
				int vol = Integer.parseInt(scan.nextLine());
				if (vol < 1 || vol > 10) {
					System.out.println("valore di luminosità non consentito");
					i--;
					continue;
				}

				arr[i] = new Audio(titolo, dur, vol);

			} else if (scelta == 3) {

				System.out.println("");
				System.out.println("Devi fornirmi un Titolo, una Durata(1-10), un Volume(1-10) e una Luminosità(1-10)");
				System.out.println("");
				System.out.println("Titolo: ");
				String titolo = scan.nextLine();
				if (titolo == "") {
					System.out.println("Titolo necessario");
					i--;
					continue;
				}
				System.out.println("Durata(1-10): ");
				int dur = Integer.parseInt(scan.nextLine());
				if (dur < 1 || dur > 10) {
					System.out.println("valore di luminosità non consentito");
					i--;
					continue;
				}
				System.out.println("Volume(1-10): ");
				int vol = Integer.parseInt(scan.nextLine());
				if (vol < 1 || vol > 10) {
					System.out.println("valore di luminosità non consentito");
					i--;
					continue;
				}
				System.out.println("Luminosità(1-10): ");
				int lum = Integer.parseInt(scan.nextLine());
				if (lum < 1 || lum > 10) {
					System.out.println("valore di luminosità non consentito");
					i--;
					continue;
				}

				arr[i] = new Video(titolo, dur, lum, vol);

			} else {
				System.out.println("errore, inserire un valore permesso");
				i--;
			}

		}
		inizia();
	}

	public static void inizia() {

		Scanner scan = new Scanner(System.in);
		boolean daje = true;
		while (daje) {
			System.out.println("");
			System.out
					.println("Per visualizzare un elemento del Lettore inserire la sua posizione (1-5), 0 per uscire");
			int scelta = Integer.parseInt(scan.nextLine());
			System.out.println("");

			// chiedo all'utente quale elemento mostrare, una volta scelto l'elemento
			// controllo giusto se si tratta di una immagine tramite le variabil
			// ControlloVolume e ControlloLuminosita, nel caso in cui lo sia allora uso il
			// metodo show, in caso
			// contrario posso usare play, inoltre uso queste variabili per capire se
			// mostrare all'utente la possibilità di aumentare o diminuire volume e/o
			// luminosità, nel caso in cui l'utente cerchi di aumentare una luminosità al
			// max o di dimuirne una al minimo gli viene specificato in console di aver
			// raggiunto il minimo/massimo, ho anche qui gestito il caso in cui non sia
			// stato
			// inserito un valore corretto tramite un messaggio di errore e il ciclo
			// continuerà comunque
			if (scelta == 0) {
				System.out.println("Uscita...");
				daje = false;
			} else if (scelta == 1) {
				System.out.println("hai selezionato l'elemento numero: 1");
				if (arr[0].getControlloVolume() == 1) {
					if (arr[0].getControlloLuminosita() == 1) {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						System.out.println("aumentare la luminosità (4), abbassare la luminosità (5)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[0].play();
							break;
						case 2:
							arr[0].alzaVolume();
							break;
						case 3:
							arr[0].abbassaVolume();
							break;
						case 4:
							arr[0].alzaLuminosita();
							break;
						case 5:
							arr[0].abbassaLuminosita();
						}
					} else {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[0].play();
							break;
						case 2:
							arr[0].alzaVolume();
							break;
						case 3:
							arr[0].abbassaVolume();
							break;
						}
					}
				} else {
					System.out.println("vuoi: mostrare immagine(1)");
					System.out.println("aumentare la luminosita (2), abbassare la luminosita (3)");
					int controllomom = Integer.parseInt(scan.nextLine());
					switch (controllomom) {
					case 1:
						arr[0].show();
						break;
					case 2:
						arr[0].alzaLuminosita();
						break;
					case 3:
						arr[0].abbassaLuminosita();
						break;
					}
				}
			} else if (scelta == 2) {
				System.out.println("hai selezionato l'elemento numero: 2");
				if (arr[1].getControlloVolume() == 1) {
					if (arr[1].getControlloLuminosita() == 1) {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						System.out.println("aumentare la luminosità (4), abbassare la luminosità (5)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[1].play();
							break;
						case 2:
							arr[1].alzaVolume();
							break;
						case 3:
							arr[1].abbassaVolume();
							break;
						case 4:
							arr[1].alzaLuminosita();
							break;
						case 5:
							arr[1].abbassaLuminosita();
						}
					} else {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[1].play();
							break;
						case 2:
							arr[1].alzaVolume();
							break;
						case 3:
							arr[1].abbassaVolume();
							break;
						}
					}
				} else {
					System.out.println("vuoi: mostrare immagine(1)");
					System.out.println("aumentare la luminosita (2), abbassare la luminosita (3)");
					int controllomom = Integer.parseInt(scan.nextLine());
					switch (controllomom) {
					case 1:
						arr[1].show();
						break;
					case 2:
						arr[1].alzaLuminosita();
						break;
					case 3:
						arr[1].abbassaLuminosita();
						break;
					}
				}
			} else if (scelta == 3) {
				System.out.println("hai selezionato l'elemento numero: 3");
				if (arr[2].getControlloVolume() == 1) {
					if (arr[2].getControlloLuminosita() == 1) {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						System.out.println("aumentare la luminosità (4), abbassare la luminosità (5)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[2].play();
							break;
						case 2:
							arr[2].alzaVolume();
							break;
						case 3:
							arr[2].abbassaVolume();
							break;
						case 4:
							arr[2].alzaLuminosita();
							break;
						case 5:
							arr[2].abbassaLuminosita();
						}
					} else {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[2].play();
							break;
						case 2:
							arr[2].alzaVolume();
							break;
						case 3:
							arr[2].abbassaVolume();
							break;
						}
					}
				} else {
					System.out.println("vuoi: mostrare immagine(1)");
					System.out.println("aumentare la luminosita (2), abbassare la luminosita (3)");
					int controllomom = Integer.parseInt(scan.nextLine());
					switch (controllomom) {
					case 1:
						arr[2].show();
						break;
					case 2:
						arr[2].alzaLuminosita();
						break;
					case 3:
						arr[2].abbassaLuminosita();
						break;
					}
				}
			} else if (scelta == 4) {
				System.out.println("hai selezionato l'elemento numero: 4");
				if (arr[3].getControlloVolume() == 1) {
					if (arr[3].getControlloLuminosita() == 1) {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						System.out.println("aumentare la luminosità (4), abbassare la luminosità (5)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[3].play();
							break;
						case 2:
							arr[3].alzaVolume();
							break;
						case 3:
							arr[3].abbassaVolume();
							break;
						case 4:
							arr[3].alzaLuminosita();
							break;
						case 5:
							arr[3].abbassaLuminosita();
						}
					} else {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[3].play();
							break;
						case 2:
							arr[3].alzaVolume();
							break;
						case 3:
							arr[3].abbassaVolume();
							break;
						}
					}
				} else {
					System.out.println("vuoi: mostrare immagine(1)");
					System.out.println("aumentare la luminosita (2), abbassare la luminosita (3)");
					int controllomom = Integer.parseInt(scan.nextLine());
					switch (controllomom) {
					case 1:
						arr[3].show();
						break;
					case 2:
						arr[3].alzaLuminosita();
						break;
					case 3:
						arr[3].abbassaLuminosita();
						break;
					}
				}
			} else if (scelta == 5) {
				System.out.println("hai selezionato l'elemento numero: 5");
				if (arr[4].getControlloVolume() == 1) {
					if (arr[4].getControlloLuminosita() == 1) {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						System.out.println("aumentare la luminosità (4), abbassare la luminosità (5)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[4].play();
							break;
						case 2:
							arr[4].alzaVolume();
							break;
						case 3:
							arr[4].abbassaVolume();
							break;
						case 4:
							arr[4].alzaLuminosita();
							break;
						case 5:
							arr[4].abbassaLuminosita();
						}
					} else {
						System.out.println("vuoi: mettere play(1)");
						System.out.println("aumentare il volume (2), abbassare il volume (3)");
						int controllomom = Integer.parseInt(scan.nextLine());
						switch (controllomom) {
						case 1:
							arr[4].play();
							break;
						case 2:
							arr[4].alzaVolume();
							break;
						case 3:
							arr[4].abbassaVolume();
							break;
						}
					}
				} else {
					System.out.println("vuoi: mostrare immagine(1)");
					System.out.println("aumentare la luminosita (2), abbassare la luminosita (3)");
					int controllomom = Integer.parseInt(scan.nextLine());
					switch (controllomom) {
					case 1:
						arr[4].show();
						break;
					case 2:
						arr[4].alzaLuminosita();
						break;
					case 3:
						arr[4].abbassaLuminosita();
						break;
					}
				}
			} else {
				System.out.println("valore inserito non corretto, inserisci un valore corretto");
			}
		}
		// voglio fare una piccola precisazione, dal momento che nel main gli elementi
		// del mio array li ho inizializzati come "ElementoMultimediale" ho dovuto
		// aggiungere alla classe astratta i nomi dei metodi che avrei usato nelle
		// classi concrete che la estenderanno, questo perchè io so che arriverò alla
		// seconda serie di comandi avendo un array di elementi "Audio, Image o Video"
		// ma per il compilatore potrei arrivarci con ancora degli degli elementi
		// ElementoMultimediale, quindi per evitare messaggi di errore aggiungo i metodi
		// anche nella classe astratta, di fatto una volta arrivato a inizia() nel mio
		// array non ho più alcun elemento di quella classe astratta, però così evito
		// errori
		// chiedo veramente scusa per questi ragionamenti intricati e il mal di testa
		// che farà venire una correzione di questo codice, ho cercato di spiegare il
		// più possibile ad ogni passo e sono abbastanza soddisfatto del risultato,
		// quello che ho fatto di extra è inserire i comandi di alza e bassa volume e/o
		// luminosità dove necessari e di inserire ulteriori controlli sugli input
		// forniti dall'utente ovunque fosse possibile, spero sia un risultato piacevole
	}
}

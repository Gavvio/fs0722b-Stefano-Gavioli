package esercizio5_epicode;

public class Image extends ElementoMultimediale implements Luminosita {

	// Attributi
	private int luminosita;
	private int controlloVolume = 0;
	private int controlloLuminosita = 1;

	// Costruttori
	public Image(String titolo, int luminosita) {
		this.titolo = titolo;
		this.luminosita = luminosita;
	}

	// Metodi
	public void alzaLuminosita() {
		if (this.luminosita != 10) {
			this.luminosita++;
		} else {
			System.out.println("luminosita al massimo");
		}
	}

	public void abbassaLuminosita() {
		if (this.luminosita != 1) {
			this.luminosita--;
		} else {
			System.out.println("luminosita al minimo");
		}
	}

	public void show() {
		String output = "";
		for (int i = 0; i < this.luminosita; i++) {
			output += "*";
		}
		System.out.println(this.titolo + " " + output);
		System.out.println("");
	}

	// Getter e Setter
	public int getLuminosita() {
		return luminosita;
	}

	public int getControlloVolume() {
		return controlloVolume;
	}

	public int getControlloLuminosita() {
		return controlloLuminosita;
	}

}

package esercizio5_epicode;

public class Video extends ElementoMultimediale implements Volume, Luminosita {

	// Attributi
	private int durata;
	private int luminosita;
	private int volume;
	private int controlloVolume = 1;
	private int controlloLuminosita = 1;

	// Costruttori
	public Video(String titolo, int durata, int luminosita, int volume) {
		this.titolo = titolo;
		this.durata = durata;
		this.luminosita = luminosita;
		this.volume = volume;
	}

	// Metodi
	public void alzaVolume() {
		if (this.volume != 10) {
			this.volume++;
		} else {
			System.out.println("volume al massimo");
		}
	}

	public void abbassaVolume() {
		if (this.volume != 1) {
			this.volume--;
		} else {
			System.out.println("volume al minimo");
		}
	}

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

	public void play() {
		String output1 = "";
		String output2 = "";
		for (int a = 0; a < this.luminosita; a++) {
			output1 += "*";
		}
		for (int b = 0; b < this.volume; b++) {
			output2 += "!";
		}
		for (int i = 0; i < this.durata; i++) {
			System.out.println(this.titolo + " " + output1 + " " + output2);
		}
		System.out.println("");
	}

	// Getter e Setter
	public int getDurata() {
		return durata;
	}

	public int getLuminosita() {
		return luminosita;
	}

	public int getVolume() {
		return volume;
	}

	public int getControlloVolume() {
		return controlloVolume;
	}

	public int getControlloLuminosita() {
		return controlloLuminosita;
	}

}

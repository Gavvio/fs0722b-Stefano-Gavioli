package esercizio5_epicode;

public class Audio extends ElementoMultimediale implements Volume {

	// Attributi
	private int durata;
	private int volume;
	private int controlloVolume = 1;
	private int controlloLuminosita = 0;

	// Costruttori
	public Audio(String titolo, int durata, int volume) {
		this.titolo = titolo;
		this.durata = durata;
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

	public void play() {
		String output = "";
		for (int a = 0; a < this.volume; a++) {
			output += "!";
		}
		for (int i = 0; i < this.durata; i++) {
			System.out.println(this.titolo + " " + output);
		}
		System.out.println("");

	}

	// Getter e Setter
	public int getDurata() {
		return durata;
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

package esercizio5_epicode;

public abstract class ElementoMultimediale {

	String titolo;

	// ho dovuto mettere nella classe astratta questi metodi nonostante non vengano
	// davvero usati per aggirare un controllo del compilatore (spiego meglio in
	// MediaPLayer)
	public void play() {
	};

	public void show() {
	};

	public int getControlloVolume() {
		return 1;
	};

	public int getControlloLuminosita() {
		return 1;
	};

	public void alzaVolume() {

	};

	public void abbassaVolume() {

	};

	public void alzaLuminosita() {

	};

	public void abbassaLuminosita() {

	};
}

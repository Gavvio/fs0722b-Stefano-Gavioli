package catalogo_bibliotecario;

public class Rivista extends Elemento {

	private Periodicità periodicità;

	public Rivista(Periodicità periodicità, int codiceISBN, String titolo, int anno, int pagine) {
		super(codiceISBN, titolo, anno, pagine);
		this.periodicità = periodicità;
	}

	public Periodicità getPeriodicità() {
		return this.periodicità;
	}

	public void setPeriodicità(Periodicità periodicità) {
		this.periodicità = periodicità;
	}

}

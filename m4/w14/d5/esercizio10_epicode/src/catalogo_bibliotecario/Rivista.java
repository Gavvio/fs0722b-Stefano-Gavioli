package catalogo_bibliotecario;

public class Rivista extends Elemento {

	private Periodicit� periodicit�;

	public Rivista(Periodicit� periodicit�, int codiceISBN, String titolo, int anno, int pagine) {
		super(codiceISBN, titolo, anno, pagine);
		this.periodicit� = periodicit�;
	}

	public Periodicit� getPeriodicit�() {
		return this.periodicit�;
	}

	public void setPeriodicit�(Periodicit� periodicit�) {
		this.periodicit� = periodicit�;
	}

}

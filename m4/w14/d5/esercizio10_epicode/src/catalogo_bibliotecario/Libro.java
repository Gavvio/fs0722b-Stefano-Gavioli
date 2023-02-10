package catalogo_bibliotecario;

public class Libro extends Elemento {

	private String autore;
	private String genere;

	public Libro(String autore, String genere, int codiceISBN, String titolo, int anno, int pagine) {
		super(codiceISBN, titolo, anno, pagine);
		this.autore = autore;
		this.genere = genere;
	}

	public String getAutore() {
		return autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}

	public String getGenere() {
		return genere;
	}

	public void setGenere(String genere) {
		this.genere = genere;
	}

}

package catalogo_bibliotecario;

public abstract class Elemento {
	protected int codiceISBN;
	protected String titolo;
	protected int anno;
	protected int pagine;

	public Elemento(int codiceISBN, String titolo, int anno, int pagine) {
		this.codiceISBN = codiceISBN;
		this.titolo = titolo;
		this.anno = anno;
		this.pagine = pagine;
	}

	public int getCodiceISBN() {
		return codiceISBN;
	}

	public void setCodiceISBN(int codiceISBN) {
		this.codiceISBN = codiceISBN;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public int getAnno() {
		return anno;
	}

	public void setAnno(int anno) {
		this.anno = anno;
	}

	public int getPagine() {
		return pagine;
	}

	public void setPagine(int pagine) {
		this.pagine = pagine;
	}

	public String getAutore() {
		return "";
	}

}

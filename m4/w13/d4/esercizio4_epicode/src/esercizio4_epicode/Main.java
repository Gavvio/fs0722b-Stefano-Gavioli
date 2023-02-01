package esercizio4_epicode;

public class Main {

	public static void main(String[] args) {
		Dipendente damiano = new Dipendente(666, Dipartimento.VENDITE);
		damiano.stampaDatiDipendente();
		damiano.promuovi();
		damiano.stampaDatiDipendente();

		System.out.println(calcolaPaga(damiano));
		System.out.println(calcolaPaga(damiano, 15));
	}

	public static double calcolaPaga(Dipendente dipendente) {
		return dipendente.getStipendio();
	}

	public static double calcolaPaga(Dipendente dipendente, int ore) {
		return dipendente.getStipendio() + dipendente.getImportoOrarioStraordinario() * ore;
	}

}

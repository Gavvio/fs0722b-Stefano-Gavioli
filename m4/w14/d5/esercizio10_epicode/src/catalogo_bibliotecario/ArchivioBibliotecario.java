package catalogo_bibliotecario;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ArchivioBibliotecario {

	private static final Logger logger = LoggerFactory.getLogger(ArchivioBibliotecario.class);
	private static File file = new File("dir/archivio.txt");

	public static void avvio() throws IOException {
		Scanner scan = new Scanner(System.in);
		logger.info("Benvenuto nell'archivio della biblioteca");
		boolean controllo = true;
		List<Elemento> archivio = new ArrayList<Elemento>();
		while (controllo) {
			try {
				System.out.println("");
				logger.info("ELENCO COMANDI UTILI: ");
				logger.info("Esci (0)");
				logger.info("Aggiungi elemento (1)");
				logger.info("Rimuove lemento tramite codice (2)");
				logger.info("cerca tramite codice (3)");
				logger.info("cerca per anno (4)");
				logger.info("cerca per autore (5)");
				logger.info("salva in locale(6)");
				logger.info("carica da locale (7)");
				int risposta = Integer.parseInt(scan.nextLine());

				switch (risposta) {
				case 0:
					controllo = false;
					logger.info("Uscito correttamente");
					break;
				case 1:
					aggiungi(archivio);
					break;
				case 2:
					logger.info("fornisci il codice da cancellare");
					int canc = Integer.parseInt(scan.nextLine());
					rimuovi(archivio, canc);
					break;
				case 3:
					logger.info("fornisci il codice dell'elemento da cercare");
					int codice = Integer.parseInt(scan.nextLine());
					cercaPerCodice(archivio, codice);
					break;
				case 4:
					logger.info("fornisci l'anno per la ricerca");
					int anno = Integer.parseInt(scan.nextLine());
					cercaPerAnno(archivio, anno);
					break;
				case 5:
					logger.info("fornisci l'autore per la ricerca");
					String autore = scan.nextLine();
					cercaPerAutore(archivio, autore);
					break;
				case 6:
					salvaInLocale(archivio);
					logger.info("Archivio salvato in locale");
					System.out.println("");
					break;
				case 7:
					archivio = caricaDaLocale();
					logger.info("Archivio caricato correttamente e disponibile");
					break;
				default:
					logger.info("comando sbagliato, usare uno dei comandi concessi");
					System.out.println("");
				}
			} catch (NumberFormatException e) {
				logger.info("comando sbagliato, usare uno dei comandi concessi");
				System.out.println("");
			}
		}
	}

	public static void aggiungi(List<Elemento> lista) {
		Scanner scan = new Scanner(System.in);
		logger.info("vuoi aggiungere un libro (1) o una rivista (2)?");
		int scelta = Integer.parseInt(scan.nextLine());
		switch (scelta) {
		case 1:
			logger.info("scrivi il codice libro:");
			int codice = Integer.parseInt(scan.nextLine());
			logger.info("scrivi il titolo:");
			String titolo = scan.nextLine();
			logger.info("scrivi l'anno di pubblicazione:");
			int anno = Integer.parseInt(scan.nextLine());
			logger.info("scrivi il numero di pagine:");
			int pagine = Integer.parseInt(scan.nextLine());
			logger.info("scrivi l'autore");
			String autore = scan.nextLine();
			logger.info("scrivi il genere");
			String genere = scan.nextLine();
			Libro libro = new Libro(autore, genere, codice, titolo, anno, pagine);
			lista.add(libro);
			logger.info("Libro aggiunto correttamente");
			break;
		case 2:
			Periodicità per = Periodicità.SETTIMANALE;
			logger.info("scegli la periodicità della rivista:");
			logger.info("Settimanale(1),Mensile(2),Semestrale(3)");
			int scelta2 = Integer.parseInt(scan.nextLine());
			switch (scelta2) {
			case 1:
				per = Periodicità.SETTIMANALE;
				break;
			case 2:
				per = Periodicità.MENSILE;
				break;
			case 3:
				per = Periodicità.SEMESTRALE;
				break;
			default:
				logger.info("errore, necessario selezionare un tipo di periodicità corretto");
			}
			logger.info("scrivi il codice rivista:");
			int codiceRivista = Integer.parseInt(scan.nextLine());
			logger.info("scrivi il titolo della rivista:");
			String titoloRivista = scan.nextLine();
			logger.info("scrivi l'anno di pubblicazione:");
			int annoRivista = Integer.parseInt(scan.nextLine());
			logger.info("scrivi il numero di pagine:");
			int pagineRivista = Integer.parseInt(scan.nextLine());
			Rivista rivista = new Rivista(per, codiceRivista, titoloRivista, annoRivista, pagineRivista);
			lista.add(rivista);
			logger.info("Rivista aggiunta correttamente");
			break;
		default:
			logger.info("comando sbagliato, usare uno dei comandi concessi");
			System.out.println("");
		}
	}

	public static void rimuovi(List<Elemento> lista, int codice) {
		boolean trovato = false;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getCodiceISBN() == codice) {
				Stream<Elemento> streamLista = lista.stream().filter(element -> element.getCodiceISBN() != codice);
				lista = streamLista.collect(Collectors.toList());
				logger.info("elemento rimosso correttamente");
				trovato = true;
			}
		}
		if (!trovato) {
			logger.info("elemento inesistente");
		}
	}

	public static void cercaPerCodice(List<Elemento> lista, int codice) {
		Stream<Elemento> streamLista = lista.stream().filter(element -> element.getCodiceISBN() == codice);
		List<Elemento> listamom = new ArrayList<Elemento>();
		listamom = streamLista.collect(Collectors.toList());
		if (!listamom.isEmpty()) {
			logger.info("ecco il risultato:");
			System.out.println(listamom.get(0).titolo);
		} else {
			logger.info("elemento non trovato");
		}

	}

	public static void cercaPerAnno(List<Elemento> lista, int anno) {
		Stream<Elemento> streamLista = lista.stream().filter(element -> element.getAnno() == anno);
		List<Elemento> listamom = new ArrayList<Elemento>();
		listamom = streamLista.collect(Collectors.toList());
		if (!listamom.isEmpty()) {
			logger.info("ecco il risultato:");
			listamom.forEach(elem -> System.out.println(elem.getTitolo()));
		} else {
			logger.info("nessun elemento trovato");
		}
	}

	public static void cercaPerAutore(List<Elemento> lista, String autore) {
		Stream<Elemento> streamLista = lista.stream().filter(element -> (element.getAutore().equals(autore)));
		List<Elemento> listamom = new ArrayList<Elemento>();
		listamom = streamLista.collect(Collectors.toList());
		if (!listamom.isEmpty()) {
			logger.info("ecco il risultato:");
			listamom.forEach(elem -> System.out.println(elem.getTitolo()));
		} else {
			logger.info("nessun elemento trovato");
		}
	}

	public static void salvaInLocale(List<Elemento> lista) throws IOException {
		String daStampare = "";
		for (int i = 0; i < lista.size(); i++) {

			if (lista.get(i) instanceof Libro) {
				Libro libromom = (Libro) lista.get(i);
				daStampare += "libro";
				daStampare += "#";
				daStampare += libromom.getAutore();
				daStampare += "#";
				daStampare += libromom.getGenere();
				daStampare += "#";
				daStampare += Integer.toString(lista.get(i).getCodiceISBN());
				daStampare += "#";
				daStampare += lista.get(i).getTitolo();
				daStampare += "#";
				daStampare += Integer.toString(lista.get(i).getAnno());
				daStampare += "#";
				daStampare += Integer.toString(lista.get(i).getPagine());
				daStampare += "#";
			} else {
				Rivista rivistamom = (Rivista) lista.get(i);
				daStampare += "rivista";
				daStampare += "#";
				if (rivistamom.getPeriodicità() == Periodicità.SETTIMANALE) {
					daStampare += "settimanale";
				} else if (rivistamom.getPeriodicità() == Periodicità.MENSILE) {
					daStampare += "mensile";
				} else {
					daStampare += "semestrale";
				}
				daStampare += "#";
				daStampare += Integer.toString(lista.get(i).getCodiceISBN());
				daStampare += "#";
				daStampare += lista.get(i).getTitolo();
				daStampare += "#";
				daStampare += Integer.toString(lista.get(i).getAnno());
				daStampare += "#";
				daStampare += Integer.toString(lista.get(i).getPagine());
				daStampare += "#";
			}
		}
		FileUtils.writeStringToFile(file, daStampare, "UTF-8");
	}

	public static List<Elemento> caricaDaLocale() throws IOException {
		List<Elemento> lista = new ArrayList<Elemento>();
		String letto = FileUtils.readFileToString(file, "UTF-8");
		String array[] = letto.split("#");
		for (int i = 0; i < array.length;) {
			if (array[i].equalsIgnoreCase("libro")) {
				String autore = array[i + 1];
				String genere = array[i + 2];
				int codice = Integer.parseInt(array[i + 3]);
				String titolo = array[i + 4];
				int anno = Integer.parseInt(array[i + 5]);
				int pagine = Integer.parseInt(array[i + 6]);
				Libro libro = new Libro(autore, genere, codice, titolo, anno, pagine);
				lista.add(libro);
				i += 7;
			} else {
				Periodicità per = Periodicità.SETTIMANALE;
				if (array[i + 1] == "settimanale") {
					per = Periodicità.SETTIMANALE;
				} else if (array[i + 1] == "mensile") {
					per = Periodicità.MENSILE;
				} else {
					per = Periodicità.SEMESTRALE;
				}
				int codice = Integer.parseInt(array[i + 2]);
				String titolo = array[i + 3];
				int anno = Integer.parseInt(array[i + 4]);
				int pagine = Integer.parseInt(array[i + 5]);
				Rivista rivista = new Rivista(per, codice, titolo, anno, pagine);
				lista.add(rivista);
				i += 6;
			}
		}
		return lista;
	}

	public static void main(String[] args) throws IOException {
		avvio();
	}

}

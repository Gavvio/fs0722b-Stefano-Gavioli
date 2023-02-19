package libreria_finale;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import models.Elemento;
import models.Libro;
import models.Prestito;
import models.Rivista;
import models.Utente;
import utils.JpaUtils;
import utils.periodicità;
import DAO.ElementoDAO;
import DAO.LibroDAO;
import DAO.PrestitoDAO;
import DAO.RivistaDAO;
import DAO.UtenteDAO;

public class MainGestioneLibreria {

	static EntityManager em = JpaUtils.getEntityManagerFactory().createEntityManager();
	static ElementoDAO elementoDAO = new ElementoDAO();
	static PrestitoDAO prestitoDAO = new PrestitoDAO();
	static UtenteDAO utenteDAO = new UtenteDAO();

	public static void inizio() throws IOException {
		Scanner scan = new Scanner(System.in);
		System.out.println("Benvenuto nell'archivio della biblioteca");
		boolean controllo = true;
		while (controllo) {
			try {
				System.out.println("");
				System.out.println("ELENCO COMANDI UTILI: ");
				System.out.println("Esci (0)");
				System.out.println("Aggiungi elemento (1)");
				System.out.println("Rimuovi elemento tramite codice (2)");
				System.out.println("cerca tramite codice (3)");
				System.out.println("cerca per anno pubblicazione (4)");
				System.out.println("cerca per autore (5)");
				System.out.println("cerca per titolo (6)");
				System.out.println("cerca elementi in prestito data tessera utente (7)");
				System.out.println("cerca prestiti scaduti e non restituiti (8)");
				int risposta = Integer.parseInt(scan.nextLine());

				switch (risposta) {
				case 0:
					controllo = false;
					em.close();
					System.out.println("Uscito correttamente");
					break;
				case 1:
					aggiungi();
					break;
				case 2:
					System.out.println("fornisci il codice da cancellare");
					Long canc = Long.parseLong(scan.nextLine());
					rimuovi(canc);
					break;
				case 3:
					System.out.println("fornisci il codice dell'elemento da cercare");
					Long codice = Long.parseLong(scan.nextLine());
					cercaPerCodice(codice);
					break;
				case 4:
					System.out.println("fornisci l'anno per la ricerca");
					int anno = Integer.parseInt(scan.nextLine());
					cercaPerAnno(anno);
					break;
				case 5:
					System.out.println("fornisci l'autore per la ricerca");
					String autore = scan.nextLine();
					cercaPerAutore(autore);
					break;
				case 6:
					System.out.println("fornisci il titolo (o parte di esso) per la ricerca");
					String titolo = scan.nextLine();
					cercaPerTitolo(titolo);
					System.out.println("");
					break;
				case 7:
					System.out.println("fornisci il numero tessera per la ricerca");
					Long numeroTessera = Long.parseLong(scan.nextLine());
					cercaPrestitiUtente(numeroTessera);
					System.out.println("Ricerca eseguita");
					break;
				case 8:
					cercaPrestitiScaduti();
					System.out.println("Ricerca eseguita");
					break;
				default:
					System.out.println("comando sbagliato, usare uno dei comandi concessi");
					System.out.println("");
				}
			} catch (NumberFormatException e) {
				System.out.println("comando sbagliato, usare uno dei comandi concessi");
				System.out.println("");
			}
		}
	}

	public static void aggiungi() {
		Scanner scan = new Scanner(System.in);

		System.out.println("vuoi aggiungere un libro (1) o una rivista (2)?");
		int scelta = Integer.parseInt(scan.nextLine());
		switch (scelta) {
		case 1:
			System.out.println("scrivi il titolo:");
			String titolo = scan.nextLine();
			System.out.println("scrivi l'anno di pubblicazione:");
			int anno = Integer.parseInt(scan.nextLine());
			System.out.println("scrivi il numero di pagine:");
			int pagine = Integer.parseInt(scan.nextLine());
			System.out.println("scrivi l'autore");
			String autore = scan.nextLine();
			System.out.println("scrivi il genere");
			String genere = scan.nextLine();
			Libro libro = new Libro();
			libro.setAutore(autore);
			libro.setGenere(genere);
			libro.setTitolo(titolo);
			libro.setAnnoPubblicazione(anno);
			libro.setNumeroPagine(pagine);
			elementoDAO.save(libro);
			System.out.println("Libro aggiunto correttamente");
			break;
		case 2:
			periodicità per = periodicità.SETTIMANALE;
			System.out.println("scegli la periodicità della rivista:");
			System.out.println("Settimanale(1),Mensile(2),Semestrale(3)");
			int scelta2 = Integer.parseInt(scan.nextLine());
			switch (scelta2) {
			case 1:
				per = periodicità.SETTIMANALE;
				break;
			case 2:
				per = periodicità.MENSILE;
				break;
			case 3:
				per = periodicità.SEMESTRALE;
				break;
			default:
				System.out.println("errore, necessario selezionare un tipo di periodicità corretto");
			}
			System.out.println("scrivi il titolo della rivista:");
			String titoloRivista = scan.nextLine();
			System.out.println("scrivi l'anno di pubblicazione:");
			int annoRivista = Integer.parseInt(scan.nextLine());
			System.out.println("scrivi il numero di pagine:");
			int pagineRivista = Integer.parseInt(scan.nextLine());
			Rivista rivista = new Rivista();
			rivista.setPeriodicità(per);
			rivista.setNumeroPagine(pagineRivista);
			rivista.setAnnoPubblicazione(annoRivista);
			rivista.setTitolo(titoloRivista);
			elementoDAO.save(rivista);
			System.out.println("Rivista aggiunta correttamente");
			break;
		default:
			System.out.println("comando sbagliato, usare uno dei comandi concessi");
			System.out.println("");
		}
	}

	public static void rimuovi(Long canc) {
		Elemento elemDaRimuovere = elementoDAO.getById(canc);
		if (elemDaRimuovere == null) {
			System.out.println("elemento non presente nell'archivio, impossibile eliminare");
		} else {
			elementoDAO.delete(elemDaRimuovere);
			System.out.println("elemento rimosso correttamente");
		}

	}

	public static void cercaPerCodice(Long codice) {
		Elemento elemDaCercare = elementoDAO.getById(codice);
		if (elemDaCercare == null) {
			System.out.println("elemento non presente nell'archivio");
		} else {
			System.out.println("elemento trovato:");
			System.out.println(elemDaCercare.toString());
		}
		// ho deciso di non usare query in rimuovi e cerca per codice in quanto erano
		// ricerche che fornivano un solo risultato e inoltre abbiamo già il metodo
		// cerca tramite id nel DAO quindi mi pareva superfluo, da cerca per anno ho
		// utilizzato le query in quanto potevo potenzialmente ottenere più risultati
		// nelle mie ricerche
	}

	public static void cercaPerAnno(int anno) {
		try {
			Query q = em.createQuery("SELECT el FROM Elemento el WHERE el.annoPubblicazione=?1");
			q.setParameter(1, anno);

			List<Elemento> listaElementi = q.getResultList();
			if (listaElementi == null) {
				System.out.println("nessun elemento trovato con questo anno");
			} else {
				listaElementi.forEach((el) -> {
					System.out.println(el.toString());
				});
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

	public static void cercaPerAutore(String autore) {
		try {
			Query q = em.createQuery("SELECT el FROM Elemento el WHERE el.autore=?1");
			q.setParameter(1, autore);

			List<Elemento> listaElementi = q.getResultList();
			if (listaElementi == null) {
				System.out.println("nessun elemento trovato con questo autore");
			} else {
				listaElementi.forEach((el) -> {
					System.out.println(el.toString());
				});
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void cercaPerTitolo(String titolo) {
		try {
			Query q = em.createQuery("SELECT el FROM Elemento el WHERE el.titolo LIKE :titolo");
			q.setParameter("titolo", "%" + titolo + "%");
			List<Elemento> listaElementi = q.getResultList();
			if (listaElementi == null) {
				System.out.println("nessun elemento trovato con questo titolo");
			} else {
				listaElementi.forEach((el) -> {
					System.out.println(el.toString());
				});
			}

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void cercaPrestitiUtente(Long codice) {
		try {
			Utente ute = utenteDAO.getById(codice);
			Query q = em.createQuery("SELECT pr FROM Prestito pr WHERE pr.ut=?1 AND pr.dataRestituzioneEffettiva=null");

			q.setParameter(1, ute);
			List<Prestito> listaPrestiti = q.getResultList();
			if (listaPrestiti == null) {
				System.out.println("nessun prestito attivo");
			} else {
				listaPrestiti.forEach((pr) -> {
					System.out.println(pr.getEl().toString());
				});
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void cercaPrestitiScaduti() {
		try {
			Query q = em.createQuery(
					"SELECT pr FROM Prestito pr WHERE pr.dataRestituzioneEffettiva=null AND pr.dataRestituzionePrevista<Now()");
			List<Prestito> listaPrestiti = q.getResultList();
			if (listaPrestiti == null) {
				System.out.println("nessun prestito attivo");
			} else {
				listaPrestiti.forEach((pr) -> {
					System.out.println(pr.toString());
				});
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void main(String[] args) throws IOException {

		// ho già creato degli utenti e dei prestiti, nella traccia non veniva
		// specificato di creare funzioni per poter inserire utenti o prestiti quindi ho
		// pensato non andasse fatto

		inizio();
	}

}

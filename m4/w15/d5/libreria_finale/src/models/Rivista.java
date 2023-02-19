package models;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import utils.periodicit�;

@Entity
public class Rivista extends Elemento {

	@Enumerated(EnumType.STRING)
	private periodicit� periodicit�;

	public Rivista() {

	}

	public periodicit� getPeriodicit�() {
		return periodicit�;
	}

	public void setPeriodicit�(periodicit� periodicit�) {
		this.periodicit� = periodicit�;
	}

	@Override
	public String toString() {
		return "Rivista [codiceISBN=" + this.getCodiceISBN() + ", titolo=" + this.getTitolo() + ", annoPubblicazione="
				+ this.getAnnoPubblicazione() + ", numeroPagine=" + this.getNumeroPagine() + ", periodicit�="
				+ periodicit� + "]";
	}

}

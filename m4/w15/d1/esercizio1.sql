CREATE TABLE IF NOT EXISTS clienti (
    numeroCliente SERIAL PRIMARY KEY,
	nome VARCHAR NOT NULL,
	cognome VARCHAR NOT NULL,
	dataNascita DATE NOT NULL,
	regioneResidenza VARCHAR NOT NULL	
);

CREATE TABLE IF NOT EXISTS fatture (
    numeroFattura SERIAL PRIMARY KEY,
	tipologia VARCHAR NOT NULL,
	importo INT8 NOT NULL,
	iva INT8 NOT NULL,
	idCliente INT8 NOT NULL,
	dataFattura DATE NOT NULL,
	numeroFornitore INT8 NOT NULL	
);

CREATE TABLE IF NOT EXISTS prodotti (
    idProdotto SERIAL PRIMARY KEY,
	descrizione VARCHAR NOT NULL,
	inProduzione BOOLEAN NOT NULL,
	inCommercio BOOLEAN NOT NULL,
	dataAttivazione DATE NOT NULL,
	dataDisattivazione DATE NOT NULL	
);

CREATE TABLE IF NOT EXISTS fornitori (
    numeroFornitore SERIAL PRIMARY KEY,
	denominazione VARCHAR NOT NULL,
	regioneResidenza VARCHAR NOT NULL	
);

INSERT INTO clienti (nome, cognome, dataNascita, regioneResidenza) VALUES ('Riccardo', 'Verdi', '1982-05-03', 'Lazio');
INSERT INTO clienti (nome, cognome, dataNascita, regioneResidenza) VALUES ('Giorgio', 'Mariani', '1995-01-07', 'Piemonte');
INSERT INTO clienti (nome, cognome, dataNascita, regioneResidenza) VALUES ('Francesco', 'Rossi', '1999-02-15', 'Campania');
INSERT INTO fatture (tipologia, importo, iva, idCliente, dataFattura, numeroFornitore) VALUES ('Postale', 130, 15, 1, '2023-01-01', 1);
INSERT INTO fatture (tipologia, importo, iva, idCliente, dataFattura, numeroFornitore) VALUES ('Bancaria', 200, 20, 2, '2022-05-12', 2);
INSERT INTO fatture (tipologia, importo, iva, idCliente, dataFattura, numeroFornitore) VALUES ('Ristorante', 40, 10, 3, '2023-02-03', 3);
INSERT INTO prodotti (descrizione, inProduzione, inCommercio, dataAttivazione, dataDisattivazione) VALUES ('Televisione', TRUE, TRUE, '2021-12-03', '2022-01-14');
INSERT INTO prodotti (descrizione, inProduzione, inCommercio, dataAttivazione, dataDisattivazione) VALUES ('Armadio', TRUE, FALSE, '2022-05-29', '2022-09-18');
INSERT INTO prodotti (descrizione, inProduzione, inCommercio, dataAttivazione, dataDisattivazione) VALUES ('Macchina', TRUE, FALSE, '2022-05-29', '2022-09-18');
INSERT INTO fornitori (denominazione, regioneResidenza) VALUES ('BRT', 'Lazio');
INSERT INTO fornitori (denominazione, regioneResidenza) VALUES ('UPS', 'Lombardia');
INSERT INTO fornitori (denominazione, regioneResidenza) VALUES ('SDA', 'Basilicata');


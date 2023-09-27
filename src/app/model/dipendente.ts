export class Dipendente {

    codiceFiscale : string;
    nome : string;
    cognome : string;
    email : string;
    dataDiNascita : Date;
    cittaNatale : string;
    indirizzo : string;
    cittaResidenza : string;
    cap : string;
    numeroTelefonico : string;

    constructor();

    constructor(codiceFiscale?:string, nome?:string, cognome?:string, 
                email?:string, dataDiNascita?:Date, cittaNatale?:string, 
                indirizzo?:string, cittaResidenza?:string, cap?:string, numeroTelefonico?:string) {

        if (codiceFiscale && nome && cognome && email && dataDiNascita && cittaNatale && indirizzo && cittaResidenza && cap && numeroTelefonico) {

            this.codiceFiscale = codiceFiscale;
            this.nome = nome;
            this.cognome = cognome;
            this.email = email;
            this. dataDiNascita = dataDiNascita;
            this.cittaNatale = cittaNatale;
            this.indirizzo = indirizzo
            this.cittaResidenza = cittaResidenza;
            this.cap = cap;
            this.numeroTelefonico = numeroTelefonico;
            
        } else {
            this.codiceFiscale = "";
            this.nome = "";
            this.cognome = "";
            this.email = "";
            this. dataDiNascita = new Date();
            this.cittaNatale = "";
            this.indirizzo = "";
            this.cittaResidenza = "";
            this.cap = "";
            this.numeroTelefonico = "";
        }


    }

}
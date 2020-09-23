import { Collegue } from "../models/Collegues";


export let collegueMock = new Collegue();
collegueMock.matricule = "7XY";
collegueMock.nom = "Dupont";
collegueMock.prenoms = "Rob";
collegueMock.dateDeNaissance = new Date(1995, 7, 22);
collegueMock.email = "dupont.rob@email.fr";
collegueMock.photoUrl = "http://www.photoDupont.fr/";
# JS-CAMPOMINATO-GRID:
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Consegna
- Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.**
- In seguito l'utente clicca su una cella:
    - se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
    - Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
- La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
### BONUS:
- Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    1. difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    2. difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    3. difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
**Consigli del giorno:**
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

## Soluzione

- genero 16 numeri casuali compresi tra un minimo e un massimo (cioè 1 come minimo e il numero di caselle per il massimo)
- li inserisco in una lista e:
    - ripeto queste cose fino a chè non viene triggerata la prima opzione:
        - se il numero premuto è presente nella lista allora:
            1. tutti i numeri presenti nella lista ricevono la classe con il background rosso
        - se il numero premuto non è presente nella lista allora:
            1. la cella si colora di blu
            2. aggiungo 1 al contatore del punteggio



// creare un messaggio con i minuti mancanti alla fine dell'ora

// stabilire una variabile che rappresentino i minuti dell'ora
var minutesHour = 60, minutesNow, minutesLeft ;



// stabilire una variabile che rappresentino i minuti in questo istante
var date = new Date();
minutesNow = date.getMinutes();


// sottrarre i minuti dell'ora con i minuti "catturati"
minutesLeft = minutesHour - minutesNow;


// creare l'output
document.getElementById('title').innerHTML = "Minuti mancanti alla fine dell'ora: " + minutesLeft;

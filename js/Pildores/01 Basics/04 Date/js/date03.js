/* 3. Demana la data de naixement a un usuari, i mostra l’edat en anys, mesos, dies, 
segons i milisegons. */
    var userBirth = prompt("Introdueix el teu any de naixement (YYYY-MM-DD): ");
    userBirth = new Date(userBirth);
    // Get the total miliseconds passed between your birth and now
    var totalMiliseconds = Date.now() - userBirth.getTime();

    // Now convert it to the formar required
    var yearsPassed = totalMiliseconds / (365 * 24 * 3600 * 1000);
    var monthsPassed = yearsPassed * 12;
    var daysPassed = totalMiliseconds / (24 * 3600 * 1000);
    var secondsPassed = totalMiliseconds / 1000;
    window.alert("Tens " + yearsPassed + " anys\n" + monthsPassed + " mesos\n" + 
    daysPassed + " dies\n" + secondsPassed + " segons\n" + totalMiliseconds + " milisegons");
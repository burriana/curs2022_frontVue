/* 2. Crea un objecte de tipus Date amb la data i hora actual. 
Què passa si s’assigna amb el mètode setHours el valor 26? 
Què passa si s’assigna amb el mètode setMinutes el valor 65?
Què passa si s’assigna com a dia de mes 35? */
    var currentTime = new Date();
    console.log("Data" + currentTime.toString());

    var hores = currentTime.setHours(26);
    console.log("26 h " + hores );    

    var minuts= currentTime.setMinutes(65);    
    console.log("65 ' " + minuts );    
    
    var dies = currentTime.setDate(35);    
    console.log(dies);

/* El que passa és que el nombre de minuts, hores o dies que supera el màxim es suma
 i s'avança "el temps" */ 
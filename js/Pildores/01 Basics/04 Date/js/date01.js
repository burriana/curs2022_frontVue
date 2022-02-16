
/* 1. Calcula els milisegons que falten fins al dia del teu aniversari. */
    
    var ahora = new Date();    
    var ahoramss = ahora.getMilliseconds();
    var ahoraNow = Date.now();

    const hoy = new Date(ahoraNow);
    console.log("Hoy: " + hoy);    
    console.log("Ahora: " + ahora);    
    console.log("Ahora mss: " + ahoramss );    
    console.log("Ahora mss: " + ahoraNow );    

    var birthday = new Date(2022,12,26);
    var msDiff = birthday.getTime() - Date.now(); 
    var dies = (msDiff / 1000) / 60 / 60 / 24 ;
    console.log("Milisesgon " + msDiff );    
    console.log("Milisesgon " + dies );  

    //window.alert("Falten " + msDiff + " milisegons pel meu aniversari");
    console.log("Falten " + msDiff + " milisegons pel meu aniversari")
    document.getElementById("demo").innerHTML ="Falten " + msDiff + " milisegons pel meu aniversari"

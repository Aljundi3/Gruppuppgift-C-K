// Lägg till en knapp som ändrar bakgrundsfärgen på sidan.



// Skapa en funktion som gör följande sak: ändrar bakgrundsfärg.
function clickFunction(){
    // Hämta vår p-tagg och spara den i en variabel. dvs vi letar efter p, som finns längre ned i body. 
    let ourText = document.querySelector("p");
    // Hämta vår div via dens ID och sparar den i en variabel. 
    let ourDiv = document.querySelector("#color-changer");

    // Ändra bakgrundsfärgen på vår div till grön, style är ett sätt att göra CSS-förändringar. I JS får man inte använda bindestreck i funktioner. 
    ourDiv.style.backgroundColor = "green";
    //OBs, måste vara en 
    // Ändra texten på ourText till "Jag har ändrats!". 
    ourText.innerText = "Jag har ändrats!";
    // let ourTextValue = ourText.innerText. Likamed är att den hämtar något. 
}
// Koppla denna funktion till onclick. Måste först skriva onclick i bodyn, kolla nedan.
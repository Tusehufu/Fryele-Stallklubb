const skickaKnapp = document.getElementById("skickaKnapp");
const meddelandeTextarea = document.getElementById("meddelande");

skickaKnapp.addEventListener("click", function minFunktion (){
    const meddelandeText = meddelandeTextarea.value;
    console.log("Meddelande: " + meddelandeText);
});
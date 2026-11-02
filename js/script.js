function divisore() {
    let n = document.getElementById("number").value;
    n = parseFloat(n);
    let divisori = 0;
    let p;
    const nDivisori = [];
    if (n == 0) {
        p = document.getElementById("risultato");
        p.innerHTML = " lo 0 non ha divisori";
    } else {
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                divisori++;
                nDivisori.push(i);
            }
        }
        document.getElementById("spinner").style.display = "none";
        p = document.getElementById("risultato");
        p.innerHTML = "il numero ha " + divisori + " divisori" + "<br> i divisori sono: " + nDivisori.join("-");
        if (divisori == 2) {
            p.innerHTML += "<br>È un numero primo!";
            p.style.backgroundColor = "red";
            p.style.color = "white";
        }
    }
}
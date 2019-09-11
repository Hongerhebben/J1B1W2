window.alert("Welkom bij de Pizzashop") // begroeten
window.alert("Koop hier de lekkerste Pizza's,") // nogsteeds
window.alert("Als U geen pizza bij een bepaalde grootte wilt, vul dan 0 in") // instructie
var PizzaKlein = prompt ("Kleine Pizza's 3,-, aantal invullen") // kleine pizza + prijs + aantal
var PizzaMiddel = prompt ("Middel Pizza's 5,-, aantal invullen") // middel pizza + prjis + aantal
var PizzaGroot = prompt ("Grote Pizza's 7.50, aantal invullen") // grote pizza + prijs + aantal
document.write('PizzaKLein : '+ PizzaKlein); // uiteindelijk ding
document.write('<br/>')
document.write('PizzaMiddel : ' + PizzaMiddel);
document.write('<br/>')
document.write('PizzaGroot : ' + PizzaGroot);
document.write('<br/>')
document.write('<br/>')
document.write("PizzaKLein" + PizzaKlein * 5 + "&euro;"); // Prijs berekenen
document.write('<br/>')
document.write("PizzaMiddel" + PizzaMiddel * 7.50 + "&euro;"); // prijs berekenen
document.write('<br/>')
document.write("PizzaGroot" + PizzaGroot * 10.00 + "&euro;");
document.write('<br/>')
document.write('<br/>')
var total = PizzaKlein * 5 + PizzaMiddel * 7.50 + PizzaGroot *10.00;
var totalp = PizzaKlein * 1 + PizzaMiddel * 1 + PizzaGroot * 1;

document.write (" aantal Pizzas " + totalp)
document.write('<br/>')
document.write("totaal" + total + "&euro;");
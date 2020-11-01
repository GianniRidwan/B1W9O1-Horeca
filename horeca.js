const fris = Number(2.50);
const bier = Number(2.00);
const wijn = Number(3.00);
var orderQty = Number(0);

function fullOrder(){
	var order = prompt("Welke bestelling wilt u toevoegen? Kies uit 'fris', 'bier' of 'wijn'.");
		if (order == "stop"){
			document.write(orderQty + "x " + order + "<br>");
			document.write("Totaal: " + (order * orderQty));
		} 

		else if (order == "fris" || order == "bier" || order == "wijn"){
			orderQty = prompt("Hoeveel " + order + " wilt u toevoegen aan uw bestelling?");
			fullOrder();
		} 

		else {
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
			fullOrder();
		}
}		
fullOrder();	
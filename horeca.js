const fris = Number(2.50);
const bier = Number(2.00);
const wijn = Number(3.00);
const snacks8 = Number(5.00);
const snacks16 = Number(8.00);

var frisQty = Number(0);
var bierQty = Number(0);
var wijnQty = Number(0);
var achtBal = Number(0);
var zestienBal = Number(0);

function fullOrder(){
	var order = prompt("Welke bestelling wilt u toevoegen? Kies uit 'fris', 'bier', 'wijn' of 'snacks'.");
		if (order == "stop"){
			if (frisQty > 0){
				document.write(frisQty + "x fris" + "<br>");
			}
			if (bierQty > 0){
				document.write(bierQty + "x bier" + "<br>");
			}
			if (wijnQty > 0){
				document.write(wijnQty + "x wijn" + "<br>");
			}
			if (achtBal > 0){
				document.write(achtBal + "x 8 snacks" + "<br>");
			}
			if (zestienBal > 0){
				document.write(zestienBal + "x 16 snacks" + "<br>");
			}
			
			document.write("Totaal: " + ((fris * frisQty) + (bier * bierQty) + (wijn * wijnQty) + (achtBal * snacks8) + (zestienBal * snacks16)));
		} 

		else if (order == "fris"){
			frisQty = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
			fullOrder();
		}

		else if (order == "bier"){
			bierQty = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
			fullOrder();
		}

		else if (order == "wijn"){
			wijnQty = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
			fullOrder();
		}

		else if (order == "snacks"){
			snacks = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
			if (snacks == 8){
				achtBal = prompt("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
			}
			else if (snacks == 16){
				zestienBal = prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
			}
			else{
				alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
			}
			fullOrder();
		}

		else {
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
			fullOrder();
		}
}		
fullOrder();
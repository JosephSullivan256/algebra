import {Group, groupDirectProduct, integers} from "./group";


function main(){
	let gp1 = integers;
	let gp2 = new Group<string>(
		"",
		(x,y) => x+y,
		(x)=> x
	)

	let gp = groupDirectProduct(gp1, gp2);
	alert(gp.multiply([4,"dog"], [5,"cat"]));
	
}


window.addEventListener("load", ()=>{
	main();
});
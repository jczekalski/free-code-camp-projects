function rot13(str) {

  let array = str.split("");
  let newArray = []

  for (let i=0;i<array.length;i++) {
      let charNumber = array[i].charCodeAt();
      if (charNumber < 65 || charNumber > 90) {
        newArray.push(array[i]);
      } else if (charNumber < 78) {
        newArray.push(String.fromCharCode(charNumber + 13));
      } else {
        newArray.push(String.fromCharCode(charNumber - 13));
      }
  }

 console.log(newArray.join(""));
  
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); // should decode to FREE CODE CAMP
rot13("SERR CVMMN!") // should decode to FREE PIZZA!
rot13("SERR YBIR?") //should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
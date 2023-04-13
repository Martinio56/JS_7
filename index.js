//Oppgave 1----------------------------------------------------------------------------------------------------------------

// minTekst('');

// function minTekst(tekst) {
//     if (tekst.length === 0) {
//       console.log('Teksten er tom');
//     } else {
//       console.log('Teksten er ikke tom');
//     }
//   }  

//Oppgave 2----------------------------------------------------------------------------------------------------------------

// function minTekst(tekst) {
//     tekst = tekst.trim();
  
//     var ord = tekst.split(' ');
  
//     ord = ord.filter(function(elem) {
//       return elem.length > 0;
//     });

//     return ord;
//   }

// console.log(minTekst('   Røyken Videregående Skole     '));

//Oppgave 3----------------------------------------------------------------------------------------------------------------

// function erPalindrom(tekst) {
//     tekst = tekst.toLowerCase().replace(/\s/g, '');
  
//     var reversedTekst = tekst.split('').reverse().join('');
//     return tekst === reversedTekst;
//   }

// console.log(erPalindrom('Radar'));
// console.log(erPalindrom('A man a plan a canal Panama'));
// console.log(erPalindrom('Hello world'));

//Oppgave 4----------------------------------------------------------------------------------------------------------------

// function sortering(tekst) {
//     tekst = tekst.toLowerCase().replace(/\s/g, '');

//     return tekst.split('').sort().join('');
//   }
  
//   console.log(sortering('Serdar'));

//Oppgave 5----------------------------------------------------------------------------------------------------------------

// function antall(tekst, bokstav) {
//     tekst = tekst.toLowerCase().replace(/\s/g, '');
//     let telling = 0;
//     for (let i = 0; i < tekst.length; i++) {
//       if (tekst[i] === bokstav) {
//         telling++;
//       }
//     }
//     return count;
//   }  

// const tekst = "Welcome to Norge";
// const bokstav = "o";
// const telling = antall(tekst, bokstav);
// console.log(telling);

//Oppgave 6----------------------------------------------------------------------------------------------------------------

// function print(ord, steg) {
//     for (let i = 0; i < ord.length; i += steg) {
//       console.log(ord.slice(i, i + steg));
//     }
//   }

// const ord = "ABCAABCAAADA";
// const steg = 3;
// print(ord, steg);

//Oppgave 7----------------------------------------------------------------------------------------------------------------


  
//-------------------------------------------------------------------------------------------------------------------------
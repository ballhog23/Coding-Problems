// function kookaCounter(laughing) {
//     let regex1 = /haH/g
//     let regex2 = /ha/g
//     let regex3 = /Hah/g
//     let regex4 = /Ha/g
//     let kookaCount = 0;

//     if (laughing === '' || laughing === null) return 0;

//     if (laughing.match(regex1)) {
//         laughing.match(regex3) ? kookaCount = laughing.match(regex1).length + laughing.match(regex3).length + 1 : kookaCount = laughing.match(regex1).length + 1
//     } else if (laughing.match(regex2) && laughing.match(regex4)) {
//         kookaCount = 2
//     } else if (laughing === undefined){
//         kookaCount = 1
//     } else {
//         kookaCount = 1
//     }

//     // Your code here!
//     return kookaCount;
// }

var kookaCounter = function(laughing) {
    // Your code here!
   return console.log((laughing.match(/(ha+)+|(Ha+)+/g) || []).length);
  }

kookaCounter("")
kookaCounter("hahahahaha")
kookaCounter("hahahahahaHaHaHa")
kookaCounter("HaHaHahahaHaHa")
kookaCounter("HaHaHaHa")
kookaCounter("HaHaHaHaHaHaHaHaHaHaHaHahahahahahahahahahahahahaHaHaHaHaHaHaHaHaHaHaHaHahahahahahahahahahahahahaHaHaHaHahahahahahahahahahahahahaHaHaHaHaHaHahahahahahahahahahahahaha")
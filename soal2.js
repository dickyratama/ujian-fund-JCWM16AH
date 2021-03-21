let nilai = [0, 12, 98];
    let max = 0;
    let min = 1000;
    for (let a = 0; a < nilai.length; a++) {
      if (nilai[a] > max) {
          max = nilai[a];
      } else if (nilai[a] < min) {
          min = nilai[a];
      }
 }
 console.log("Nilai :" + nilai);
 console.log("Nilai Maksimum : " + max);
 console.log("Nilai Minimun  : " + min);
 


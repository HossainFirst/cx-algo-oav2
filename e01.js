tab = [96,5,900,3,-800,2]


function Tris_Bulle(tab){

    let i = 0
    while(i<tab.length){

       let fin = true
       while(fin == true){
           if(tab[i]>tab[i+1]){
               let tmp = tab[i]
               tab[i] = tab[i+1]
               tab[i+1] = tmp
               i = 0
           }else{
               fin = false

           }

       }


       i++ 
    }
    console.log(tab)
}
Tris_Bulle(tab);
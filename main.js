
function calcular() {
   
    var vacation= document.getElementById("vacaciones").value;
    var weekday = parseInt(document.getElementById("dia").value);
    var isVacation = false;
    var isWeekday = false;
    var salida = document.getElementById("salida");
    
    if(vacation == 1)
    {
        isVacation = true;
    }
    
    if(weekday < 6)
    {
        isWeekday = true;
    }            
        
    if(isVacation)
        {
         salida.innerHTML = "1";            
        }else{
            if(isWeekday){
                salida.innerHTML = "0";
            }else{
                salida.innerHTML = "1";
            }
            
        }
}

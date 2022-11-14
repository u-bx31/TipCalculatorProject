var tips = document.querySelectorAll('.tip')
var tipam = document.getElementById('number-tip')
var tipt = document.getElementById('number-total')
var bill = document.getElementById('bill')
var numberp = document.getElementById('numberp')
var reset = document.getElementById('reset')
var custom = document.getElementById('c-tip')


tips.forEach(function(e){
    e.addEventListener('click',function(e){
        var tipAmount = 0.00
        var total = 0.00
        tipam.innerHTML = "$ "+tipAmount.toFixed(2)
        tipt.innerHTML = "$ "+total.toFixed(2); 
        var msg = document.getElementById('msgError')
        if(numberp.value == 0){
            
            msg.style.display ="inline";
            numberp.style.border = "3px solid rgb(255, 101, 101)"
            
        }
        else{

            numberp.style.border = "none"
            msg.style.display ="none";

            var tip = parseFloat(e.target.innerText) / 100 ;
            var tipAmount = parseFloat(bill.value * tip) / parseInt(numberp.value)
            var total = parseFloat(bill.value / parseInt(numberp.value)) + tipAmount
            tipam.innerHTML = "$ "+tipAmount.toFixed(2)
            tipt.innerHTML = "$ "+total.toFixed(2); 
            reset.removeAttribute('disabled')
        }
        custom.value=""
        
    })
});
custom.addEventListener('input',function(){
    var msg = document.getElementById('msgError')
    var tipAmount = 0.00
    var total = 0.00
    tipam.innerHTML = "$ "+tipAmount.toFixed(2)
    tipt.innerHTML = "$ "+total.toFixed(2); 
    if(numberp.value == 0){
        
        msg.style.display ="inline";
        numberp.style.border = "3px solid rgb(255, 101, 101)"
    }
    else{
        numberp.style.border = "none"
        msg.style.display ="none";
        var tip = custom.value / 100 ;
        var tipAmount = parseFloat(bill.value * tip) / parseInt(numberp.value)
        var total = parseFloat(bill.value / parseInt(numberp.value)) + tipAmount
        tipam.innerHTML = "$ "+tipAmount.toFixed(2)
        tipt.innerHTML = "$ "+total.toFixed(2); 
        reset.removeAttribute('disabled')
    }
})
numberp.addEventListener('input',function(){
    var msg = document.getElementById('msgError')
    var tipAmount = 0.00
    var total = 0.00
    tipam.innerHTML = "$ "+tipAmount.toFixed(2)
    tipt.innerHTML = "$ "+total.toFixed(2); 
    if(numberp.value == 0){
        
        msg.style.display ="inline";
        numberp.style.border = "3px solid rgb(255, 101, 101)"
    }
    else{
        numberp.style.border = "none"
        msg.style.display ="none";
        var tip = custom.value / 100 ;
        var tipAmount = parseFloat(bill.value * tip) / parseInt(numberp.value)
        var total = parseFloat(bill.value / parseInt(numberp.value)) + tipAmount
        tipam.innerHTML = "$ "+tipAmount.toFixed(2)
        tipt.innerHTML = "$ "+total.toFixed(2); 
        reset.removeAttribute('disabled')
    }
})
bill.addEventListener('input',function(){
    var msg = document.getElementById('msgError')
    var tipAmount = 0.00
    var total = 0.00
    tipam.innerHTML = "$ "+tipAmount.toFixed(2)
    tipt.innerHTML = "$ "+total.toFixed(2); 
    if(numberp.value == 0){
        
        msg.style.display ="inline";
        numberp.style.border = "3px solid rgb(255, 101, 101)"
    }
    else{
        numberp.style.border = "none"
        msg.style.display ="none";
        var tip = custom.value / 100 ;
        var tipAmount = parseFloat(bill.value * tip) / parseInt(numberp.value)
        var total = parseFloat(bill.value / parseInt(numberp.value)) + tipAmount
        tipam.innerHTML = "$ "+tipAmount.toFixed(2)
        tipt.innerHTML = "$ "+total.toFixed(2); 
        reset.removeAttribute('disabled')
    }
})

reset.addEventListener('click',function(e){
    bill.value=""
    numberp.value=""
    custom.value=""
    var tipAmount = 0.00
    var total = 0.00
    tipam.innerHTML = "$ "+tipAmount.toFixed(2)
    tipt.innerHTML = "$ "+total.toFixed(2); 
    
})


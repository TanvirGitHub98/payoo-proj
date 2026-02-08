

// Add Money Feature
const pin="1234";

// Shared Functions

function getInputNumber(id)
{
    return parseInt(document.getElementById(id).value);

}
function getInputValue(id)
{
    return document.getElementById(id).value;

}
function getInnerText(id)
{
    return document.getElementById(id).innerText;
}

function setInnerText(id,value)
{
    return document.getElementById(id).innerText=value;

}



function setBackGroundColor(id,value)
{
    return document.getElementById(id).style.backgroundColor=value;

}

function setBorder(id,value)
{
   return document.getElementById(id).style.border=value;
}
function setTextColor(id,value)
{
    return document.getElementById(id).style.color=value;
}
function setFontWeight(id,value)
{
    return document.getElementById(id).style.fontWeight=value;
}


// Share toggle function
function toggleDisplay(id)
{
    let forms=document.getElementsByClassName('allForm')
    for(let form of forms)
    {
        form.style.display='none'
    }
    return document.getElementById(id).style.display='block'

}

//bg,border

function toggleActive(id) {
  const allDiv = document.getElementsByClassName("all-div");

  // reset all cards
  for (const div of allDiv) {
    div.classList.remove("border-2", "border-[#0874F2]", "bg-[#0874F2]/5");
    div.classList.add("border", "border-[#080808]/10");

    // reset text inside each card
    const h1 = div.querySelector("h1");
    if (h1) {
      h1.classList.remove("text-[#0874F2]", "font-semibold");
      h1.classList.add("text-black", "font-normal");
    }
  }

  // active clicked card
  const activeDiv = document.getElementById(id);
  if (!activeDiv) return;

  activeDiv.classList.remove("border", "border-[#080808]/10");
  activeDiv.classList.add("border-2", "border-[#0874F2]", "bg-[#0874F2]/5");

  const activeH1 = activeDiv.querySelector("h1");
  if (activeH1) {
    activeH1.classList.remove("text-black", "font-normal");
    activeH1.classList.add("text-[#0874F2]", "font-semibold");
  }
}





document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const availableBalance=parseInt(getInnerText('available-balance'));
    const bankName=getInputValue("add-bank");
    const bankAccNum=getInputValue('add-bank-acc-number');
    const addAmount=getInputNumber('add-amount');
    const addPin=getInputValue('add-pin');

    if(bankAccNum.length<11)
    {
        alert("Please Provide a Valid Account Number!");
        return;
    }
    if(addPin!==pin)
    {
        alert('Invalid Pin!!!')
        return;
    }
    const newBalance=addAmount+availableBalance;
    setInnerText('available-balance',newBalance);
 
})


// Cash Out Feature

document.getElementById('cash-out-money-btn').addEventListener('click',function(e) {
    e.preventDefault();
    const availableBalance=parseInt(getInnerText('available-balance'));
    const withdrawAmount=getInputNumber('cash-out-amount');
    const bankAccNum=getInputValue('cash-out-bank-acc-number');
    const cashOutPin=getInputValue('cash-out-pin')

    if(bankAccNum.length<11)
    {
        alert("Please Provide a Valid Account Number!");
        return;
    }
    if(cashOutPin!==pin)
    {
        alert('Invalid Pin!!!')
        return;
    }
    const newBalance=availableBalance-withdrawAmount;
    setInnerText('available-balance',newBalance);


})


// Transfer Now Feature

document.getElementById('transfer-money-btn').addEventListener('click',function(e){
    e.preventDefault();


})


// Get Bonus Feature
document.getElementById('get-bonus-btn').addEventListener('click',function(e){
    e.preventDefault();
})


// Pay Bill Feature
document.getElementById('pay-bill-btn').addEventListener('click',function(e){
    e.preventDefault();
})



// Toggling Feature allForm

// clickon add money
document.getElementById('add-money-div').addEventListener('click',function(){


    toggleDisplay('Add-money-section');
    toggleActive('add-money-div')
    // setBackGroundColor('add-money-div','rgba(8, 116, 242, 0.05)');
    // setBorder('add-money-div','2px solid #0874F2');
    // setTextColor('add-money-text','#0874F2');
    // setFontWeight('add-money-text','600');


    // setBackGroundColor('cash-out-div','transparent');
    // setBackGroundColor('transfer-money-div','transparent');
    // setBackGroundColor('get-bonus-div','transparent');
    // setBackGroundColor('pay-bill-div','transparent');
    // setBorder('cash-out-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('transfer-money-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('get-bonus-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('pay-bill-div','1px solid rgba(8, 8, 8, 0.1)');
    // setTextColor('cash-out-text','black');
    // setTextColor('transfer-money-text','black');
    // setTextColor('get-bonus-div','black');
    // setTextColor('pay-bill-txt','black');
    // setFontWeight('cash-out-text','400');
    // setFontWeight('transfer-money-text','400');
    // setFontWeight('get-bonus-text','400');
    // setFontWeight('pay-bill-txt','400');


})

// click cashout
document.getElementById('cash-out-div').addEventListener('click',function(){
    toggleDisplay('cash-out-section');
    toggleActive('cash-out-div')

    // setBackGroundColor('cash-out-div','rgba(8, 116, 242, 0.05)');
    // setBorder('cash-out-div','2px solid #0874F2');
    // setTextColor('cash-out-text','#0874F2');
    // setFontWeight('cash-out-text','600');


    // setBackGroundColor('add-money-div','transparent');
    // setBackGroundColor('transfer-money-div','transparent');
    // setBackGroundColor('get-bonus-div','transparent');
    // setBackGroundColor('pay-bill-div','transparent');
    // setBorder('add-money-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('transfer-money-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('get-bonus-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('pay-bill-div','1px solid rgba(8, 8, 8, 0.1)');
    // setTextColor('add-money-text','black');
    // setTextColor('transfer-money-text','black');
    // setTextColor('get-bonus-text','black');
    // setTextColor('pay-bill-text','black');
    // setFontWeight('add-money-text','400');
    // setFontWeight('transfer-money-text','400');
    // setFontWeight('get-bonus-text','400');
    // setFontWeight('pay-bill-text','400');
   
  

})



    //click transfer money

document.getElementById('transfer-money-div').addEventListener('click',function(){

        toggleDisplay('transfer-money-section');
        toggleActive('transfer-money-div')

        // setBackGroundColor('transfer-money-div','rgba(8, 116, 242, 0.05)');
        // setBorder('transfer-money-div','2px solid #0874F2');
        // setTextColor('transfer-money-text','#0874F2');
        // setFontWeight('transfer-money-text','600');


        // setBackGroundColor('add-money-div','transparent');
        // setBackGroundColor('cash-out-div','transparent');
        // setBackGroundColor('get-bonus-div','transparent');
        // setBackGroundColor('pay-bill-div','transparent');
        // setBorder('add-money-div','1px solid rgba(8, 8, 8, 0.1)');
        // setBorder('cash-out-div','1px solid rgba(8, 8, 8, 0.1)');
        // setBorder('get-bonus-div','1px solid rgba(8, 8, 8, 0.1)');
        // setBorder('pay-bill-div','1px solid rgba(8, 8, 8, 0.1)');
        // setTextColor('add-money-text','black');
        // setTextColor('cash-out-text','black');
        // setTextColor('get-bonus-text','black');
        // setTextColor('pay-bill-text','black');
        // setFontWeight('add-money-text','400');
        // setFontWeight('cash-out-text','400');
        // setFontWeight('get-bonus-text','400');
        // setFontWeight('pay-bill-text','400');


    })

    
//  Click Get Bonus 
document.getElementById('get-bonus-div').addEventListener('click',function(){
    toggleDisplay('get-bonus-section');
    toggleActive('get-bonus-div')

    // setBackGroundColor('get-bonus-div','rgba(8, 116, 242, 0.05)');
    // setBorder('get-bonus-div','2px solid #0874F2');
    // setTextColor('get-bonus-text','#0874F2');
    // setFontWeight('get-bonus-text','600');


    // setBackGroundColor('add-money-div','transparent');
    // setBackGroundColor('cash-out-div','transparent');
    // setBackGroundColor('transfer-money-div','transparent');
    // setBackGroundColor('pay-bill-div','transparent');
    // setBorder('add-money-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('cash-out-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('transfer-money-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('pay-bill-div','1px solid rgba(8, 8, 8, 0.1)');
    // setTextColor('add-money-text','black');
    // setTextColor('cash-out-text','black');
    // setTextColor('transfer-money-text','black');
    // setTextColor('pay-bill-text','black');
    // setFontWeight('add-money-text','400');
    // setFontWeight('cash-out-text','400');
    // setFontWeight('transfer-money-text','400');
    // setFontWeight('pay-bill-text','400');



})   

// Click Pay Bill
document.getElementById('pay-bill-div').addEventListener('click',function(){
    toggleDisplay('pay-bill-section');
    toggleActive('pay-bill-div')

    // setBackGroundColor('pay-bill-div','rgba(8, 116, 242, 0.05)');
    // setBorder('pay-bill-div','2px solid #0874F2');
    // setTextColor('pay-bill-text','#0874F2');
    // setFontWeight('pay-bill-text','600');


    // setBackGroundColor('add-money-div','transparent');
    // setBackGroundColor('cash-out-div','transparent');
    // setBackGroundColor('transfer-money-div','transparent');
    // setBackGroundColor('get-bonus-div','transparent');
    // setBorder('add-money-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('cash-out-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('transfer-money-div','1px solid rgba(8, 8, 8, 0.1)');
    // setBorder('get-bonus-div','1px solid rgba(8, 8, 8, 0.1)');
    // setTextColor('add-money-text','black');
    // setTextColor('cash-out-text','black');
    // setTextColor('transfer-money-text','black');
    // setTextColor('get-bonus-text','black');
    // setFontWeight('add-money-text','400');
    // setFontWeight('cash-out-text','400');
    // setFontWeight('transfer-money-text','400');
    // setFontWeight('get-bonus-text','400');

})
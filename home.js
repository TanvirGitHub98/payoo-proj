
// Shared Functions
const pin="1234";

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

//share toggle active

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




// Shared Feature End

// Logout Feature

document.getElementById('loginBtn').addEventListener('click',function(e){
    window.location.href='./index.html'
})




// Transaction List
let transcations=[];



// Add Money Feature

document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const availableBalance=parseInt(getInnerText('available-balance'));
    const bankName=getInputValue("add-bank");
    const bankAccNum=getInputValue('add-bank-acc-number');
    const addAmount=getInputNumber('add-amount');
    const addPin=getInputValue('add-pin');

    if(addAmount<=0)
    {
        alert("Invalid Amount!!!");
        return;
    }

    if(bankAccNum.length<11)
    {
        alert("Bank Account Number Must Be Equal or Greater than 11 digit")
        return;
    }
    if(addPin!==pin)
    {
        alert('Invalid Pin!!!')
        return;
    }
    const newBalance=addAmount+availableBalance;
    setInnerText('available-balance',newBalance);

    const data={
        name:'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transcations.push(data)
    alert("Transaction Successfull!!!")
 
})


// Cash Out Feature

document.getElementById('cash-out-money-btn').addEventListener('click',function(e) {
    e.preventDefault();
    const availableBalance=parseInt(getInnerText('available-balance'));
    const withdrawAmount=getInputNumber('cash-out-amount');
    const bankAccNum=getInputValue('cash-out-bank-acc-number');
    const cashOutPin=getInputValue('cash-out-pin')


    if(withdrawAmount>availableBalance || withdrawAmount<=0)
    {
        alert("Invalid Amount");
        return;
    }

    if(bankAccNum.length<11)
    {
        alert("Bank Account Number Must Be Equal or Greater than 11 digit")
        return;
    }
    if(cashOutPin!==pin)
    {
        alert('Invalid Pin!!!')
        return;
    }
    const newBalance=availableBalance-withdrawAmount;
    setInnerText('available-balance',newBalance);

    const data={
        name:'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transcations.push(data)
    alert("Transaction Successfull!!!")


})


// Transfer Now Feature

document.getElementById('transfer-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const transferAmount=getInputNumber('transfer-amount');
    const availableBalance=parseInt(getInnerText('available-balance'));
    const transferBankAccNum=getInputValue('transfer-bank-acc-number');
    const transferPin=getInputValue('transfer-pin')
    if(transferAmount>availableBalance || transferAmount<=0)
    {
        alert("Invalid Amount")
        return;
    }
    if(transferBankAccNum<11)
    {
        alert("Bank Account Number Must Be Equal or Greater than 11 digit")
        return;
    }
    if(transferPin!==pin)
    {
        alert("Invalid Pin!!!")
        return;
    }

    const newBalance=availableBalance-transferAmount;
    setInnerText('available-balance',newBalance);

    const data={
        name:'Money Transfer',
        date: new Date().toLocaleTimeString()
    }
    transcations.push(data)
    alert("Transaction Successfull!!!")



})


// Get Bonus Feature
document.getElementById('get-bonus-btn').addEventListener('click',function(e){
    e.preventDefault();
})


// Pay Bill Feature
document.getElementById('pay-bill-btn').addEventListener('click',function(e){
    e.preventDefault();
    
    const billPayBank=getInputValue('add-pay-bill-bank');
    const billPayBankAccNum=getInputValue('bill-acc-number');
    const billPayAmount=getInputNumber('pay-bill-amount');
    const availableBalance=parseInt(getInnerText('available-balance'));
    const billPayPin=getInputValue('pay-bill-pin')

    if(billPayBankAccNum<11)
    {
        alert("Bank Account Number Must Be Equal or Greater than 11 digit")
        return;
    }
    if(billPayPin!==pin)
    {
        alert("Invalid Pin!!!")
        return;
    }
    if(billPayAmount> availableBalance || billPayAmount<=0)
    {
        alert("Invalid AMount!!!")
        return;
    }

    const newBalance=availableBalance-billPayAmount;
    setInnerText('available-balance',newBalance);

    const data={
        name:'Bill Pay',
        date: new Date().toLocaleTimeString()
    }
    transcations.push(data)
    alert("Transaction Successfull!!!")

})






// Toggling Feature allForm

// clickon add money
document.getElementById('add-money-div').addEventListener('click',function(){


    toggleDisplay('Add-money-section');
    toggleActive('add-money-div');


})

// click cashout
document.getElementById('cash-out-div').addEventListener('click',function(){
    toggleDisplay('cash-out-section');
    toggleActive('cash-out-div');

})



    //click transfer money

document.getElementById('transfer-money-div').addEventListener('click',function(){

        toggleDisplay('transfer-money-section');
        toggleActive('transfer-money-div');


    })

    
//  Click Get Bonus 
document.getElementById('get-bonus-div').addEventListener('click',function(){
    toggleDisplay('get-bonus-section');
    toggleActive('get-bonus-div');

})   

// Click Pay Bill
document.getElementById('pay-bill-div').addEventListener('click',function(){
    toggleDisplay('pay-bill-section');
    toggleActive('pay-bill-div');

})

// Click Transaction
document.getElementById('transaction-div').addEventListener('click',function(){
    toggleDisplay('transaction-section');
    toggleActive('transaction-div');


    

    const cardContainer=document.getElementById('card-container')
    cardContainer.innerText="";
    for(const data of transcations)
    {
        const div=document.createElement('div');
        div.innerHTML=`
         <div class="card-container bg-white p-4 flex justify-between items-center rounded-xl mt-3">
         
            <div class="flex justify-between items-center">
                <div class="img-container bg-[#f4f5f7] rounded-full p-3">
                <img src="./assets/wallet1.png" alt="" class="mx-auto">
                </div>
                <div class="details-container ml-[15px]">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
                </div>
            </div>

            <i class="fa-solid fa-ellipsis-vertical"></i>
        
        </div>
        `

        cardContainer.appendChild(div);
    }
})
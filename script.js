document.getElementById('loginBtn').addEventListener('click',function(e)
{
    e.preventDefault();
    const mobileNum=12345678910;
    const pinNum=1234;
    const getPhoneNum=parseInt(document.getElementById('phoneNumberId').value);
    const getPinNum=parseInt(document.getElementById('pinNumId').value);
    if(getPhoneNum===mobileNum && getPinNum===pinNum)
    {
        window.location.href='./home.html';
    }
    else
    {
        alert("password or phone number incorrect")
    }

   

})
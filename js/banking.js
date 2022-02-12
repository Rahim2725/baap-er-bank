document.getElementById('deposit-button').addEventListener('click', function(){
    // deposit input balance
    const depositInput = document.getElementById('deposit-input');
    const depositeBalanceText = depositInput.value ; 
    const depositeBalance = parseFloat(depositeBalanceText); 

    //deposit balance
    const depositTotal = document.getElementById('deposit-total');
    const perviousDepositText = depositTotal.innerText ;
    const perviousDeposit = parseFloat(perviousDepositText);

    //total deposit balance
    const newDepoditTotal = perviousDeposit + depositeBalance; 
    depositTotal.innerText = newDepoditTotal;
   

    // update deposit  amount balance 
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal =  perviousBalanceTotal + depositeBalance;
    balanceTotal.innerText = newBalanceTotal;

    // clen deposit inpur value
    depositInput.value ='';
})

document.getElementById('Withdraw-button').addEventListener('click', function(){
    const WithdrawInput =document.getElementById('Withdraw-input');
    const withdrawBalanceText = WithdrawInput.value ;
    const withdrawBalance = parseFloat(withdrawBalanceText);

    const withdraw = document.getElementById('withdraw-total');
    const withdrawTotalText = withdraw.innerText ;
    const withdrawTotal = parseFloat(withdrawTotalText);

    // total withdraw balacne 
    const previousWithdrawBalance = withdrawTotal + withdrawBalance;
    withdraw.innerText = previousWithdrawBalance;

    //update withdraw balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText ;
    const totalAmountBalane = parseFloat(totalBalanceText);

    const previousWithdrawBalanceTotal = totalAmountBalane - previousWithdrawBalance;
    totalBalance.innerText = previousWithdrawBalanceTotal;

    // clean valu withdraw balance
    WithdrawInput.value ='';

})
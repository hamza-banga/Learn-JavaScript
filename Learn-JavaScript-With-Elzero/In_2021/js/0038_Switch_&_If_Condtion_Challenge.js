// Switch Statement 

// =============================================
let jop = "Devoloper";
let salary = 0; 

if (jop === "Manager" ) {
    salary = 8000;
    console.log(salary);
}else if (jop === "IT" || jop === "Support" ){ 
    salary = 6000;
    console.log(salary);
}else if ( jop === "Devoloper" || jop === "Designer" ) {
    salary = 7000;
    console.log(salary);
}else {
    salary = 4000;
    console.log(salary);
}
// ===========================================
switch ( jop ) {
    case "Manager" :
        salary = 8000;
        console.log(salary);
        break;
    case "IT" :
    case "Support" :
        salary = 6000;
        console.log(salary)
        break;
    case "Devoloper":
    case "Designer":
        salary = 7000;
        console.log(salary);
        break;
        default:
            salary = 4000;
            break;
        }
// =============================================
let holidays = 0;
let money = 0;
// =============================================
switch(holidays){
    case 0 :
        money = 5000;
        console.log(`My Moneny Is ${money} `)
        break;
    case 1 :
    case 2 :
        money = 3000;
        console.log(`My Money Is ${money}`)
        break;
    case 3:
        money = 2000;
        console.log(`My Money Is ${money} `);
        break;
    default:
        maoney = 1000;
        console.log(`My Money Is ${money}`)
        break;
}

// =============================================
if (holidays  === 0 ){
    maoney = 5000;
    console.log(`My Maoney Is ${maoney} `);
}else if(holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Maoney Is ${maoney} `);
}else if ( holidays === 3 ) {
    money = 2000;
    console.log(`My Maoney Is ${maoney} `);
}else{
    money = 1000;
    console.log(`My Money Is ${money}`)
}












// =============================================
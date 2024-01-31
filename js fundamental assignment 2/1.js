let arr = [
    "Aman" , "suraj" , "Shushma" , "Mithun" , "Payal", "Ajit"
];

function check (user){
    if( arr.includes(user)){
        console.log(`yes, ${user} is a valid user`)
    }
    else{
        console.log(`No, ${user} is not a valid user`)
    }
}


check("Aman");
check("Ayush");






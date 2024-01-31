let stuarr = [
    {
       name: "Mithun",
       marks: 95,

    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
         name: " Alka",
         marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },


]


function checkmarks (name){
    for(let student of stuarr){
        if(student.name === name){
               if(student.marks >= 90){
                console.log(`congratulation ${student.name} get 1st rank`)
            }
            else {
            console.log(` ${student.name} Got the average marks`)
        }
        }
        
    }
     
    console.log("invalid user");
}

checkmarks("Shivam");
checkmarks("ayush");
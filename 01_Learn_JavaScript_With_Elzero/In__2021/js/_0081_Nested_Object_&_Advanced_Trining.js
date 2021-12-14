let user = {
    name: "hamzoooz",
    age: 23,
    skills: ["HTML", "CSS", "JS"],
    available: true,
    /** Nested Object */
    addresses:{
        Sudan:"Khartoum",
        /** Nested Nested Object */
        KSA: {
            one:"Makkah al-Mukarramah",
            tow:"Almadina",
        },
    
    },
    /** Method Check Is Avalabal Or Not */
    checkAv: function(){
        if(user.available === true){
            return ` Free For Work `;
        }else{
            return ` Not Avalabale `;
        }
    },
};

console.log(user.name);     //  ->  hamzoooz
console.log(user.age);      // ->  23 
console.log(user.skills);  // -> ["HTML", "CSS", "JS"]
console.log(user.skills.join(" || "));  // -> HTML || CSS || JS
console.log(user.addresses.Sudan);  // ->  Khartoum
console.log(user["addresses"]["KSA"].one);  // ->  Makkah al-Mukarramah
console.log(user["addresses"]["KSA"]["one"]);  // ->  Makkah al-Mukarramah
console.log(user.checkAv());

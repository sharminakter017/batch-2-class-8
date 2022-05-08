
let studentName = prompt('Student Name');
let stuClass    = prompt('Student class');
let roll        = prompt('Class Roll');
let en          = prompt(' Enter your English Marks');
let bn          = prompt('Enter your Bangla Marks');
let math        = prompt('Enter your Math Marks');
let ss          = prompt(' Enter your Social Science Marks');
let science     = prompt('Enter your Science Marks');
let rel         = prompt('Enter your Religion Marks');


console.log(`

  Student Name  = ${studentName}
  Student Class = ${stuClass}
  Student roll  = ${roll}
  Student resut sheet 

    Subject name      Marks               GPA                      Grade                      CGPA

   English             ${en}          ${studentgpa(en)}            ${studentgrade(en)}       
   Bangla              ${bn}          ${studentgpa(bn)}            ${studentgrade(bn)}               
   Math                ${math}        ${studentgpa(math)}          ${studentgrade(math)}      
   Social science      ${ss}          ${studentgpa(ss)}            ${studentgrade(ss)}       
   Science             ${science }    ${studentgpa(science)}       ${studentgrade(science)}   
   Religion            ${rel}         ${studentgpa(rel)}           ${studentgrade(rel)}            




   

  

    

  












`)
    




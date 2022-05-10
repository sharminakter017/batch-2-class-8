

studentdata.map((data)=>{

  let results = '';

(data.english >= 33 && data.bangla >= 33 && data.math >= 33 && data.ss >= 33 && data.science >= 33 && data.rel >= 33)? results = 'Passed' :   results = 'failed';





 let cgpa = studentgpa(data.english) + studentgpa(data.bangla) + studentgpa(data.math) + studentgpa(data.ss) + studentgpa(data.science) + studentgpa(data.rel);
  cgpa = cgpa / 6 ;



  results == "Failed" ? cgpa = 0 : '';




console.log(`

  Student Name  = ${data.name}
  Student Class = ${data.class}
  Student roll  = ${data.roll}
 
  Student result sheet 

    Subject name      Marks                           GPA                                         Grade                      

   English             ${data.english}        ${studentgpa(data.english)}                ${studentgrade(data.english)}                
   Bangla              ${data.bangla}         ${studentgpa(data.bangla)}                 ${studentgrade(data.bangla)}               
   Math                ${data.math}           ${studentgpa(data.math)}                   ${studentgrade(data.math)}      
   Social science      ${data.ss}             ${studentgpa(data.ss)}                     ${studentgrade(data.ss)}       
   Science             ${data.science }       ${studentgpa(data.science)}                ${studentgrade(data.science)}   
   Religion            ${data.rel}            ${studentgpa(data.rel)}                    ${studentgrade(data.rel)}  
   =========================================================================================================================== 
                                                                  CGPA = ${cgpa.toFixed(2)}                                                              
                                                                  Final result = ${results}




`);



});

    





let gpa = '';
function studentgpa (mark) {

    if( mark >= 0 && mark <= 32  ){
         gpa = 0;
    }else if( mark >= 33 && mark < 40){
        gpa = 1.00;
   }else if( mark >= 40 && mark < 50){
       gpa = 2.00;
   }else if( mark >= 50 && mark < 60){
       gpa = 3.00;
   }else if ( mark >= 60 && mark < 70){
       gpa = 3.50;
   }else if( mark >= 70 && mark < 80 ){
       gpa = 4.00;
   }else if( mark >= 80 && mark <= 100){
       gpa = 5.00;
   };

   return gpa;


};


//   cgpa calculator

let grade = '';
function studentgrade (marks) {

    if( marks >= 0 && marks < 32  ){
        grade = 'F';
    }else if( marks >= 33 && marks < 40){
        grade = 'D';
   }else if( marks >= 40 && marks < 50){
        grade = 'C';
   }else if( marks >= 50 && marks < 60){
        grade = 'B';
   }else if( marks >= 60 && marks < 70){
        grade = 'A-';
   }else if( marks >= 70 && marks < 80 ){
        grade = 'A';
   }else if( marks >= 80 && marks <= 100){
        grade = 'A+';
   };
   return grade ; 


};






 

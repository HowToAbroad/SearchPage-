
//creating an empty matrix;

let cource_type_array = [];
let languag_array = [];
let semester_array = [];
let duration1_array = [];
let university_array = [];
let cource_array = [];


//calling the function
getData();
let tableLength = 0;

//way to fetch data
async function getData() {
    //to fetch and get response in text formate
    const response = await fetch('data2.csv');
    const data = await response.text();

    //creating array
    const Needed_header = ["university_name", "Course Type", "Course Name", "Teaching language", "Beginning Semester"];

    //this is for rendering the table header part
    const table_head = data.split('\n');
    const column_head = table_head[0].split(';');
    var div_head = document.createElement('div');
    div_head.className = 'header';

    column_head.forEach(row => {
        Needed_header.forEach(x => {
            // console.log(x);

            if (x == row) {
                var h1_head = document.createElement('h1');
                document.getElementsByClassName('header')[0].appendChild(h1_head).innerText = row;

            }
        })

        // console.log(row);
    })

    // console.log(column_head[0]);
    // console.log(column_head);


    //this is for rendering the table body part
    //slicing out the head part and getting the data in console in tabular formate
    const table = data.split('\n').slice(1);
tableLength = table.length;
tableData = table;

console.log(table);
let num = 0;

table.forEach(row => {
    const columns = row.split(';');

// for (var i =0; i<table.length; i++)
// {

//    const columns = table[i].split(';');
//    console.log("row "+ i);
//    console.log(columns[0]);
//    console.log(columns[1]);
//    console.log(columns[2]);
//    console.log(columns[3]);
//    console.log(columns[4]);
//    console.log(columns[5]);
//    console.log(columns[6]);

//    console.log(columns[8]);
//    console.log(columns[7]);
//    console.log(columns[9]);
//    console.log(columns[10]);
//    console.log(columns[11]);
//    console.log(columns[12]);
 

//    cource_type_array[num] =    columns[5]; 
//    language_array[num]=        columns[8];
//    duration_array[num]=        columns[16];
//    university_array[num]=      columns[3];
//    cource_array[num]=          columns[6];
//    semester_array[num]=        columns[14];
  
    //num++;
        cource_type_array[num] =  columns[5]; 
        languag_array[num]=columns[8];
        duration1_array[num]=columns[16];
        university_array[num]=columns[3];
        cource_array[num]=columns[6];
        semester_array[num]=columns[14];
   
  


   const university_name = columns[2];
   const course_type = columns[3];
   const course_name = columns[5];
   const language = columns[7];
   const duration_array = columns[10];
   const Germany_ranking = columns[1];
   const world_ranking = columns[0];
   const Beginning_semester = columns[9];
   const Course_website = columns[11];
   const submi_application = columns[12];
   const city = columns[4];
   const course_ranking = columns[6];





   //dynamically cards are created
   var Div_block = document.createElement('div');
   var Div_left = document.createElement('div');
   var Div_right = document.createElement('div');
   var Div_right1 = document.createElement('div');
   var Div_right2 = document.createElement('div');
   var Div_right3 = document.createElement('div');

   var div_university_name = document.createElement('div');
   var div_course_type = document.createElement('div');
   var div_course_name = document.createElement('div');
   var div_language = document.createElement('div');
   var div_duration = document.createElement('div');
   var div_germanranking = document.createElement('div');
   var div_world_ranking = document.createElement('div');
   var div_begining_semester = document.createElement('div');
   var div_course_website = document.createElement('div');
   var div_submit_application = document.createElement('div');
   var div_city = document.createElement('div');
   var div_course_ranking = document.createElement('div');
   

   var h2_uni_name = document.createElement('h2')
   var h2_course_type = document.createElement('h9')
   var h2_course_name = document.createElement('h10')
   var h2_language = document.createElement('h9')
   var h2_duration = document.createElement('h11')
   var h2_germanranking = document.createElement('h10')
   var h2_world_ranking = document.createElement('h9')
   var h2_begining_semester = document.createElement('h11')
   var h2_course_website = document.createElement('h12')
   var h2_submit_application = document.createElement('h12')
   var h2_city = document.createElement('h9')
   var h2_course_ranking = document.createElement('h10')


   Div_block.className = 'block';
   Div_left.className = 'left_card_part';
   Div_right.className = 'right_card_part';
   Div_right1.className = 'right1_card_part';
//    Div_right2.className = 'right2_card_part';
//    Div_right3.className = 'right3_card_part';
   div_university_name.className = 'university_name';



   
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_left);
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_left).appendChild(div_university_name).appendChild(h2_uni_name).innerHTML = university_name;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_world_ranking).appendChild(h2_world_ranking).innerHTML ="World Ranking:"+world_ranking;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_germanranking).appendChild(h2_germanranking).innerHTML ="Germany Ranking:"+Germany_ranking;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_course_type).appendChild(h2_course_type).innerHTML = course_type;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_course_name).appendChild(h2_course_name).innerHTML = course_name;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_course_ranking).appendChild(h2_course_ranking).innerHTML = "Course Ranking:"+course_ranking;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_language).appendChild(h2_language).innerHTML = language;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_city).appendChild(h2_city).innerHTML = "City:"+city;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_course_website).appendChild(h2_course_website).innerHTML = Course_website;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right1).appendChild(div_duration).appendChild(h2_duration).innerHTML = duration_array;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right1).appendChild(div_begining_semester).appendChild(h2_begining_semester).innerHTML = Beginning_semester;
   document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right1).appendChild(div_submit_application).appendChild(h2_submit_application).innerHTML = submi_application;



   // console.log(university_name, course_type, course_name, language, sesstion)*/
});
}



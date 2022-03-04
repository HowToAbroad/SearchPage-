//creating an empty matrix;
let cource_type_array = [];
let language_array = [];
let semester_array = [];
let duration_array = [];
let university_array = [];
let cource_array = [];

let table_body;
let table_head;

// let cource_array=[];

let tableLength = 0;


//calling the function
getData();

// way to fetch data
// async and await make promises easier to write" async makes a function return a Promise.
// await makes a function wait for a Promise.
async function getData() {
    //to fetch and get response in text formate
    const response = await fetch('data.csv');
    const data = await response.text();

    const table = data.split('\n');

    table_head = table[0].split(',');
    table_body = data.split('\n').slice(1);

    // console.log(table_head);
    // console.log(table_body);



    const Needed_header = ["university_name", "Course Type", "Course Name", "Teaching language", "Beginning Semester"];


    var div_head = document.createElement('div');
    div_head.className = 'header';


    table_head.forEach(row => {


        Needed_header.forEach(x => {

            if (x == row) {
                var h1_head = document.createElement('h1');
                document.getElementsByClassName('header')[0].appendChild(h1_head).innerText = row;

            }
        })

        // console.log(row);
    })



    tableLength = table_body.length;
    tableData = table_body;


    let num = 0;
    table_body.forEach(row => {
        const columns = row.split(',');



        cource_type_array[num] = columns[5];
        language_array[num] = columns[8];
        duration_array[num] = columns[16];
        university_array[num] = columns[3];
        cource_array[num] = columns[6];
        semester_array[num] = columns[14];

        num++;





        const university_name = columns[3];
        const course_type = columns[5];
        const course_name = columns[6];
        const language = columns[8];
        const sesstion = columns[16];
        const semester = columns[14];



        //dynamically cards are created
        var Div_block = document.createElement('div');
        var Div_left = document.createElement('div');
        var Div_right = document.createElement('div');

        var div_university_name = document.createElement('div');
        var div_course_type = document.createElement('div');
        var div_course_name = document.createElement('div');
        var div_language = document.createElement('div');
        var div_sesstion = document.createElement('div');
        var div_semester = document.createElement('div');

        var h2_uni_name = document.createElement('h2')
        var h2_course_type = document.createElement('h2')
        var h2_course_name = document.createElement('h2')
        var h2_language = document.createElement('h2')
        var h2_sesstion = document.createElement('h2')
        var h2_semester = document.createElement('h2')


        Div_block.className = 'block';
        Div_left.className = 'left_card_part';
        Div_right.className = 'right_card_part';
        div_university_name.className = 'university_name';




        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_left);
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_university_name).appendChild(h2_uni_name).innerText = university_name;
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_course_type).appendChild(h2_course_type).innerText = course_type;
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_course_name).appendChild(h2_course_name).innerText = course_name;
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_language).appendChild(h2_language).innerText = language;
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_sesstion).appendChild(h2_sesstion).innerText = sesstion;
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_semester).appendChild(h2_semester).innerText = semester;



        // console.log(university_name, course_type, course_name, language, sesstion)
    });


    //idea is to make matrix
    //first one storeArrays (store the filter needed columns)
    //second one uniqueListArray (store the unique values in filter need columns)
    let reference = [];
    let uniqueListArray = [];
    let storeArrays = [cource_type_array, language_array, duration_array, semester_array]
    let indx=0; 
    storeArrays.forEach(column => {
        reference = column;
        uniqueList = reference.filter(function (x, i, a) { 
            
        if(x!="" && x!='-')
             return a.indexOf(x) === i; 
        });
        uniqueListArray[indx] = uniqueList;
        indx++;
     
    })

   uniqueListArray.forEach(uniqueColumn=>{
      console.log(uniqueColumn);
   })
}




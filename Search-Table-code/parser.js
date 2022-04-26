
console.log("int the parser");
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

async function Execute()
{
    const data= await GetData();
    DataParser(data);
   
  


}
//calling the function
Execute();

// way to fetch data
// async and await make promises easier to write" async makes a function return a Promise.
// await makes a function wait for a Promise.

async function GetData()
{
    const response = await fetch('data.csv');
    const data = await response.text();
    //console.log(data);
    
    return data;
}
  
async function DataParser(data) {


    const table = data.split('\n');

    table_head = table[0].split(',');
    table_body = data.split('\n').slice(1);
    tableLength = table_body.length;
    console.log(tableLength);
    //time 

    var end1 = window.performance.now();
    //console.log(`Execution time of parcing: ${end1 - start1} ms`);




    const Needed_header = ["university_name", "World Ranking", "Germany Ranking ", "Course Type", "Course Name", "Teaching language", "Tution Fee (Per semester)", "Beginning Semester", "Duration"];
    var div_head = document.createElement('div');
    div_head.className = 'header';


    // table_head.forEach(row => {


    // Needed_header.forEach(x => {

    //     // if (x == row) {
    //     var h1_head = document.createElement('h1');
    //     document.getElementsByClassName('header')[0].appendChild(h1_head).innerText = x;

    //     // }
    // })

    // console.log(row);
    // })


    //start clock 

      //to check the time perios of parcing
    var start2 = window.performance.now();
    let num = 0;
    table_body.forEach(row => {
        const rows = row.split(',');
        
        // console.log(rows)
        let link = rows[4];
        cource_type_array[num] = rows[5];
        language_array[num] = rows[8];
        duration_array[num] = rows[16];
        university_array[num] = rows[3];
        cource_array[num] = rows[6];
        semester_array[num] = rows[14];
        num++;

        // console.log(rows[4]);



        //dynamically cards are created
        var Div_block = document.createElement('div');
        var Div_left = document.createElement('div');
        var Div_right = document.createElement('div');
        var Div_right2 = document.createElement('div');

        var div_university_name = document.createElement('div');
        var h2_uni_name = document.createElement('h2')

        var button_section = document.createElement('div');
        var button1 = document.createElement('button');
        // var h2_goto = document.createElement('h2')
        var button2 = document.createElement('button');
        // var h2_uni_name = document.createElement('h2')



        // //manual work
        // var div_ele1 = document.createElement('div');
        // var h2_ele1 = document.createElement('h2');

        // document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_ele1).appendChild(h2_ele1).innerText =  rows[5];


        Div_block.className = 'block';
        Div_left.className = 'left_card_part';
        Div_right.className = 'right_card_part';
        Div_right2.className = 'right_card_part2';
        div_university_name.className = 'university_name';
        button_section.className = 'button_section';



        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_left);

        //append image
        var img = document.createElement("img");
        img.src = "https://i0.wp.com/howtoabroad.com/wp-content/uploads/2022/02/GUC-Berlin.jpg";
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_left).appendChild(img);
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_university_name).appendChild(h2_uni_name).innerHTML = link;
         
        console.log(rows[12])
        
        //table data with it's name      
        let i = 0;
        rows.forEach(ele => {


            
            if (table_head[i] != "_Sr No." && table_head[i] != "_University Name" && table_head[i] != "_Daad SIte" && ele != '' && table_head[i] != "University Name" && table_head[i]!="Go to course website" && table_head[i] !="Submit application to") {
                var div_ele = document.createElement('div');
                var h2_ele = document.createElement('h2');

                document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(div_ele).appendChild(h2_ele).innerText = table_head[i] + " : " + ele;
            }
            i++;
            
        })
        
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(button_section).appendChild(button2).innerHTML = rows[17];
        document.getElementsByTagName('div')[1].appendChild(Div_block).appendChild(Div_right).appendChild(button_section).appendChild(button1).innerHTML = rows[18];
        

    });
    
    var end2 = window.performance.now();
    console.log(`Execution time of insertion: ${end2 - start2} ms`);

    //creating button

    //idea is to make matrix
    //first one storeArrays (store the filter needed rows)
    //second one uniqueListArray (store the unique values in filter need rows)
    let reference = [];
    let uniqueListArray = [];
    let storeArrays = [cource_type_array, language_array, duration_array, semester_array]
    let indx = 0;
    storeArrays.forEach(column => {
        reference = column;
        uniqueList = reference.filter(function (x, i, a) {

            if (x != "" && x != '-' && x != "00\"")
                return a.indexOf(x) === i;
        });
        uniqueListArray[indx] = uniqueList;
        indx++;

    })
    // uniqueListArray.forEach(ele => {
    //     console.log(ele);
    // })

    //inserting unique element in the option
    //making an array to store all the select ids
    let select_ids = ["Course_type", "Teaching_language", "Duration", "Beginning_semester"];

    for (let i = 0; i < select_ids.length; i++) {
        //creating select by taking select ids
        let select = document.getElementById(select_ids[i]);
        //creating options
        var options = [];
        var option = document.createElement('option');

        //fethcing unique list from uniqueListarray
        uniqueListArray[i].forEach(ele => {

            //var data = '<option value="' + escapeHTML(i) +'">" + escapeHTML(i) + "</option>';
            option.text = option.value = ele;
            options.push(option.outerHTML);

        })

        //inserting in the select (id given already)
        select.insertAdjacentHTML('beforeEnd', options.join('\n'));
    }
}

//size of table initialy


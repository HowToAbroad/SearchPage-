
//array
let input_type = 'NULL';
let input_lang = 'NULL';
let input_session = 'NULL';
let input_duration = 'NULL';

//random filter
let input_cource = 'NULL';
let input_name = 'NULL';
// let tr = document.getElementsByTagName('tr');


// multifilter function

//find the total length of the table
function multifilter(t, l, s, d, c, n) {

    // console.log("inside the multifunction")
    // console.log(tableLength);
   
  
    for (let i = 0; i < tableLength; i++) {
        console.log("in the console");
        //for course type
        td_type = cource_type_array[i].toUpperCase();
        td_lang = language_array[i].toUpperCase();
        td_session =semester_array[i].toUpperCase(); 
        td_duration = duration_array[i].toUpperCase();
        // console.log(td_type);
        
        
        td_name = university_array[i].toUpperCase();
        td_cource = cource_array[i].toUpperCase();
        
        if ((t == 'NULL' || td_type.slice(0, 6) == t.slice(0, 6) || t == "") && (l == 'NULL' || (td_lang.indexOf(l) > -1))
        && (s == 'NULL' || (td_session.indexOf(s) > -1)) && (d == 'NULL' || (td_duration.indexOf(d) > -1))
        && (c == 'NULL' || (td_cource.indexOf(c) > -1)) && (n == 'NULL' || (td_name.indexOf(n) > -1))) {
            // console.log("working");
            
            document.getElementsByClassName("block")[i].style.display = '';
    
        }
        
        
        else {
            // console.log("hmmm")
            document.getElementsByClassName("block")[i].style.display = "none";
            
        }
    }
}

//number of pages rendering
// var activities_row_render = document.getElementById("size");
// activities_row_render.addEventListener("change",function(){
//     size_value = document.getElementById("size").value.toUpperCase();
//     console.log(tableLength);
    
//     for(let i=size_value;i<=tableLength;i++){
     
//         document.getElementsByClassName("block")[i].style.display = "none";
//     }
// });



//-----------------------dropdown----------------------------------
//onchange course type
var activities = document.getElementById("Course_type");

activities.addEventListener("change", function() {
    

    input_type = document.getElementById("Course_type").value.toUpperCase();
    // console.log(input_type);
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);
    
    
});


//onchange teaching language
var activities_lang = document.getElementById("Teaching_language");
activities_lang.addEventListener("change", function() {
    
    input_lang = document.getElementById("Teaching_language").value.toUpperCase();
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);
        
    });
    
    
    
    //onchange Beginning Semester
    var activities_sem = document.getElementById("Beginning_semester");
    activities_sem.addEventListener("change", function() {
        
        // console.log('u can do anything');
        input_session = document.getElementById("Beginning_semester").value.toUpperCase();
        multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);
        
        
});



//onchange of duration
var activities_duration = document.getElementById("Duration");
activities_duration.addEventListener("change", function() {

    input_duration = document.getElementById("Duration").value.toUpperCase();
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);

});



//------random search----------
// Cource Name
var activities_cource = document.getElementById("search_course");
activities_cource.addEventListener("keyup", function() {
    
    input_cource = document.getElementById('search_course').value.toUpperCase();
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);
    
    
});

var activities_name = document.getElementById("search_name");
activities_name.addEventListener("keyup", function() {
    
    input_name = document.getElementById('search_name').value.toUpperCase();
    // console.log(input_name);
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);
});




// console.log("in logic js");


//window is loading
window.addEventListener('load', function() {
    console.log('All assets are loaded')

//autmation on filters
let type_index = 0, lang_index = 0, sess_index = 0, duration_index = 0, cource_index = 0, name_index = 0;


// let first_tr = document.getElementsByTagName('tr')[0].getElementsByTagName('td').length;
let first_tr = document.getElementsByTagName('tr')[0];
let length_column = first_tr.getElementsByTagName('td').length;
// console.log(length_column);
// let thead = document.getElementsByTagName('thead');
// let head_tr = thead[0].getElementsByTagName('tr')[0];
// let length_column = head_tr.querySelectorAll('th').length;


for (let i = 0; i < length_column; i++) {

    let each_column_name = document.getElementsByTagName('tr')[0].getElementsByTagName('td')[i].innerHTML.toUpperCase();
    // console.log(each_column_name);

    if (each_column_name == 'COURSE TYPE') {
        type_index = i;
    }
    else if (each_column_name == 'TEACHING LANGUAGE') {
        lang_index = i;
    }
    else if (each_column_name == 'BEGINNING SEMESTER') {
        sess_index = i;
    }
    else if (each_column_name == 'DURATION') {
        duration_index = i;
    }

    else if (each_column_name == '_UNIVERSITY NAME') {
        name_index = i;
    }

    else if (each_column_name == 'COURSE NAME') {
        cource_index= i;
    }

// console.log(type_index);
// console.log(lang_index);
// console.log(sess_index);
// console.log(duration_index);
// console.log(name_index);
// console.log(cource_index);
}





//dropdown filter





let input_type = 'NULL';
let input_lang = 'NULL';
let input_session = 'NULL';
let input_duration = 'NULL';

//random filter
let input_cource = 'NULL';
let input_name = 'NULL';
let tr = document.getElementsByTagName('tr');


// multifilter function
function multifilter(t, l, s, d, c, n) {


    for (let i = 1; i < tr.length; i++) {
        //for course type
        td_type = tr[i].getElementsByTagName("td")[type_index].innerHTML.toUpperCase();
        td_lang = tr[i].getElementsByTagName("td")[lang_index].innerHTML.toUpperCase();
        td_session = tr[i].getElementsByTagName("td")[sess_index].innerHTML.toUpperCase();
        td_duration = tr[i].getElementsByTagName("td")[duration_index].innerHTML.toUpperCase();
    


        td_cource = tr[i].getElementsByTagName("td")[cource_index].innerHTML.toUpperCase();
        td_name = tr[i].getElementsByTagName('td')[name_index].innerText.toUpperCase()

        if ((t == 'NULL' || td_type.slice(0, 6) == t.slice(0, 6) || t == "") && (l == 'NULL' || (td_lang.indexOf(l) > -1))
            && (s == 'NULL' || (td_session.indexOf(s) > -1)) && (d == 'NULL' || (td_duration.indexOf(d) > -1))
            && (c == 'NULL' || (td_cource.indexOf(c) > -1)) && (n == 'NULL' || (td_name.indexOf(n) > -1))) {
            // console.log("working");
            tr[i].style.display = '';
        }
     

        else {
            // console.log("hmmm")
            tr[i].style.display = "none";
        }
    }
}

//---------------------dropdown----------------------------------
//onchange course type
var activities = document.getElementById("Course_type");

activities.addEventListener("change", function() {

    //   console.log("hy everyone");
     input_type = document.getElementById("Course_type").value.toUpperCase();
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



})




















//autmation on filters
let type_index = 0, lang_index = 0, sess_index = 0, duration_index = 0, cource_index = 0, name_index = 0;

let thead = document.getElementsByTagName('thead');
let head_tr = thead[0].getElementsByTagName('tr')[0];
let length_column = head_tr.querySelectorAll('th').length;


for (let i = 0; i < length_column; i++) {

    let each_column_name = head_tr.getElementsByTagName('th')[i].innerHTML.toUpperCase();
    console.log(each_column_name);

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
    
    else if (each_column_name == 'UNIVERSITY NAME') {
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


function multifilter(t, l, s, d, c, n) {

    //  console.log(t);
    //  console.log(l);
    //  console.log(s);
    //  console.log(d);


    for (let i = 1; i < tr.length; i++) {
        //for course type
        td_type = tr[i].getElementsByTagName("td")[type_index].innerHTML.toUpperCase();
        td_lang = tr[i].getElementsByTagName("td")[lang_index].innerHTML.toUpperCase();
        td_session = tr[i].getElementsByTagName("td")[sess_index].innerHTML.toUpperCase();
        td_duration = tr[i].getElementsByTagName("td")[duration_index].innerHTML.toUpperCase();

        td_cource = tr[i].getElementsByTagName("td")[cource_index].innerHTML.toUpperCase();
        td_name = tr[i].getElementsByTagName('td')[name_index].getElementsByTagName('a')[0].innerText.toUpperCase()

        if ((t == 'NULL' || td_type.slice(0, 6) == t.slice(0, 6) || t == "") && (l == 'NULL' || (td_lang.indexOf(l) > -1))
            && (s == 'NULL' || (td_session.indexOf(s) > -1)) && (d == 'NULL' || (td_duration.indexOf(d) > -1))
            && (c == 'NULL' || (td_cource.indexOf(c) > -1)) && (n == 'NULL' || (td_name.indexOf(n) > -1))) {
            // console.log("working");
            tr[i].style.display = '';
        }
        // else if(t==""){
        //     tr[i].style.display = '';

        // }

        else {
            // console.log("hmmm")
            tr[i].style.display = "none";
        }
    }
}




//---------------------dropdown----------------------------------
//onchange course type
function courseType() {

    input_type = document.getElementById("Course_type").value.toUpperCase();
    // console.log('----------')
    // console.log(input_type)
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);

}


//onchange teaching language
function language() {
    input_lang = document.getElementById("Teaching_language").value.toUpperCase();
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);


}

//onchange Beginning Semester
function session() {
    // console.log('u can do anything');
    input_session = document.getElementById("Beginning_semester").value.toUpperCase();
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);

}

//onchange of duration
function duration() {

    input_duration = document.getElementById("Duration").value.toUpperCase();
    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);


}



//------random search----------
function searchFunc1() {
    input_cource = document.getElementById('search_course').value.toUpperCase();
    // console.log(input_name);

    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);

}

function searchFunc2() {
    input_name = document.getElementById('search_name').value.toUpperCase();
    // console.log(input_name);

    multifilter(input_type, input_lang, input_session, input_duration, input_cource, input_name);

}



























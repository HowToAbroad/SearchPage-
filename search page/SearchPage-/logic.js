//get all the tr tag
// console.log(tr.length);
let tr = document.getElementsByTagName('tr');

function searchFunc1() {
    let input_name = document.getElementById('search_course').value.toUpperCase();
    console.log(input_name);
    
    
    
    for (let i = 1; i < tr.length; i++) {
        //for course type
        let td1 = tr[i].getElementsByTagName("td")[4].innerHTML;
        
        if (td1.toUpperCase().indexOf(input_name) > -1) {
            tr[i].style.display = '';
        }
        
        else {
            tr[i].style.display = "none";
        }
    }
}


//onchange course type
function courseType() {

    let input_type = document.getElementById("Course_type").value.toUpperCase();
    console.log(input_type)
    let td1 = tr[1].getElementsByTagName("td")[3].innerHTML.toUpperCase();

    // let td1 = tr[1].getElementsByTagName("td")[3].innerHTML.toUpperCase();
    // // console.log(td1);
    // console.log(td1.slice(0, 6) == input.slice(0, 6))
      
    for (let i = 1; i < tr.length; i++) {
        //for course type
        td = tr[i].getElementsByTagName("td")[3].innerHTML.toUpperCase();
        console.log("----");
        console.log(td);
        if (td.slice(0, 6) == input_type.slice(0, 6)) {
            tr[i].style.display = '';
        }
        
        else {
            tr[i].style.display = "none";
        }
    }
}


//onchange teaching language
function language(){
    let input_lang = document.getElementById("Teaching_language").value.toUpperCase();
 
    for (let i = 1; i < tr.length; i++) {
        //for course type
        td = tr[i].getElementsByTagName("td")[5].innerHTML.toUpperCase();
        console.log("----");
        console.log(td);
        if (td.indexOf(input_lang) >-1) {
            tr[i].style.display = '';
        }
        
        else {
            tr[i].style.display = "none";
        }
    }
} 

//onchange Beginning Semester
function session(){
    // console.log('u can do anything');
    let input_session = document.getElementById("Beginning_semester").value.toUpperCase();
    console.log(input_session);
        td = tr[1].getElementsByTagName("td")[7].innerHTML.toUpperCase();
        console.log(td);

    for (let i = 1; i < tr.length; i++) {
        //for course type
        td = tr[i].getElementsByTagName("td")[7].innerHTML.toUpperCase();
        console.log("----");
        console.log(td);
        if (td.indexOf(input_session) >-1) {
            tr[i].style.display = '';
        }
        
        else {
            tr[i].style.display = "none";
        }
    }
}

//onchange of duration
function duration(){

    let input_duration = document.getElementById("Duration").value.toUpperCase();
   

    for (let i = 1; i < tr.length; i++) {
        //for course type
        td = tr[i].getElementsByTagName("td")[8].innerHTML.toUpperCase();
        console.log("----");
        console.log(td);
        if (td== input_duration) {
            tr[i].style.display = '';
        }
        
        else {
            tr[i].style.display = "none";
        }
    }
  

}






























//for university name
// let td = tr[1].getElementsByTagName('td')[2].getElementsByTagName('a');


// tr[1].getElementsByTagName('td')[2].getElementsByTagName('a')[0].innerText.toUpperCase()
// let a = td.getElementsByTagName('a');

// let a = td.getElementsByTagName('a')
// console.log(td);
// console.log(a);

// function searchFunc2() {

//     let input_name = document.getElementById('search_course').value.toUpperCase();

//     for (let i = 2; i < tr.length; i++) {

//         let td2 = tr[i].getElementsByTagName("td")[4].innerHTML;
//         if (td2.toUpperCase().indexOf(input_name) > -1) {
//             tr[i].style.display = '';
//        }
//         else {
//             tr[i].style.display = "none";
//         }



//     }
// }

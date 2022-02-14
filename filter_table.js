// window is loading
window.addEventListener('load', function () {
    console.log("whindow loaded")
    console.log("in filter table");

    let tr = document.getElementsByTagName('tr');
    let first_tr = document.getElementsByTagName('tr')[0];
    let length_column = first_tr.getElementsByTagName('td').length;
   
    for (let i = 0; i < length_column; i++) {
        let each_column_name = first_tr.getElementsByTagName('td')[i].innerHTML.toUpperCase();
        // console.log("hey i am here")
      
        if (each_column_name.indexOf('_') > -1) {
            console.log(each_column_name);

            for (let j = 0; j < tr.length; j++) {
                document.getElementsByTagName('tr')[j].getElementsByTagName('td')[i].style.display = "none";
            }
        }
    }
})
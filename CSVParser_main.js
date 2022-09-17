const URL_TO_Check = "https://howtoabroad.github.io/SearchPage/yolo.json";
const URL_Search_Parameter = new URLSearchParams(location.search);

let Current_Index = 0;
let PageSize = 1;
let CollegeList = [];
let Items_To_Show = 10;
let prev_page_id = 1;
class College {
  constructor(
    World_Ranking,
    German_Ranking,
    University_Name,
    HTA_Uni_Link,
    Course_Type,
    City,
    State,
    Course_Name,
    Course_Sub_Type,
    Course_Ranking,
    Teaching_Language,
    Language_Requirement,
    Admission_IELTS_TOFEL,
    Required_German_Grade,
    GRE,
    Tuition_Fee,
    Tuition_Fee_Per,
    Semester_Start,
    Application_Deadline_Winter,
    Application_Deadline_Summer,
    Duration,
    Course_Link,
    Application_Link,
    Logo,
    Updated
  ) {
    this.World_Ranking = World_Ranking == "" ? "NA" : World_Ranking;

    this.Rank_sort_world = World_Ranking == "NA" ? 10000 : World_Ranking;

    this.German_Ranking = German_Ranking == "" ? "NA" : German_Ranking;

    this.Rank_sort_germany = German_Ranking == "NA" ? 10000 : German_Ranking;

    this.University_Name = University_Name == "" ? "NA" : University_Name;
    this.HTA_Uni_Link = HTA_Uni_Link == "" ? "none" : HTA_Uni_Link;
    this.Course_Type = Course_Type == "" ? "NA" : Course_Type;
    this.City = City;
    this.State = State;
    this.Course_Name = Course_Name == "" ? "NA" : Course_Name;
    this.Course_Sub_Type = Course_Sub_Type;
    this.Course_Ranking = Course_Ranking == "" ? "NA" : Course_Ranking;
    this.Teaching_Language = Teaching_Language == "" ? "NA" : Teaching_Language;
    this.Language_Requirement =
      Language_Requirement == "" ? "NA" : Language_Requirement;
    this.Admission_IELTS_TOFEL =
      Admission_IELTS_TOFEL == "" ? "NA" : Admission_IELTS_TOFEL;
    this.Required_German_Grade =
      Required_German_Grade == "" ? "NA" : Required_German_Grade;
    this.GRE = GRE == "" ? "NA" : GRE;
    this.Tuition_Fee = Tuition_Fee == "" ? "NA" : Tuition_Fee;

    this.new_Tuition_Fee = setcurrency(Tuition_Fee);
    this.Tuition_Fee_Per=Tuition_Fee_Per;
    this.Semester_Start = Semester_Start == "" ? "NA" : Semester_Start;
    this.Application_Deadline_Winter =
      Application_Deadline_Winter == "" ? "NA" : Application_Deadline_Winter;
    this.Application_Deadline_Summer =
      Application_Deadline_Summer == "" ? "NA" : Application_Deadline_Summer;
    this.Duration = Duration == "" ? "NA" : Duration;
    this.Course_Link = Course_Link == "" ? "NA" : Course_Link;
    this.Application_Link = Application_Link == "" ? "none" : Application_Link;
    this.Logo = Logo;
    this.Updated = Updated;
  }
}
Execute();

async function Execute() {
  const data = await GetData();
  new_data_parser(data);
  Fill_Value();
  // after data is loaded
  if (URL_Search_Parameter != null) {
    if (URL_Search_Parameter != null) {
      Search_Name_Uni.value = URL_Search_Parameter.get("uniName");
      Search_Name_Course.value = URL_Search_Parameter.get("course");
      Search_Course_type.value = URL_Search_Parameter.get("courseType");
      //Search_Language_teaching.values = URL_Search_Parameter.get("courseTypeLanguages");
      //console.log(URL_Search_Parameter.get('course'));
    }
    Search_Uni_Course();
  } else {
    Pagination(CollegeList, Items_To_Show);
  }
  //Rendering(CollegeList);
}

async function GetData() {
  const response = await fetch(URL_TO_Check);
  const data = await response.text();
  //console.log(data);
  return data;
}

function new_data_parser(data) {
  var datalist = JSON.parse(data);
  //console.log(datalist);
  let num = 0;
  for (const item of datalist) {
    CollegeList[num] = new College(
      item.World_Ranking,
      item.German_Ranking,
      item.University_Name,
      item.HTA_Uni_Link,
      item.Course_Type,
      item.City,
      item.State,
      item.Course_Name,
      item.Course_Sub_Type,
      item.Course_Ranking,
      item.Teaching_Language,
      RemoveWhiteSpaces(item.Language_Requirement),
      item.Admission_IELTS_TOFEL,
      item.Required_German_Grade,
      item.GRE,
      item.Tuition_Fee,
      item.Tuition_Fee_Per,
      //item.Semester_Start.replace(/ /g, ""),
      RemoveWhiteSpaces(item.Semester_Start) ,
      item.Application_Deadline_Winter,
      item.Application_Deadline_Summer,
      item.Duration,
      item.Course_Link,
      item.Application_Link,
      item.Logo,
      item.Updated
    );
    num++;
  }

  //console.log(CollegeList);
}

function RemoveWhiteSpaces(str)
{
  var list= str.split(",");
  list.forEach((element)=>{
    if(element.startsWith(" ")){
      element=element.replace(/ /g, "");
    }

  }) 
  return list.join();

}

//datalist - whole data
//current index-> page number
function Rendering(dataList, data_to_process) {
  var display_number = document.getElementById("Display_number");

  Display_Pagedata(data_to_process, Current_Index, display_number);

  if (dataList == "") {
    display_number.innerHTML =
      "Data Not Available, Please choose other options from the filter";
    var container = document.getElementById("pagination");
    container.innerHTML = "";
    return;
  }
  let l = dataList.length;
  //console.log(CollegeList.length);
  // e_3.setAttribute("style", `background-color : ${randomColor()} `);
  //  e_46.addEventListener("click", urlResolver.bind(null, dataList[i].Course_Link))
  //e_47.addEventListener("click", urlResolver.bind(null, dataList[i].Application_Link))
  for (let i = 0; i < l; i++) {
    var container = document.getElementById("List_of_University");
    var e_0 = document.createElement("div");

    e_0.setAttribute("class", "container mt-5 mb-5");
    e_0.setAttribute("bis_skin_checked", "1");
    var e_1 = document.createElement("div");
    e_1.setAttribute("class", "d-flex justify-content-center row");
    e_1.setAttribute("bis_skin_checked", "1");
    var e_2 = document.createElement("div");
    e_2.setAttribute("class", "col-md-10");
    e_2.setAttribute("bis_skin_checked", "1");
    e_2.setAttribute("style", "background-color: #e5e8e8");
    var e_3 = document.createElement("div");
    e_3.setAttribute("class", "row p-2 border rounded");
    e_3.setAttribute("bis_skin_checked", "1");
    var e_4 = document.createElement("div");
    e_4.setAttribute("class", "col-md-3 mt-1");
    e_4.setAttribute("bis_skin_checked", "1");
    var e_5 = document.createElement("img");
    e_5.setAttribute("class", "img-fluid img-responsive rounded product-image");

    e_5.setAttribute("src", dataList[i].Logo);

    e_5.setAttribute("loading", "lazy");
    e_4.appendChild(e_5);
    var e_6 = document.createElement("hr");
    e_4.appendChild(e_6);
    var e_7 = document.createElement("a");
    e_7.setAttribute("href", dataList[i].HTA_Uni_Link);
    e_7.setAttribute("target", "_blank");
    var e_8 = document.createElement("h5");
    e_8.setAttribute("style", "color: black");
    e_8.appendChild(document.createTextNode(dataList[i].University_Name));
    e_7.appendChild(e_8);
    e_4.appendChild(e_7);
    var e_9 = document.createElement("h6");
    e_9.setAttribute("class", "text-primary");
    e_9.appendChild(
      document.createTextNode("World Ranking : " + dataList[i].World_Ranking)
    );
    var e_10 = document.createElement("br");
    e_9.appendChild(e_10);
    e_9.appendChild(
      document.createTextNode("Germany Ranking : " + dataList[i].German_Ranking)
    );
    e_4.appendChild(e_9);
    var e_11 = document.createElement("hr");
    e_4.appendChild(e_11);
    var e_12 = document.createElement("h6");
    e_12.appendChild(document.createTextNode(dataList[i].City));
    e_4.appendChild(e_12);
    var e_13 = document.createElement("h6");
    e_13.appendChild(document.createTextNode("State : " + dataList[i].State));
    e_4.appendChild(e_13);
    e_3.appendChild(e_4);
    var e_14 = document.createElement("div");
    e_14.setAttribute("class", "col-md-6 mt-1");
    e_14.setAttribute("bis_skin_checked", "1");
    var e_15 = document.createElement("div");
    e_15.setAttribute("class", "d-flex flex-row");
    e_15.setAttribute("bis_skin_checked", "1");
    var e_16 = document.createElement("div");
    e_16.setAttribute("class", "ratings mr-2");
    e_16.setAttribute("bis_skin_checked", "1");
    e_15.appendChild(e_16);
    var e_17 = document.createElement("span");
    var e_18 = document.createElement("h2");
    e_18.setAttribute("class", "text-dark");
    e_18.appendChild(document.createTextNode(dataList[i].Course_Name));
    e_17.appendChild(e_18);
    var e_19 = document.createElement("hr");
    e_17.appendChild(e_19);
    var e_20 = document.createElement("h4");
    e_20.setAttribute("class", "text-dark");
    e_20.appendChild(
      document.createTextNode("Degree : " + dataList[i].Course_Type)
    );    
    e_17.appendChild(e_20);
    var e_88 = document.createElement("h4");
    if(dataList[i].Course_Type != dataList[i].Course_Sub_Type){
    e_88.appendChild(
      document.createTextNode("Stream : " + dataList[i].Course_Sub_Type)
    );
    e_17.appendChild(e_88);
  }
    var e_21 = document.createElement("b");
    e_21.setAttribute("class", "mt-1");
    e_21.appendChild(
      document.createTextNode(
        "Beginning Semester : " + dataList[i].Semester_Start
      )
    );
    e_17.appendChild(e_21);
    var e_22 = document.createElement("br");
    e_17.appendChild(e_22);
    var e_23 = document.createElement("p");
    e_23.setAttribute("class", "text-justify text-truncate para mb-0");
    e_17.appendChild(e_23);
    var e_24 = document.createElement("h6");
    e_24.setAttribute("class", "text-success mt-1");
    e_24.appendChild(
      document.createTextNode("Duration : " + dataList[i].Duration)
    );
    e_17.appendChild(e_24);
    var e_25 = document.createElement("h6");
    e_25.setAttribute("class", "text-success mt-1");
    e_25.appendChild(
      document.createTextNode(
        "Teaching Language: " + dataList[i].Teaching_Language
      )
    );
    e_17.appendChild(e_25);
    if (dataList[i].Required_German_Grade != "NA") {
      var e_26 = document.createElement("h6");
      e_26.appendChild(
        document.createTextNode(
          "German Grade Requirement : " + dataList[i].Required_German_Grade
        )
      );
      e_17.appendChild(e_26);
    }
    var e_27 = document.createElement("hr");
    e_17.appendChild(e_27);
    var e_28 = document.createElement("span");
    if (dataList[i].Course_Ranking != "NA") {
      var e_29 = document.createElement("h6");

      e_29.appendChild(
        document.createTextNode(
          "Course Germany Ranking : " + dataList[i].Course_Ranking
        )
      );
      e_28.appendChild(e_29);
    }
    if (dataList[i].Admission_IELTS_TOFEL != "NA") {
      var e_30 = document.createElement("h6");
      e_30.appendChild(
        document.createTextNode(
          "Mandatory IELTS/TOEFL : " + dataList[i].Admission_IELTS_TOFEL
        )
      );
      e_28.appendChild(e_30);
    }
    if (dataList[i].Language_Requirement != "NA") {
      var e_31 = document.createElement("h6");
      e_31.appendChild(
        document.createTextNode(
          "Language Requirement : " + dataList[i].Language_Requirement
        )
      );
      e_28.appendChild(e_31);
    }
    if (dataList[i].GRE != "NA") {
      var e_32 = document.createElement("h6");
      e_32.appendChild(document.createTextNode("GRE : " + dataList[i].GRE));
      e_28.appendChild(e_32);
    }
    e_17.appendChild(e_28);
    e_15.appendChild(e_17);
    e_14.appendChild(e_15);
    e_3.appendChild(e_14);
    var e_33 = document.createElement("div");
    e_33.setAttribute(
      "class",
      "align-items-center align-content-center col-md-3 border-left mt-1"
    );
    e_33.setAttribute("bis_skin_checked", "1");
    var e_34 = document.createElement("div");
    e_34.setAttribute("class", "d-flex flex-row align-items-center");
    e_34.setAttribute("bis_skin_checked", "1");
    var e_35 = document.createElement("span");
    e_35.setAttribute("class", "text-primary");
    var e_36 = document.createElement("h6");
    e_36.appendChild(
      document.createTextNode("Tuition Fee : " + dataList[i].Tuition_Fee)
    );
    if(dataList[i].Tuition_Fee_Per!=""){
      e_36.appendChild(
        document.createTextNode("/" + dataList[i].Tuition_Fee_Per)
      );
    }
   
    e_35.appendChild(e_36);
    var e_37 = document.createElement("br");
    e_35.appendChild(e_37);
    e_34.appendChild(e_35);
    e_33.appendChild(e_34);
    var e_38 = document.createElement("hr");
    e_33.appendChild(e_38);
    if (
      dataList[i].Application_Deadline_Summe != "NA" &&
      dataList[i].Application_Deadline_Winter != "NA"
    ) {
      var e_39 = document.createElement("h6");
      e_39.setAttribute("class", "text-info");
      e_39.appendChild(document.createTextNode("Application Deadline"));
      e_33.appendChild(e_39);
      if (dataList[i].Application_Deadline_Summer != "NA") {
        var e_40 = document.createElement("h6");
        e_40.setAttribute("class", "text-danger");
        e_40.appendChild(
          document.createTextNode(
            "Summer : " + dataList[i].Application_Deadline_Summer
          )
        );
        e_33.appendChild(e_40);
      }
      if (dataList[i].Application_Deadline_Winter != "NA") {
        var e_41 = document.createElement("h6");
        e_41.setAttribute("class", "text-danger");
        e_41.appendChild(
          document.createTextNode(
            "Winter : " + dataList[i].Application_Deadline_Winter
          )
        );
        e_33.appendChild(e_41);
      }

      var e_42 = document.createElement("hr");
      e_33.appendChild(e_42);
    }
    var e_43 = document.createElement("div");
    e_43.setAttribute("class", "d-flex flex-column mt-4 flex-row");
    e_43.setAttribute("bis_skin_checked", "1");

    if (dataList[i].Course_Link != "none" && dataList[i].Course_Link != "NA") {
      var e_44 = document.createElement("a");
      e_44.setAttribute("class", "btn btn-primary btn-sm");
      e_44.addEventListener(
        "click",
        urlResolver.bind(null, dataList[i].Course_Link)
      );
      e_44.appendChild(document.createTextNode(" Course website"));
      e_43.appendChild(e_44);
    }
    if (
      !dataList[i].Application_Link.includes("@") &&
      dataList[i].Application_Link != "none" &&
      dataList[i].Application_Link != "NA"
    ) {
      var e_45 = document.createElement("button");
      e_45.setAttribute("class", "btn btn-outline-info btn-sm mt-2 flex-row");
      e_45.addEventListener(
        "click",
        urlResolver.bind(null, dataList[i].Application_Link)
      );
      e_45.appendChild(document.createTextNode("\nSubmit Application\n"));
      e_43.appendChild(e_45);
    }
    if (dataList[i].Application_Link.includes("@")) {
      var e_46 = document.createElement("button");
      e_46.setAttribute("class", "btn btn-outline-info btn-sm mt-2 flex-row");
      e_46.appendChild(document.createTextNode("\nEmail\n"));
      e_43.appendChild(e_46);
    }
    e_33.appendChild(e_43);
    if (dataList[i].Updated != "") {
      var e_47 = document.createElement("p");
      e_47.setAttribute("class", "mt-5");
      e_47.appendChild(
        document.createTextNode("Last Updated on : " + dataList[i].Updated)
      );
      e_33.appendChild(e_47);
    }

    e_3.appendChild(e_33);
    e_2.appendChild(e_3);
    e_1.appendChild(e_2);
    e_0.appendChild(e_1);
    container.append(e_0);
  }
  //console.log(CollegeList[0]);
}

function urlResolver(url) {
  console.log(url);
  window.open(url, "_blank");
}
// https://stackoverflow.com/questions/1909441/how-to-delay-the-keyup-handler-until-the-user-stops-typing
const delayKeyUp = (() => {
  let timer = null;
  const delay = (func, ms) => {
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(func, ms);
  };
  return delay;
})();

//fill the data with unique value

function Fill_Value() {
  let course_type_array = [];
  let language_array = [];
  let duration_array = [];
  let semester_array = [];
  //let tuition_fees = [];
  CollegeList.forEach((Element) => {
    course_type_array.push(Element.Course_Type);
    language_array.push(Element.Teaching_Language.toUpperCase());
    duration_array.push(Element.Duration);
    semester_array.push(Element.Semester_Start.toUpperCase());
    //tuition_fees.push(Element.Tuition_Fee);
  });

  // changing the languages

  let uniqueListArray = [
    Unique_value(course_type_array.sort()),
    Remove_Space_Get_Unique_Value(language_array.sort()),
    Unique_value(duration_array.sort()),
    Remove_Space_Get_Unique_Value(semester_array.sort()),

    //tuition_fees.sort(),
  ];
  //console.log(uniqueListArray[3]);

  let select_ids = [
    "Course_type",
    "Teaching_language",
    "Duration",
    "Beginning_semester",
    // "Tuition_fee",
  ];

  for (let i = 0; i < select_ids.length; i++) {
    //creating select by taking select ids
    let select = document.getElementById(select_ids[i]);
    //creating options
    var options = [];
    var option = document.createElement("option");

    //fethcing unique list from uniqueListarray
    uniqueListArray[i].forEach((ele) => {
      //var data = '<option value="' + escapeHTML(i) +'">" + escapeHTML(i) + "</option>';
      option.text = option.value = ele;
      options.push(option.outerHTML);
    });

    //inserting in the select (id given already)
    select.insertAdjacentHTML("beforeEnd", options.join("\n"));
  }
}

// to get unique values again
function Remove_Space_Get_Unique_Value(list) {
  let temp_string1 = list.join();//.replace(/ /g, "")
  let temp_string = temp_string1.split(",");
  for( let i=0; i<temp_string.length;i++)
  {
    console.log(temp_string[i]);   
     if(temp_string[i].startsWith(" ")){

      temp_string[i]=temp_string[i].replace(/ /g, "");
    }
  }
  list = Unique_value(temp_string);
  


  return list;
}

function Unique_value(values) {
  return values.filter((x, i, a) => a.indexOf(x) === i);
}

//7 parameter for filtering

var Search_Name_Uni = document.getElementById("search_name");
var Search_Name_Course = document.getElementById("search_course");
var Search_Course_type = document.getElementById("Course_type");
var Germany_Ranking_Finder = document.getElementById("germany_ranking_finder");
var Search_Language_teaching = document.getElementById("Teaching_language");
var Search_Start_semeter = document.getElementById("Beginning_semester");
var Search_Duration = document.getElementById("Duration");
//var Tuition = document.getElementById("Tuition_fee");
var Display_Search = document.getElementById("display_size");
var Search_sortByRanking = document.getElementById("Sort_by_Ranking");
var Min_Tuition_fee = document.getElementById("min");
var Max_Tuition_fee = document.getElementById("max");
var Reset_Search = document.getElementById("reset");
var Display_Selected_Filter = document.getElementById(
  "Display_Selected_Filter"
);
Reset_Search.addEventListener("click", Reset);
let selected_lang = [];
let start_sem = [];
Search_Name_Uni.addEventListener("keyup", (e) => {
  delayKeyUp(() => {
    Search_Uni_Course();
  }, 400);
});
Search_Name_Course.addEventListener("keyup", (e) => {
  delayKeyUp(() => {
    Search_Uni_Course();
  }, 400);
});
Search_Course_type.addEventListener("change", (e) => {
  delayKeyUp(() => {
    Search_Uni_Course();
  }, 400);
});
Germany_Ranking_Finder.addEventListener("keyup", (e) => {
  delayKeyUp(() => {
    Search_Uni_Course();
  }, 400);
});
Search_Language_teaching.addEventListener("change", (e) => {
  delayKeyUp(() => {
    selected_lang = check_Selected_Languages();

    Search_Uni_Course();
  }, 400);
});
Search_Start_semeter.addEventListener("change", (e) => {
  delayKeyUp(() => {
    start_sem = check_Start_sem();
    Search_Uni_Course();
  }, 400);
});
Search_Duration.addEventListener("change", (e) => {
  delayKeyUp(() => {
    Search_Uni_Course();
  }, 400);
});

Min_Tuition_fee.addEventListener("change", (e) => {
  delayKeyUp(() => {
    Search_Uni_Course();
  }, 400);
});
Max_Tuition_fee.addEventListener("change", (e) => {
  delayKeyUp(() => {
    Search_Uni_Course();
  }, 400);
});

Display_Search.addEventListener("change", (e) => {
  delayKeyUp(() => {
    Search_Uni_Course();
  }, 400);
});
Search_sortByRanking.addEventListener("change", (e) => {
  // console.log(e.target.value);
  delayKeyUp(() => {
    sortbyRanking(e.target.value);
  }, 400);
});

function check_Start_sem() {
  let start_sem = [];
  for (var option of Search_Start_semeter) {
    if (option.selected) {
      start_sem.push(option.value.toLowerCase());
    }
  }
  return start_sem;
}
function check_Selected_Languages() {
  let lang = [];
  for (var option of Search_Language_teaching.options) {
    if (option.selected) {
      lang.push(option.value.toLowerCase());
    }
  }
  console.log(lang);
  return lang;
}
function Reset() {
  document.location.reload(true);
}
//////
function Search_Uni_Course() {
  var _Uni_name = Search_Name_Uni.value.toLowerCase();
  var _course_name = Search_Name_Course.value.toLowerCase();
  var _course_type = Search_Course_type.value.toLowerCase();
  var _germany_ranking = Germany_Ranking_Finder.value.toLocaleLowerCase();
  var _teaching_Language = selected_lang.join(",").toLocaleLowerCase();
  var _start_semester = start_sem.join(",").toLocaleLowerCase();
  //Search_Start_semeter.value.toLowerCase();
  var _duration = Search_Duration.value.toLowerCase();
  // var _fee = Tuition.value.toLowerCase();
  var _sortbyRanking = Search_sortByRanking.value;
  var _mintuitionfee = Min_Tuition_fee.value;
  var _maxtuitionfee = Max_Tuition_fee.value;

  // var _rank = Search_rank.toLowerCase();
  //input_type = document.getElementById("search_name").value.toLowerCase();
  //Filter(name);
  MultiFilter(
    _Uni_name,
    _course_name,
    _course_type,
    _germany_ranking,
    _teaching_Language,
    _start_semester,
    _duration,
    _sortbyRanking,
    _mintuitionfee,
    _maxtuitionfee
  );
}
/*function Filter(name){
  var container = document.getElementById("List_of_University");
  container.innerHTML="";
  const result=CollegeList.filter(p=> p.University_Name.toLowerCase().includes(name) ||  p.Course_Name.toLowerCase().includes(name) );
  //console.log(result);
  if(result!=null){
    Rendering(result);
  }

}*/

let resultarr = [];

function DisplaySelectedFilters(_activeFilters) {
  Display_Selected_Filter.innerHTML = "";
  const name = [
    "University Name",
    "Course Name",
    "Course Type",
    "German Ranking",
    "Teaching Language",
    "Semester Start",
    "Duration",
    "Min Tuition Fee",
    "Max Tuition Fee",
  ];
  let i = 0;
  _activeFilters.forEach((element) => {
    if (element != "") {
      var e_0 = document.createElement("button");
      e_0.setAttribute("type", "button");
      e_0.setAttribute("class", "btn btn-success mr-1");
      e_0.setAttribute("disabled", "");
      e_0.appendChild(
        document.createTextNode(name[i] + ": " + element.toUpperCase())
      );
      Display_Selected_Filter.appendChild(e_0);
    }
    i++;
  });
}

function MultiFilter(
  university_name,
  course_name,
  course_type,
  _germany_ranking,
  teaching_language,
  start_semester,
  duration,
  _sortbyRanking,
  _mintuitionfee,
  _maxtuitionfee
) {
  var activeFilters = [
    university_name,
    course_name,
    course_type,
    _germany_ranking,
    teaching_language,
    start_semester,
    duration,
    _mintuitionfee,
    _maxtuitionfee,
  ];
  if (Display_Search.value != "") {
    Items_To_Show = Display_Search.value;
  } else {
    Items_To_Show = 10;
  }

  DisplaySelectedFilters(activeFilters);
  //console.log("showing items:" + Items_To_Show);
  var container = document.getElementById("List_of_University");
  container.innerHTML = "";

  let result = [];
  result = CollegeList.filter(
    (p) =>
      p.University_Name.toLowerCase().includes(university_name) &&
      p.Course_Name.toLowerCase().includes(course_name) &&
      p.Course_Type.toLowerCase().includes(course_type) &&
      (_germany_ranking == ""
        ? true
        : p.Rank_sort_germany === _germany_ranking) &&
      p.Teaching_Language.toLowerCase().includes(teaching_language) &&
      p.Semester_Start.toLowerCase().includes(start_semester) &&
      p.Duration.toLowerCase().includes(duration) &&
      p.new_Tuition_Fee >= _mintuitionfee &&
      p.new_Tuition_Fee <= _maxtuitionfee
  );
  resultarr = result;

  if (result != "") {
    sortbyRanking(_sortbyRanking);
  } else {
    Rendering("", "");
  }
  // console.log(resultarr);
}
// takes the data and size.
function Pagination(data, size) {
  Current_Index = 1;
  PageSize = 1;
  var container = document.getElementById("pagination");
  container.innerHTML = "";
  PageSize = Math.ceil(data.length / size);
  // previous
  var perv = document.createElement("a");
  perv.addEventListener("click", () => {
    Previous(data);
  });
  perv.setAttribute("id", "previous");
  perv.appendChild(document.createTextNode("<<"));
  container.appendChild(perv);

  //console.log("THis is running");
  for (let i = 0; i < PageSize; i++) {
    var e_1 = document.createElement("a");
    e_1.addEventListener("click", () => {
      PageID(i + 1, data);
    });
    if (i > 5) {
      e_1.setAttribute("class", "show");
    }
    e_1.setAttribute("id", i + 1);
    //e_1.setAttribute("href", "#"+(i+1));
    e_1.appendChild(document.createTextNode(i + 1));
    container.appendChild(e_1);
  }
  //next
  var next = document.createElement("a");
  next.addEventListener("click", () => {
    Next(data);
  });
  next.setAttribute("id", "next");
  next.appendChild(document.createTextNode(">>"));
  container.appendChild(next);

  //activate the page
  var yo = document.getElementById(1);
  yo.setAttribute("class", "active");
  ShowPage(1, data);
}

function Previous(data) {
  PageID(Math.max(1, Current_Index - 1), data);
  //console.log("previous");
}

function Next(data) {
  PageID(Math.min(Current_Index + 1, PageSize), data);
  //console.log("next");
}

// this function represents which page is seleted and what data needs to be shown.
function PageID(index, data) {
  Current_Index = index;
  //console.log(index);
  ShowPage(Current_Index, data);
}
function ShowPage(Page_ID, Data) {
  //set page number active.
  Active_Deactive(Page_ID);
  let newdata = [];
  showItems = Items_To_Show;
  if (Page_ID == PageSize) {
    showItems = Math.min(Items_To_Show, Math.ceil(Data.length % Items_To_Show));
  }
  for (let i = 0; i < showItems; i++) {
    //problem idenfied to solve.
    num = (Page_ID - 1) * Items_To_Show + i;
    //console.log("This is oage size" + Math.ceil(Data.length % Items_To_Show));
    //console.log(Data[num]);
    newdata.push(Data[num]);
  }
  //console.log(Data);
  var container = document.getElementById("List_of_University");
  container.innerHTML = "";
  Rendering(newdata, Data);
}

function Active_Deactive(Page_ID) {
  var deactive_class = document.getElementById(prev_page_id);
  deactive_class.removeAttribute("class");
  prev_page_id = Page_ID;
  var active_class = document.getElementById(prev_page_id);
  active_class.setAttribute("class", "active");
}

////Sorting via Ranking

function sortbyRanking(value) {
  if (value == 0) {
    Pagination(resultarr, Items_To_Show);
  } else if (value == 1) {
    sortbyWorldRanking();
  } else if (value == 2) {
    sortbyGermanRanking();
  }
}

function sortbyWorldRanking() {
  Sort_world_Ranking = [].concat(resultarr);

  Sort_world_Ranking.sort((a, b) => a.Rank_sort_world - b.Rank_sort_world);
  Pagination(Sort_world_Ranking, Items_To_Show);
}

function sortbyGermanRanking() {
  Sort_germany_Ranking = [].concat(resultarr);

  Sort_germany_Ranking.sort(
    (a, b) => a.Rank_sort_germany - b.Rank_sort_germany
  );
  Pagination(Sort_germany_Ranking, Items_To_Show);
}

function randomColor() {
  var color = "#";
  var colorCode = [
    "F8F9F9",
    "F2F3F4",
    "E5E7E9",
    "D7DBDD",
    "F4F6F6",
    "F2F4F4",
    "E5E8E8",
    "D0D3D4",
    "f5e3b8",
    "f5ebd3",
    "c4d4ff",
    "e6fac8",
  ]; // colors

  color += colorCode[Math.floor(Math.random() * colorCode.length)];
  return color;
}

function changecurrency(currency) {
  //console.log(currency);
  //console.log(typeof(currency))
  if (typeof currency === "number") {
    return currency;
  }

  newcurrency = 0;
  if (currency.includes("€")) {
    newcurrency = currency.split("\u20AC")[1];
    // console.log(typeof(newcurrency));
  }
  if (currency.includes(",")) {
    if (newcurrency != 0) {
      newcurrency = newcurrency.replace(",", "");
    } else {
      newcurrency = currency.replace(",", "");
    }
  }

  newcurrency = parseInt(newcurrency);
  // console.log(new_currency);
  return newcurrency;
}

function setcurrency(Tuition_Fee) {
  if (Tuition_Fee == "NA" || Tuition_Fee == "") {
    return 99999;
  } else if (Tuition_Fee == "None") {
    return 0;
  } else if (Tuition_Fee == "Varied") {
    return 500;
  } else {
    return changecurrency(Tuition_Fee);
  }
}

function Display_Pagedata(data_to_process, Current_Index, display_number) {
  var CheckCurrent_Index = parseInt(data_to_process.length / Items_To_Show) + 1;

  if (Current_Index == CheckCurrent_Index) {
    display_number.innerHTML =
      "Displaying " +
      (Items_To_Show * (Current_Index - 1) + 1) +
      "-" +
      data_to_process.length +
      " Universities/Hochshule out of " +
      data_to_process.length;
  } else {
    display_number.innerHTML =
      "Displaying " +
      (Items_To_Show * (Current_Index - 1) + 1) +
      "-" +
      Items_To_Show * Current_Index +
      " Universities/Hochshule out of " +
      data_to_process.length;
  }
}

//slider js

var thumbsize = 14;

function draw(slider, splitvalue) {
  /* set function vars */
  var min = slider.querySelector(".min");
  var max = slider.querySelector(".max");
  var lower = slider.querySelector(".lower");
  var upper = slider.querySelector(".upper");
  var legend = slider.querySelector(".legend");
  var thumbsize = parseInt(slider.getAttribute("data-thumbsize"));
  var rangewidth = parseInt(slider.getAttribute("data-rangewidth"));
  var rangemin = parseInt(slider.getAttribute("data-rangemin"));
  var rangemax = parseInt(slider.getAttribute("data-rangemax"));

  /* set min and max attributes */
  min.setAttribute("max", splitvalue);
  max.setAttribute("min", splitvalue);

  /* set css */
  min.style.width =
    parseInt(
      thumbsize +
        ((splitvalue - rangemin) / (rangemax - rangemin)) *
          (rangewidth - 2 * thumbsize)
    ) + "px";
  max.style.width =
    parseInt(
      thumbsize +
        ((rangemax - splitvalue) / (rangemax - rangemin)) *
          (rangewidth - 2 * thumbsize)
    ) + "px";
  min.style.left = "0px";
  max.style.left = parseInt(min.style.width) + "px";
  min.style.top = lower.offsetHeight + "px";
  max.style.top = lower.offsetHeight + "px";
  legend.style.marginTop = min.offsetHeight + "px";
  slider.style.height =
    lower.offsetHeight + min.offsetHeight + legend.offsetHeight + "px";

  /* correct for 1 off at the end */
  if (max.value > rangemax - 1) max.setAttribute("data-value", rangemax);

  /* write value and labels */
  max.value = max.getAttribute("data-value");
  min.value = min.getAttribute("data-value");
  lower.innerHTML = min.getAttribute("data-value");
  upper.innerHTML = max.getAttribute("data-value");
}

function init(slider) {
  /* set function vars */
  var min = slider.querySelector(".min");
  var max = slider.querySelector(".max");
  var rangemin = parseInt(min.getAttribute("min"));
  var rangemax = parseInt(max.getAttribute("max"));
  var avgvalue = (rangemin + rangemax) / 2;
  var legendnum = slider.getAttribute("data-legendnum");

  /* set data-values */
  min.setAttribute("data-value", rangemin);
  max.setAttribute("data-value", rangemax);

  /* set data vars */
  slider.setAttribute("data-rangemin", rangemin);
  slider.setAttribute("data-rangemax", rangemax);
  slider.setAttribute("data-thumbsize", thumbsize);
  slider.setAttribute("data-rangewidth", slider.offsetWidth);

  /* write labels */
  var lower = document.createElement("span");
  var upper = document.createElement("span");
  lower.classList.add("lower", "value");
  upper.classList.add("upper", "value");
  lower.appendChild(document.createTextNode(rangemin));
  upper.appendChild(document.createTextNode(rangemax));
  slider.insertBefore(lower, min.previousElementSibling);
  slider.insertBefore(upper, min.previousElementSibling);

  /* write legend */
  var legend = document.createElement("div");
  legend.classList.add("legend");
  var legendvalues = [];
  for (var i = 0; i < legendnum; i++) {
    legendvalues[i] = document.createElement("div");
    var val = Math.round(
      rangemin + (i / (legendnum - 1)) * (rangemax - rangemin)
    );
    legendvalues[i].appendChild(document.createTextNode(val));
    legend.appendChild(legendvalues[i]);
  }
  slider.appendChild(legend);

  /* draw */
  draw(slider, avgvalue);

  /* events */
  min.addEventListener("input", function () {
    update(min);
  });
  max.addEventListener("input", function () {
    update(max);
  });
}

function update(el) {
  /* set function vars */
  var slider = el.parentElement;
  var min = slider.querySelector("#min");
  var max = slider.querySelector("#max");
  var minvalue = Math.floor(min.value);
  var maxvalue = Math.floor(max.value);

  /* set inactive values before draw */
  min.setAttribute("data-value", minvalue);
  max.setAttribute("data-value", maxvalue);

  var avgvalue = (minvalue + maxvalue) / 2;

  /* draw */
  draw(slider, avgvalue);
}

var sliders = document.querySelectorAll(".min-max-slider");
sliders.forEach(function (slider) {
  init(slider);
});

const menu = document.querySelector(".search_menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".search_hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


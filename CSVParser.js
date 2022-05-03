const URL_TO_Check = "./Search-Table-Code/new.csv";

let CollegeList = [];
class College {
  constructor(
    World_Ranking,
    German_Ranking,
    University_Name,
    HTA_Uni_Link,
    Course_Type,
    City,
    Course_Name,
    Course_Ranking,
    Teaching_Language,
    Language_Requirement,
    Admission_IELTS_TOFEL,
    Required_German_Grade,
    GRE,
    Tuition_Fee,
    Semester_Start,
    Application_Deadline_Winter,
    Application_Deadline_Summer,
    Duration,
    Course_Link,
    Application_Link,
    Logo
    
  ) {
    this.World_Ranking = (World_Ranking== "") ? "NA" : World_Ranking;
    this.German_Ranking = (German_Ranking== "") ? "NA" : German_Ranking;
    this.University_Name = (University_Name== "") ? "NA" : University_Name;
    this.HTA_Uni_Link = (HTA_Uni_Link== "") ? "none" : HTA_Uni_Link;
    this.Course_Type = (Course_Type== "") ? "NA" : Course_Type;
    this.City=City;
    this.Course_Name = (Course_Name== "") ? "NA" : Course_Name;
    this.Course_Ranking = (Course_Ranking== "") ? "NA" : Course_Ranking;
    this.Teaching_Language = (Teaching_Language== "") ? "NA" : Teaching_Language;
    this.Language_Requirement = (Language_Requirement== "") ? "Not Available" : Language_Requirement;
    this.Admission_IELTS_TOFEL = (Admission_IELTS_TOFEL== "") ? "Not Available" : Admission_IELTS_TOFEL;
    this.Required_German_Grade = (Required_German_Grade== "") ? "Not Available" : Required_German_Grade;
    this.GRE = (GRE== "") ? "NA" : GRE;
    this.Tuition_Fee = (Tuition_Fee== "") ? "Not Available" : Tuition_Fee;
    this.Semester_Start = (Semester_Start== "") ? "NA" : Semester_Start;
    this.Application_Deadline_Winter = (Application_Deadline_Winter== "") ? "NA" : Application_Deadline_Winter;
    this.Application_Deadline_Summer = (Application_Deadline_Summer== "") ? "NA" : Application_Deadline_Summer;
    this.Duration = (Duration== "") ? "NA" : Duration;
    this.Course_Link = (Course_Link== "") ? "NA" : Course_Link;
    this.Application_Link = (Application_Link== "") ? "none" : Application_Link;
    this.Logo = Logo;
    
  }
}
Execute();

async function Execute() {
  const data = await GetData();
  DataParser(data);
  Rendering();
}

async function GetData() {
  const response = await fetch(URL_TO_Check);
  const data = await response.text();
  //console.log(data);
  return data;
}

function DataParser(data) {
  //console.log(data + "More on this data");
  const table = data.split("\n");
  table_head = table[0].split(";");
  //console.log(table_head);

  table_body = data.split("\n").slice(1);
  //console.log(table_body);

  table_Length = table_body.length;
  //console.log(table_Length);

  let num = 0;
  table_body.forEach((row) => {
    //const rows = row.split(",");
    const rows= row.split(";");

    CollegeList[num] = new College(
      rows[1],
      rows[2],
      rows[3],
      rows[4],
      rows[5],
      rows[6],
      rows[7],
      rows[8],
      rows[9],
      rows[10],
      rows[11],
      rows[12],
      rows[13],
      rows[14],
      rows[15],
      rows[16],
      rows[17],
      rows[18],
      rows[19],
     rows[20]

    );
   
    num++;
  });

  //console.log(CollegeList[2]);
}

function Rendering() {
  
  console.log(CollegeList.length);
  for (let i = 0; i < CollegeList.length; i++) {
    var container = document.getElementById("Unis");
    var e_0 = document.createElement("div");
    var e_1 = document.createElement("div");
    e_1.setAttribute("class", "container mt-5 mb-5");
    e_1.setAttribute("bis_skin_checked", "1");
    var e_2 = document.createElement("div");
    e_2.setAttribute("class", "d-flex justify-content-center row");
    e_2.setAttribute("bis_skin_checked", "1");
    var e_3 = document.createElement("div");
    e_3.setAttribute("class", "col-md-10");
    e_3.setAttribute("bis_skin_checked", "1");
    var e_4 = document.createElement("div");
    e_4.setAttribute("class", "row p-2 bg-white border rounded");
    e_4.setAttribute("bis_skin_checked", "1");
    var e_5 = document.createElement("div");
    e_5.setAttribute("class", "col-md-3 mt-1");
    e_5.setAttribute("bis_skin_checked", "1");
    var e_6 = document.createElement("img");
    e_6.setAttribute("class", "img-fluid img-responsive rounded product-image");
    //logo
    e_6.setAttribute(
      "src",
      "https://i0.wp.com/howtoabroad.com/wp-content/uploads/2022/04/SRH-Berlin-School-of-Management.png"
    );
    e_5.appendChild(e_6);
    e_4.appendChild(e_5);
    var e_7 = document.createElement("div");
    e_7.setAttribute("class", "col-md-6 mt-1");
    e_7.setAttribute("bis_skin_checked", "1");
    var e_8 = document.createElement("a");
    // URL for HTA
    e_8.setAttribute("href", CollegeList[i].HTA_Uni_Link);
    e_8.setAttribute("target", "_blank");
    var e_9 = document.createElement("h5");
    e_9.setAttribute("style", "color: black;");
    // Name of the university 
    e_9.appendChild(
      document.createTextNode(CollegeList[i].University_Name)
    );
    e_8.appendChild(e_9);
    e_7.appendChild(e_8);
    var e_10 = document.createElement("div");
    e_10.setAttribute("class", "d-flex flex-row");
    e_10.setAttribute("bis_skin_checked", "1");
    var e_11 = document.createElement("div");
    e_11.setAttribute("class", "ratings mr-2");
    e_11.setAttribute("bis_skin_checked", "1");
    var e_12 = document.createElement("i");
    e_12.setAttribute("class", "fa fa-star");
    e_11.appendChild(e_12);
    var e_13 = document.createElement("i");
    e_13.setAttribute("class", "fa fa-star");
    e_11.appendChild(e_13);
    var e_14 = document.createElement("i");
    e_14.setAttribute("class", "fa fa-star");
    e_11.appendChild(e_14);
    var e_15 = document.createElement("i");
    e_15.setAttribute("class", "fa fa-star");
    e_11.appendChild(e_15);
    e_10.appendChild(e_11);
    var e_16 = document.createElement("span");
    var e_17 = document.createElement("h6");
    e_17.setAttribute("class", "text-primary");
    // world ranking and germany ranking
    e_17.appendChild(document.createTextNode("World Ranking : "+CollegeList[i]. World_Ranking));
    var e_18 = document.createElement("br");
    e_17.appendChild(e_18);
    e_17.appendChild(document.createTextNode("\nGermany Ranking : "+CollegeList[i].German_Ranking));
    e_16.appendChild(e_17);
    var e_19 = document.createElement("hr");
    e_16.appendChild(e_19);
    var e_20 = document.createElement("h6");
    e_20.setAttribute("class", "text-dark");
    //course type
    e_20.appendChild(document.createTextNode("Course Type : "+ CollegeList[i].Course_Type));
    e_16.appendChild(e_20);
    var e_21 = document.createElement("h6");
    e_21.setAttribute("class", "text-dark");
    // course name
    e_21.appendChild(
      document.createTextNode("Course Name : "+ CollegeList[i].Course_Name)
    );
    e_16.appendChild(e_21);
    var e_22 = document.createElement("b");
    // Semeter when it starts
    e_22.appendChild(document.createTextNode("Semester Start : "+ CollegeList[i].Semester_Start));
    e_16.appendChild(e_22);
    var e_23 = document.createElement("br");
    e_16.appendChild(e_23);
    var e_24 = document.createElement("hr");
    e_16.appendChild(e_24);
    e_10.appendChild(e_16);
    e_7.appendChild(e_10);
    var e_25 = document.createElement("div");
    e_25.setAttribute("class", "mt-1 mb-1 spec-1");
    e_25.setAttribute("bis_skin_checked", "1");
    var e_26 = document.createElement("span");
    e_26.setAttribute("class", "dot");
    e_25.appendChild(e_26);
    var e_27 = document.createElement("span");
    var e_28 = document.createElement("b");
    //course ranking in germany
    e_28.appendChild(document.createTextNode("Course Germany Ranking : "+ CollegeList[i].Course_Ranking));
    e_27.appendChild(e_28);
    e_25.appendChild(e_27);
    var e_29 = document.createElement("span");
    e_29.setAttribute("class", "dot");
    e_25.appendChild(e_29);
    e_7.appendChild(e_25);
    var e_30 = document.createElement("div");
    e_30.setAttribute("class", "mt-1 mb-1 spec-1");
    e_30.setAttribute("bis_skin_checked", "1");
    var e_31 = document.createElement("span");
    var e_32 = document.createElement("b");
    //city 
    e_32.appendChild(document.createTextNode("City : "+ CollegeList[i].City));
    e_31.appendChild(e_32);
    var e_33 = document.createElement("br");
    e_31.appendChild(e_33);
    e_30.appendChild(e_31);
    var e_34 = document.createElement("span");
    e_34.setAttribute("class", "dot");
    e_30.appendChild(e_34);
    e_7.appendChild(e_30);
    var e_35 = document.createElement("p");
    e_35.setAttribute("class", "text-justify text-truncate para mb-0");
    e_7.appendChild(e_35);
    var e_36 = document.createElement("h6");
    e_36.setAttribute("class", "text-success");
    // Duration 
    e_36.appendChild(document.createTextNode("Duration : "+CollegeList[i].Duration));
    e_7.appendChild(e_36);
    var e_37 = document.createElement("p");
    e_7.appendChild(e_37);
    e_4.appendChild(e_7);
    var e_38 = document.createElement("div");
    e_38.setAttribute(
      "class",
      "align-items-center align-content-center col-md-3 border-left mt-1"
    );
    e_38.setAttribute("bis_skin_checked", "1");
    var e_39 = document.createElement("div");
    e_39.setAttribute("class", "d-flex flex-row align-items-center");
    e_39.setAttribute("bis_skin_checked", "1");
    var e_40 = document.createElement("span");
    e_40.setAttribute("class", "text-primary ");
    var e_41 = document.createElement("h6");
    //tution fee
    e_41.appendChild(document.createTextNode("Tution Fee : "+ CollegeList[i].Tuition_Fee));
    e_40.appendChild(e_41);
    var e_42 = document.createElement("br");
    e_40.appendChild(e_42);
    var e_43 = document.createElement("h6");
    e_43.setAttribute("class", "text-success");
    //tution language
    e_43.appendChild(document.createTextNode("Teaching Language : "+ CollegeList[i].Teaching_Language));
    e_40.appendChild(e_43);
    e_39.appendChild(e_40);
    e_38.appendChild(e_39);
    var e_44 = document.createElement("h6");
    var e_50 = document.createElement("h6");
    var e_51 = document.createElement("h6");
    var e_52 = document.createElement("h6");
    var e_53 = document.createElement("h6");
    e_44.setAttribute("class", "text-danger");
      //application deadline
    e_44.appendChild(document.createTextNode("Appication Deadline Summer: "+ CollegeList[i].Ap));
    e_50.appendChild(document.createTextNode("Appication Deadline Winter: "+ CollegeList[i].Application_Deadline_Winter));
    e_51.appendChild(document.createTextNode("IELTS/TOFL : "+ CollegeList[i].Admission_IELTS_TOFEL));
    e_52.appendChild(document.createTextNode("Language Requirement : "+ CollegeList[i].Language_Requirement));
    e_53.appendChild(document.createTextNode("German Grade Requirement : "+ CollegeList[i].Required_German_Grade));
    e_38.appendChild(e_53);
    e_38.appendChild(e_52);
    e_38.appendChild(e_51);
    e_38.appendChild(e_50);
    e_38.appendChild(e_44);
    var e_45 = document.createElement("div");
    e_45.setAttribute("class", "d-flex flex-column mt-4 flex-row");
    e_45.setAttribute("bis_skin_checked", "1");
    var e_46 = document.createElement("a");
   // Course website link
    e_46.setAttribute(
      "href",
      CollegeList[i].Course_Link
    );
    e_46.setAttribute("target", "_blank");
    e_46.setAttribute("rel", "nofollow");
    e_46.setAttribute("class", "btn btn-primary btn-sm");
    e_46.setAttribute("type", "button");
    e_46.appendChild(document.createTextNode("\nCourse website"));
    e_45.appendChild(e_46);
    var e_47 = document.createElement("a");
    e_47.setAttribute("target", "_blank");
    e_47.setAttribute("rel", "nofollow");
    //portal link
    e_47.setAttribute(
      "href",
      CollegeList[i].Application_Link
    );
    e_47.setAttribute("class", "btn btn-outline-info btn-sm mt-2 flex-row");
    e_47.setAttribute("type", "button");
    e_47.appendChild(document.createTextNode("Submit Application"));
    e_45.appendChild(e_47);
    e_38.appendChild(e_45);
    e_4.appendChild(e_38);
    e_3.appendChild(e_4);
    e_2.appendChild(e_3);
    e_1.appendChild(e_2);
    e_0.appendChild(e_1);
    container.append(e_0);
  }
  console.log(CollegeList[0]);
}

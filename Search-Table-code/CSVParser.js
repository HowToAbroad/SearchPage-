const URL_TO_Check="data.csv";

let CollegeList=[];

Execute();
class College{

    constructor(World_Ranking,German_Ranking,University_Name,HTA_Uni_Link,Course_Type,Course_Name,Course_Ranking,Teaching_Language,Language_Requirement,Admission_IELTS_TOFEL,Required_German_Grade,GRE,Tuition_Fee,
        Semester_Start, Application_Deadline,Duration,Course_Link,Application_Link, Daad_Site, Logo){
            this.World_Ranking=World_Ranking;
            this.German_Ranking=German_Ranking;
            this.University_Name=University_Name;
            this.HTA_Uni_Link=HTA_Uni_Link;
            this.Course_Type=Course_Type;
            this.Course_Name=Course_Name;
            this.Course_Ranking=Course_Ranking;
            this.Teaching_Language=Teaching_Language;
            this.Language_Requirement=Language_Requirement;
            this.Admission_IELTS_TOFEL=Admission_IELTS_TOFEL;
            this.Required_German_Grade= Required_German_Grade;
            this.GRE=GRE;
            this.Tuition_Fee=Tuition_Fee;
            this.Semester_Start=Semester_Start;
            this.Application_Deadline= Application_Deadline;
            this.Duration= Duration;
            this.Course_Link= Course_Link;
            this.Application_Link=Application_Link;
            this.Daad_Site= Daad_Site;
            this.Logo=Logo;

        } 
    
}

async function Execute()
{
    const data= await GetData();
    DataParser(data);
    Rendering();
}


async function GetData()
{
    const response = await fetch('data.csv');
    const data = await response.text();
    //console.log(data);
    return data;
}
    


function DataParser(data){

    
    //console.log(data + "More on this data");
    const table = data.split('\n');
    table_head = table[0].split(',');
    //console.log(table_head);
    
    table_body = data.split('\n').slice(1);
    //console.log(table_body);
    
    table_Length = table_body.length;
    //console.log(table_Length);

    let num=0;    
    table_body.forEach(row => {
        const rows = row.split(',');
        
        CollegeList[num]= new College(
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
            rows[19]
        )
        
        num++;})  
        
        console.log(CollegeList[2]);
}

function Rendering()
{
    let text="";
    console.log(CollegeList.length);
    for (let i = 0; i < CollegeList.length; i++) {

        
        //starting the block
        const blockDiv=  document.createElement('div');
        blockDiv.classList.add('block');
        
        //left side
        const leftcard=  document.createElement('div');       
        leftcard.classList.add('left_card_part');
        const UniLogo=  document.createElement('img');
        UniLogo.src=CollegeList[i].UniLogo;
        leftcard.appendChild(UniLogo);

        //right side
        const rightcard=  document.createElement('div');
        rightcard.classList.add('right_card_part');
        const Uniname=  document.createElement('university_name');
        Uniname.classList.add('University_name');
        const h1Name= document.createElement('h1');
        h1Name.innerHTML=CollegeList[i].HTA_Uni_Link;
        Uniname.appendChild(h1Name);
        const WorldRanking= document.createElement('h5');
        WorldRanking.textContent= "World Ranking:" +CollegeList[i].World_Ranking ;
        Uniname .appendChild(WorldRanking);

        const GermanRanking= document.createElement('h5');
        GermanRanking.textContent= "German Ranking:" +CollegeList[i].German_Ranking;
        Uniname .append(GermanRanking);
        const Coursename= document.createElement('h5');
        Coursename.textContent= "Course Name:" +CollegeList[i].Course_Name;
        Uniname .appendChild(Coursename);
        //h2Name.src= CollegeList[i].HTA_Uni_Link;
        //h2Name.title= CollegeList[i].University_Name;
        
        let coursePage = document.createElement("button");
        coursePage.innerHTML =CollegeList[i].Course_Link;
        Uniname.appendChild(coursePage);
        

        let application = document.createElement("button");
        application.innerHTML = CollegeList[i].Application_Link;
        Uniname.appendChild(application);
        rightcard.appendChild(Uniname);
        
        
        
        
        

        
        //text += CollegeList[i].University_Name + "<br>";
        blockDiv.appendChild(leftcard);
        blockDiv.appendChild(rightcard);
        const breakMe= document.createElement('br');
        breakMe.append(blockDiv);
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(blockDiv, currentDiv);
        
      }
      console.log(CollegeList[0]);
    //document.getElementById("authors").innerHTML = text;
}


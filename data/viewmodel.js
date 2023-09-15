class Resume {
    constructor(dataURL) {
      this.dataURL = dataURL;
    }
}

const ResumeSection = {
    SKILLS: "SKILLS",
    SOFTWARE: "SOFTWARE",
    LANGUAGES: "LANGUAGES",
    COURSES_CERTIFICATES: "COURSES & CERTIFICATES",
}

const ResumeSkillType = {
    Interpersonal: "Interpersonal",
    IndustryKnowledge: "Industry Knowledge",
    // SkillsSubgroup: "SkillsSubgroup",
}


function fetchSkills(key, value) {
    console.log("- fetchSkills: "); 
    var skillsContainer = this.document.getElementById("skillsContainer");

    Object.entries(value).forEach(([skilltype, value]) => {
        // console.log(skilltype, value);

        switch(skilltype) {
            case ResumeSkillType.Interpersonal:
                
                var heading1 = document.createElement("h2");
                heading1.textContent = skilltype;
                skillsContainer.appendChild(heading1)

                Object.entries(value).forEach(([skill, value]) => {
                    // Create the first column <div>
                    var col1 = document.createElement("div");
                    col1.classList.add( "col-lg-4"); // ,col-lg-6
                    col1.setAttribute("data-aos", "fade-up");
                    addSkillToColumn(col1,skill, value * 100 )
                    skillsContainer.appendChild(col1);
                 });
                 
                 break;
            case ResumeSkillType.IndustryKnowledge:
                // sortSkillsByColumns(skillsContainer,skilltype,value);
                sortSkillsByRows(skillsContainer,skilltype,value);
               
              break;
            default:
                break;
          }
     })
};

function sortSkillsByRows(skillsContainer,skilltype,value) {
    var heading1 = document.createElement("h2");
    heading1.textContent = skilltype;
    skillsContainer.appendChild(heading1)

    Object.entries(value).forEach(([skill, value]) => {
        var heading2 = document.createElement("h3");
        heading2.textContent = skill;
        skillsContainer.appendChild(heading2)
        Object.entries(value).forEach(([skill, value]) => {

            if(typeof value === "object") {
                var heading3 = document.createElement("h5");
                heading3.textContent = skill;
                skillsContainer.appendChild(heading3);
                Object.entries(value).forEach(([skill, value]) => {
                    var col1 = document.createElement("div");
                    col1.classList.add( "col-lg-4"); // ,col-lg-6
                    col1.setAttribute("data-aos", "fade-up");
                    addSkillToColumn(col1,skill, value * 100 )
                    skillsContainer.appendChild(col1);
                });
            } else {
                var col1 = document.createElement("div");
                col1.classList.add( "col-lg-4"); // ,col-lg-6
                col1.setAttribute("data-aos", "fade-up");
                addSkillToColumn(col1,skill, value * 100 )
                skillsContainer.appendChild(col1);
            }
        });
     });
}

function sortSkillsByColumns(skillsContainer,skilltype,value) {
     // Create a heading <h3>
     var heading1 = document.createElement("h3");
     heading1.textContent = skilltype;
     console.log(skilltype + " ------- ");
     skillsContainer.appendChild(heading1)

     Object.entries(value).forEach(([skillSubType, value]) => {
         // Create the first column <div>
         var col1 = document.createElement("div");
         col1.classList.add( "col-lg-4"); // ,col-lg-6
         col1.setAttribute("data-aos", "fade-up");

         var heading2 = document.createElement("h4");
         heading2.textContent = skillSubType;
         col1.appendChild(heading2)
         skillsContainer.appendChild(col1);

         Object.entries(value).forEach(([skill, value]) => {
             console.log(skill, value);
             if (typeof value === "object") {
                 // fetchSkills("", value)
                 var heading3 = document.createElement("h5");
                 heading3.textContent = skill;
                 var col2 = document.createElement("div");
                 col2.classList.add( "col-lg-8"); // ,col-lg-6
                 col2.setAttribute("data-aos", "fade-up");
                 col2.appendChild(heading3);
                 Object.entries(value).forEach(([skill, value]) => {
                     addSkillToColumn(col2,skill, value * 100 );
                 });

                 col1.appendChild(col2);
             } else {
                 addSkillToColumn(col1,skill, value * 100 )
             }
          });
      });
}



// Create a function to add a skill with percentage and value to the column
function addSkillToColumn(column, skillName, skillPercentage) {
  const progressDiv = document.createElement("div");
  progressDiv.classList.add("progress");

  const skillSpan = document.createElement("span");
  skillSpan.classList.add("skill");
  skillSpan.textContent = skillName + " ";

  const skillPercentageElement = document.createElement("i");
  skillPercentageElement.classList.add("val");
  skillPercentageElement.textContent = skillPercentage + "%";

  skillSpan.appendChild(skillPercentageElement);

  const progressBarWrap = document.createElement("div");
  progressBarWrap.classList.add("progress-bar-wrap");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressBar.setAttribute("role", "progressbar");
  progressBar.setAttribute("aria-valuenow", skillPercentage );
  progressBar.setAttribute("aria-valuemin", "0");
  progressBar.setAttribute("aria-valuemax", "100");

  progressBarWrap.appendChild(progressBar);
  progressDiv.appendChild(skillSpan);
  progressDiv.appendChild(progressBarWrap);
  column.appendChild(progressDiv);
}

function fetchCoursesAndCertificates(key, certifications) {
    // Get the certifications container element by its class name
    // const certificationsContainer = document.querySelector(".col-lg-12[data-aos='fade-up'] .resume-items");

    var certificationsContainer = this.document.getElementById("certificationsContainer");

    Object.entries(certifications).forEach(([name, certification]) => {
       // Loop through the certifications and create HTML elements dynamically
        // Create a new certification item div
        const div = document.createElement("div");
        
        // div.setAttribute("data-aos", "fade-up");
        div.className = "resume-item"; 
        // div.classList.add("col-lg-6"); 
        // div.classList.add("pb-0"); 
    
        // Create an anchor element for the certification link
        const link = document.createElement("a");
        link.href = certification.link;
        link.textContent = name;
    
        // Create an h4 element for the certification name and append the link
        const nameHeading = document.createElement("h4");
        nameHeading.appendChild(link);
    
        // Create an h5 element for the certification date
        const dateHeading = document.createElement("h5");
        dateHeading.textContent = certification.date;
    
        // Create a p element for the issuing organization
        const organizationParagraph = document.createElement("p");
        organizationParagraph.innerHTML = `<em>${certification.organization}</em>`;
    
        // Append all elements to the certification item div
        div.appendChild(nameHeading);
        div.appendChild(dateHeading);
        div.appendChild(organizationParagraph);
    
        // Append the certification item div to the certifications container
        certificationsContainer.appendChild(div);
     });

}



fetch('https://raw.githubusercontent.com/PedroTrujilloV/PedroTrujilloV.github.io/main/data/resume.json')
    .then(response => response.json())
    .then(function(data) {
        console.log("- data: "); 
        // console.log(data); 
        Object.entries(data).forEach(([key, value]) => {
            // console.log(key, value);
            if (key == ResumeSection.SKILLS) {
                fetchSkills(key, value)
            }

            if (key == ResumeSection.COURSES_CERTIFICATES) {
                fetchCoursesAndCertificates(key, value)
            }

         });
    }) .catch(error => console.log(error)) ;
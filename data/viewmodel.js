class Resume {
    constructor(dataURL) {
      this.dataURL = dataURL;
    }
}

const ResumeSection = {
    SKILLS: "SKILLS",
    SOFTWARE: "SOFTWARE",
    LANGUAGES: "LANGUAGES",
}

const ResumeSkillType = {
    Interpersonal: "Interpersonal",
    IndustryKnowledge: "Industry Knowledge",
}


function fetchSkills(key, value) {
    console.log("- fetchSkills: "); 
    // console.log(key, value);
    Object.entries(value).forEach(([skilltype, value]) => {
        // console.log(skilltype, value);
        switch(skilltype) {
            case ResumeSkillType.Interpersonal:

                // var skillsContainer = this.document.getElementById("skillsContainer");
                // skillsContainer.classList.add("row", "skills-content");
                // skillsContainer.id = "skillsContainer";

                // Create the first column <div>
                // const col1 = document.createElement("div");
                // col1.classList.add("col-lg-6");
                // col1.setAttribute("data-aos", "fade-up");

                var col1 = this.document.getElementById("skilColumns")
                
                // Create a heading <h4>
                var heading1 = document.createElement("h3");
                heading1.textContent = skilltype;
                col1.appendChild(heading1)

                Object.entries(value).forEach(([skill, value]) => {
                    //console.log(skill, value);
                    addSkillToColumn(col1,skill, value * 100 )
                 });
                //  skillsContainer.appendChild(col1);
              break;
            case ResumeSkillType.IndustryKnowledge:
                var col1 = this.document.getElementById("skilColumns")
                
                // Create a heading <h4>
                var heading1 = document.createElement("h3");
                heading1.textContent = skilltype;
                console.log(skilltype + " ------- ");
                col1.appendChild(heading1)

                Object.entries(value).forEach(([skillSubType, value]) => {
                    const heading2 = document.createElement("h4");
                    headin2.textContent = skillSubType;
                    col1.appendChild(heading2)

                    Object.entries(value).forEach(([skill, value]) => {
                        console.log(skill, value);
                        addSkillToColumn(col1,skill, value * 100 )
                     });
                 });

                
                //  skillsContainer.appendChild(col1);
              break;
            default:
              // code block
              break;
          }
     })
};



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

         });
        // $("#text").text(data[1].text);
        // $("#author").text(data[1].author);
    })
    .catch(error => console.log(error));
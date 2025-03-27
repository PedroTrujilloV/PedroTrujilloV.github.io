// Use this code only for testing localy json Objects
// const resume_draft = `{}` // Replace here with your copied json
// const localData = JSON.parse(resume_draft);
// const fakeFetch = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         json: () => Promise.resolve(localData) // Mimics real fetch()
//       });
//     }, 1200); // ⏳ 500ms delay (adjust as needed)
//   });
// };


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
    PORTFOLIO: "PORTFOLIO",
}

const ResumeSkillType = {
    Interpersonal:  {name: "Interpersonal", quantify: false},
    IndustryKnowledge: {name: "Industry Knowledge", quantify: false},
    // SkillsSubgroup: "SkillsSubgroup",
}


function fetchSkills(key, value) {
    console.log("- fetchSkills: "); 
    var skillsContainer = this.document.getElementById("skillsContainer");

    Object.entries(value).forEach(([skilltype, value]) => {
        // console.log(skilltype, value);

        switch(skilltype) {
            case ResumeSkillType.Interpersonal.name:
                
                var heading1 = document.createElement("h2");
                heading1.textContent = skilltype;
                skillsContainer.appendChild(heading1)

                Object.entries(value).forEach(([skill, value]) => {
                    // Create the first column <div>
                    var col1 = document.createElement("div");
                    col1.classList.add( "col-lg-4"); // ,col-lg-6
                    col1.setAttribute("data-aos", "fade-up");
                    addSkillToColumn(col1,skill, value * 100, ResumeSkillType.Interpersonal.quantify)
                    skillsContainer.appendChild(col1);
                 });
                 
                 break;
            case ResumeSkillType.IndustryKnowledge.name:
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
                    addSkillToColumn(col1,skill, value * 100 , ResumeSkillType.IndustryKnowledge.quantify)
                    skillsContainer.appendChild(col1);
                });
            } else {
                var col1 = document.createElement("div");
                col1.classList.add( "col-lg-4"); // ,col-lg-6
                col1.setAttribute("data-aos", "fade-up");
                addSkillToColumn(col1,skill, value * 100 , ResumeSkillType.IndustryKnowledge.quantify)
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
function addSkillToColumn(column, skillName, skillPercentage, quantify= true) {

  const skillSpan = document.createElement("span");
  skillSpan.classList.add("skill");
  skillSpan.textContent = skillName + " ";  

  if ( quantify == true) {
    const progressDiv = document.createElement("div");
    progressDiv.classList.add("progress");
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
  else {
    skillSpan.textContent = addBulletPoints(skillSpan.textContent)
    column.appendChild(skillSpan);
  }
}

function addBulletPoints(text, bulletChar = '\u2022 ') {
  const lines = text.split('\n');
  const bulletedText = lines.map(line => line ? bulletChar + line : '').join('\n');
  return bulletedText;
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

function createProjectCard(project, i) {
    const fadeDirection = i % 2 == 1 ? "left" : "right";
    return `
      <div class="col-lg-6 p-5" data-aos="fade-${fadeDirection}">
        <div class="row">
          <div class="col-xl-6 col-lg-12 mb-lg-2 mb-sm-4">
            <a href="${project.nbviewerLink}" target="_blank"><img src="${project.imageSrc}" class="iframe-ml a-ml-github"></a>
          </div>
          <div class="col-xl-6 col-lg-12 portfolio-info">
            <h3>${project.title}</h3>
            <ul>
              <li><strong>Category</strong>: ${project.category}</li>
              <li><strong>Nbviewer (Recommended)</strong>: <a href="${project.nbviewerLink}" target="_blank">View Notebook</a></li>
              <li><strong>Github</strong>: <a href="${project.githubLink}" target="_blank">View on Github</a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="portfolio-description">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
          </div>
        </div>
      </div>
    `;
  }

function createPortfolioSection(portfolio) {
    // Get the main container
    const portfolioSection = document.getElementById('portfolio');
  
    // Create the inner container
    const portfolioDetails = document.createElement('div');
    portfolioDetails.classList.add('container', 'portfolio-details');
  
    // Create the section title
    const sectionTitle = document.createElement('div');
    sectionTitle.classList.add('section-title');
    sectionTitle.innerHTML = `
      <h2>Portfolio</h2>
      <p>This contains some samples of my work and study in fields like Artificial Intelligence and Machine Learning, iOS Software Engineering, Gaming, Simulation, Web development, and more.</p>
    `;
    portfolioDetails.appendChild(sectionTitle);
  
    // Iterate over each category in the portfolio
    portfolio.forEach(category => {
      // Create category section
      const categorySection = document.createElement('div');
      categorySection.classList.add('row', 'gy-4', 'portfolio-row');
  
      // Add section title for the category
      const categoryTitle = document.createElement('div');
      categoryTitle.classList.add('section-title');
      categoryTitle.innerHTML = `
        <h3>${category.category}</h3>
        <p>${category.description}</p>
      `;
      categorySection.appendChild(categoryTitle);
  
      // Add projects to the category section
      var i = 0
      category.projects.forEach(project => {
        if (project.imageSrc) {
            
            const projectCardHTML = createProjectCard(project, i);
            categorySection.innerHTML += projectCardHTML;
            i += 1;

        } else if (project.iframeSrc) {
            const projectColumn = document.createElement('div');
            projectColumn.classList.add('col-lg-4', 'mb-4');
            projectColumn.setAttribute("data-aos","fade-up");
            const projectIframe = document.createElement('iframe');
            projectIframe.setAttribute('src', project.iframeSrc);
            projectIframe.classList.add('iframe-behance');
            projectIframe.setAttribute('allowfullscreen', '');
            projectIframe.setAttribute('lazyload', '');
            projectIframe.setAttribute('frameborder', '0');
            projectIframe.setAttribute('allow', 'clipboard-write');
            projectIframe.setAttribute('refererPolicy', 'strict-origin-when-cross-origin');
            projectColumn.appendChild(projectIframe);
            categorySection.appendChild(projectColumn);
        }
        
      });
  
      // Append category section to the main container
      portfolioDetails.appendChild(categorySection);
    });
  
    // Append portfolio details to the main section
    portfolioSection.appendChild(portfolioDetails);
  }

  
//// Old reliable one
// fetch('https://raw.githubusercontent.com/PedroTrujilloV/PedroTrujilloV.github.io/main/data/resume.json')
// //fakeFetch() // uncomment this to use with the local json
//     .then(response => response.json())
//     .then(function(data) {
//         console.log("- data: "); 
//         // console.log(data); 
//         Object.entries(data).forEach(([key, value]) => {
//             // console.log(key, value);
//             if (key == ResumeSection.SKILLS) {
//                 fetchSkills(key, value)
//             }

//             if (key == ResumeSection.COURSES_CERTIFICATES) {
//                 fetchCoursesAndCertificates(key, value)
//             }

//             if (key == ResumeSection.PORTFOLIO) {
//                 createPortfolioSection(value)
//             }

//          });
//     }) .catch(error => console.log(error)) ;



// 1. Existing data loading function (unchanged)
function loadResumeData() {
  return fetch('https://raw.githubusercontent.com/PedroTrujilloV/PedroTrujilloV.github.io/main/data/resume.json')
  // return fakeFetch() // uncomment this to use with the local json for testing only
    .then(response => response.json())
    .catch(error => {
      console.error("Error loading resume data:", error);
      throw error; // Re-throw to handle in main flow
    });
}

// 2.  Existing processing functions (unchanged)
function processData(data) {
  Object.entries(data).forEach(([key, value]) => {
    if (key == ResumeSection.SKILLS) {
      fetchSkills(key, value);
    }
    if (key == ResumeSection.COURSES_CERTIFICATES) {
      fetchCoursesAndCertificates(key, value);
    }
    if (key == ResumeSection.PORTFOLIO) {
      createPortfolioSection(value);
    }
  });
}

// 3. Gentle initialization
document.addEventListener('DOMContentLoaded', function() {
  // Show loading overlay (Bootstrap spinner already visible)
  
  loadResumeData()
    .then(data => {
      // Process data
      processData(data);
      
      // Brief delay for smooth transition (200ms)
      return new Promise(resolve => setTimeout(resolve, 200));
    })
    .then(() => {
      // Hide loading overlay
      const overlay = document.getElementById('loadingOverlay');
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.3s ease';
      
      // Show content
      document.getElementById('pageContent').style.display = 'block';
      
      // Remove overlay after fadeout
      setTimeout(() => overlay.remove(), 300);
      
      // Initialize animations if needed
      if (typeof AOS !== 'undefined') AOS.init();
    })
    .catch(error => {
      // Error handling with Bootstrap alert
      const overlay = document.getElementById('loadingOverlay');
      overlay.innerHTML = `
        <div class="alert alert-danger">
          <h4 class="alert-heading">Loading Error</h4>
          <p>Failed to load resume data. Please try again later.</p>
          <hr>
          <button onclick="window.location.reload()" class="btn btn-danger">
            Reload Page
          </button>
        </div>
      `;
    });
});
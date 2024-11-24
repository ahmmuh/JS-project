// exports: {
// }

// import { jobs } from "../data/job.js";
// const jobContainer = document.querySelector("#jobContainer"); // Add a container to hold the cards
// const jobBtn = document.querySelector("#jobBtn");

// const jobCard = jobs
//   .map((job) => {
//     return `
//    <div class="max-w-sm w-full bg-white rounded-lg shadow-lg hover:bg-gray-300 p-6 shadow-10">
//           <!-- Card Image -->
//           <img
//             src="https://picsum.photos/400/200"
//             alt="Card Image"
//             class="rounded-lg w-full h-48 object-cover mb-2 bg-clip-content" />

//           <!-- Card Title -->
//           <h2 class="text-xl font-semibold text-gray-800 mb-2 title">
//             ${job.title}
//           </h2>

//           <p class="text-gray-600 text-base mb-4">
//         ${job.salary}
//           </p>
//           <p>
//         ${job.description}

//           </p>

//           <p class="text-text-4xl">${job.location}</p>
//           <button class="bg-pink-300 p-2 w-32 my-3 rounded-full text-white hover:bg-pink-500" id="applyBtn" onclick="applyJob(${JSON.stringify(
//             job
//           )})">
//         Sök
//           </button>
//         </div>
//     `;
//   })

//   .join("");
// jobContainer.innerHTML = jobCard;

// function applyJob(job) {
//   console.log("job", job);
//   alert("You applied for " + job.title);
// }

import { jobs } from "../data/job.js";

// Hämta container för att sätta in jobben
const jobContainer = document.querySelector("#jobContainer");
const jobBtn = document.querySelector("#jobBtn");

// Generera korten dynamiskt
const jobCard = jobs
  .map((job) => {
    return `
   <div class="max-w-sm w-full bg-white rounded-lg shadow-lg hover:bg-gray-300 p-6 shadow-10" onclick="test()">
          <!-- Card Image -->
          <img
            src="https://picsum.photos/400/200"
            alt="Card Image"
            class="rounded-lg w-full h-48 object-cover mb-2 bg-clip-content" />

          <!-- Card Title -->
          <h2 class="text-xl font-semibold text-gray-800 mb-2 title">
            ${job.title}
          </h2>

          <p class="text-gray-600 text-base mb-4">
            ${job.salary}
          </p>

          <p>
            ${job.description}
          </p>

          <p class="text-text-4xl">${job.location}</p>

          <!-- Apply Button -->
          <button class="bg-pink-300 p-2 w-32 my-3 rounded-full text-white hover:bg-pink-500" id="applyBtn" onclick="applyJob(job)">
            Sök
          </button>
        </div>
    `;
  })
    .join(""); // Join array of strings into a single string to set it as innerHTML
  


jobContainer.addEventListener("click", function (event) {
    if (event.target && event.target.id === "applyBtn") {
            
        }
    })

// Lägg till jobben i containern
jobContainer.innerHTML = jobCard;

// Funktion för att hantera jobbansökningar
function applyJob(job) {
  console.log("Job:", job); // Korrigera 'jo' till 'job'
  alert("You applied for " + job.title);
}

if (jobCard) {
  function test() {
    console.log("Test");
  }
}

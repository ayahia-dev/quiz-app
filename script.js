let quizData = [
  {q:"The modern job market is best described as:",a:{a:"Static system",b:"Complex and dynamic ecosystem",c:"Government-controlled",d:"Supply-driven"},c:"b"},
  {q:"Which is NOT a primary factor influencing the job market?",a:{a:"Economic conditions",b:"Astrological signs",c:"Technology",d:"Government"},c:"b"},
  {q:"During an economic downturn, businesses are most likely to:",a:{a:"Expand",b:"Reduce hiring",c:"Ignore economy",d:"Short-term only"},c:"b"},
  {q:"Automation mainly replaces:",a:{a:"Creative roles",b:"Routine tasks",c:"Healthcare",d:"Executives"},c:"b"},
  {q:"Skill gap refers to:",a:{a:"Too many skilled",b:"Mismatch skills",c:"Age gap",d:"Job surplus"},c:"b"},
  {q:"Aging population increases jobs in:",a:{a:"Retail",b:"Startups",c:"Healthcare",d:"Manufacturing"},c:"c"},
  {q:"Which policy creates jobs via projects?",a:{a:"Monetary",b:"Fiscal",c:"Immigration",d:"Foreign"},c:"b"},
  {q:"Globalization causes job displacement through:",a:{a:"Local hiring",b:"Offshoring",c:"High wages",d:"No trade"},c:"b"},
  {q:"Local job market influenced by:",a:{a:"Global only",b:"Local industries",c:"Foreign only",d:"Unemployment"},c:"b"},
  {q:"Remote work enabled by:",a:{a:"Mandates",b:"Technology",c:"Decline",d:"Competition"},c:"b"},
  {q:"Demand for digital marketing driven by:",a:{a:"E-commerce decline",b:"Sustainable energy",c:"Digital services",d:"Retail drop"},c:"c"},
  {q:"Monetary policy affects jobs by:",a:{a:"Wages",b:"Interest rates",c:"Trade",d:"Education"},c:"b"},
  {q:"Gig economy driven by:",a:{a:"No platforms",b:"Freelance work",c:"No tools",d:"Permanent jobs"},c:"b"},
  {q:"Green economy creates jobs in:",a:{a:"Fossil fuels",b:"Renewable energy",c:"Manufacturing",d:"Unsustainable"},c:"b"},
  {q:"National job market is:",a:{a:"Local only",b:"Shaped by policies",c:"No tech effect",d:"One city"},c:"b"},
  {q:"Emigration leads to:",a:{a:"More jobs",b:"Labor shortages",c:"Higher wages",d:"Less gap"},c:"b"},
  {q:"Economic indicator affecting jobs:",a:{a:"Weather",b:"GDP growth",c:"Culture",d:"Speeches"},c:"b"},
  {q:"Digital transformation increases demand for:",a:{a:"Handwriting",b:"Cybersecurity",c:"Farming",d:"Bookkeeping"},c:"b"},
  {q:"Balance between jobs and seekers determines:",a:{a:"Debt",b:"Market conditions",c:"Immigration",d:"Curriculum"},c:"b"},
  {q:"Global job market allows:",a:{a:"No trade",b:"Work across countries",c:"Shrinking",d:"One gov"},c:"b"},

  {q:"Core skills are:",a:{a:"Technical only",b:"Transferable",c:"Leadership only",d:"Industry"},c:"b"},
  {q:"Which is a core skill?",a:{a:"Python",b:"Accounting",c:"Communication",d:"CAD"},c:"c"},
  {q:"Emotional Intelligence belongs to:",a:{a:"Technical",b:"Interpersonal",c:"Industry",d:"Data"},c:"b"},
  {q:"Adjusting to change is:",a:{a:"Tech",b:"Adaptability",c:"Finance",d:"Negotiation"},c:"b"},
  {q:"Identifying issues & solutions:",a:{a:"Networking",b:"Problem solving",c:"Cloud",d:"Speaking"},c:"b"},
  {q:"Technical skills are:",a:{a:"IT only",b:"Specialized",c:"Core skills",d:"Useless"},c:"b"},
  {q:"Excel & Python fall under:",a:{a:"Soft",b:"Data analysis",c:"Leadership",d:"Networking"},c:"b"},
  {q:"AWS & Azure are:",a:{a:"Digital literacy",b:"Cloud computing",c:"Accounting",d:"EI"},c:"b"},
  {q:"Industry-specific skill:",a:{a:"Word",b:"Economics",c:"CAD",d:"Listening"},c:"c"},
  {q:"Business acumen means:",a:{a:"Finance only",b:"High-value skills",c:"Basic IT",d:"Entry"},c:"b"},
  {q:"Balance sheet relates to:",a:{a:"EI",b:"Accounting",c:"Marketing",d:"Time"},c:"b"},
  {q:"Using data for decisions:",a:{a:"Networking",b:"Data analysis",c:"Writing",d:"Endurance"},c:"b"},
  {q:"Leadership focuses on:",a:{a:"Processes",b:"Vision",c:"Operations",d:"Budget"},c:"b"},
  {q:"Professional relationships:",a:{a:"Modeling",b:"Networking",c:"Writing",d:"Discipline"},c:"b"},
  {q:"Key EI component:",a:{a:"Speed coding",b:"Manage emotions",c:"Visualization",d:"Cloud"},c:"b"},
  {q:"Economics helps in:",a:{a:"Strategy",b:"Design",c:"Language",d:"Fitness"},c:"a"},
  {q:"Mutual agreements:",a:{a:"Negotiation",b:"Entry",c:"Memory",d:"Solo"},c:"a"},
  {q:"Successful professionals blend:",a:{a:"Tech only",b:"Biz only",c:"All skills",d:"Soft only"},c:"c"},
  {q:"Soft skill example:",a:{a:"Java",b:"Teamwork",c:"Excel",d:"Ratios"},c:"b"},
  {q:"Self-regulation means:",a:{a:"Managing emotions",b:"Leading",c:"Analyzing",d:"Design"},c:"a"},

  {q:"CV serves as:",a:{a:"Diary",b:"Marketing doc",c:"Memo",d:"Contract"},c:"b"},
  {q:"Strategic tailoring means:",a:{a:"Same CV",b:"Customize",c:"Longest",d:"No exp"},c:"b"},
  {q:"Strong CV verb:",a:{a:"Was",b:"Helped",c:"Led",d:"Watched"},c:"c"},
  {q:"Why quantify achievements?",a:{a:"Longer",b:"Show impact",c:"Hide lack",d:"Law"},c:"b"},
  {q:"CV length entry-level:",a:{a:"4 pages",b:"1 page",c:"Any",d:"Half"},c:"b"},
  {q:"After header comes:",a:{a:"Refs",b:"Summary",c:"Hobbies",d:"Grades"},c:"b"},
  {q:"Optimize CV for ATS:",a:{a:"Images",b:"Keywords",c:"Essay",d:"No skills"},c:"b"},
  {q:"List experience order:",a:{a:"Reverse",b:"Random",c:"Personal",d:"Alphabet"},c:"a"},
  {q:"Do NOT include:",a:{a:"Email",b:"Certs",c:"Bad socials",d:"Achievements"},c:"c"},
  {q:"Professional summary purpose:",a:{a:"All jobs",b:"Overview",c:"Family",d:"Salary"},c:"b"},
  {q:"Professional font:",a:{a:"Comic",b:"Arial",c:"Script",d:"Handwritten"},c:"b"},
  {q:"Proofreading helps:",a:{a:"Length",b:"Fix errors",c:"Randomize",d:"Remove contacts"},c:"b"},
  {q:"Additional sections include:",a:{a:"Personal",b:"Volunteer",c:"Politics",d:"Religion"},c:"b"},
  {q:"Describe duties by:",a:{a:"All tasks",b:"Strong verbs",c:"Vague",d:"Copy JD"},c:"b"},
  {q:"Professional email:",a:{a:"fun@mail",b:"name@mail",c:"work@mail",d:"family@mail"},c:"b"},
  {q:"Relevant coursework useful for:",a:{a:"Seniors",b:"Graduates",c:"CEOs",d:"Freelancers"},c:"b"},
  {q:"Best quantified example:",a:{a:"Sales",b:"Sales +15%",c:"Teamwork",d:"Familiar"},c:"b"},
  {q:"Goal of CV:",a:{a:"All interviews",b:"No interview",c:"Win interview",d:"Life story"},c:"c"},
  {q:"Feedback helps:",a:{a:"Guarantee job",b:"Improve clarity",c:"Violate privacy",d:"Complicate"},c:"b"},
  {q:"Career success depends on:",a:{a:"Static skill",b:"Degree",c:"Balanced skills",d:"Networking only"},c:"c"}
];

// Shuffle questions
quizData.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitBtn = document.getElementById("submit");

submitBtn.innerText = "Check Answer";

function loadQuestion() {
  const q = quizData[currentQuestion];
  let answersHTML = "";

  for (let key in q.a) {
    answersHTML += `
      <label>
        <input type="radio" name="answer" value="${key}">
        ${key}) ${q.a[key]}
      </label>
    `;
  }

  quizContainer.innerHTML = `
    <div class="question">${currentQuestion + 1}. ${q.q}</div>
    <div class="answers">${answersHTML}</div>
  `;
}

function checkAnswer() {
  const selected = document.querySelector(`input[name="answer"]:checked`);
  if (!selected) {
    alert("Choose an answer first!");
    return;
  }

  const correct = quizData[currentQuestion].c;

  if (selected.value === correct) {
    score++;
    resultContainer.innerHTML = "✅ Correct!";
  } else {
    resultContainer.innerHTML = `❌ Wrong! Correct answer is (${correct})`;
  }

  submitBtn.innerText = "Next Question";
  submitBtn.onclick = nextQuestion;
}

function nextQuestion() {
  currentQuestion++;
  resultContainer.innerHTML = "";

  if (currentQuestion < quizData.length) {
    loadQuestion();
    submitBtn.innerText = "Check Answer";
    submitBtn.onclick = checkAnswer;
  } else {
    quizContainer.innerHTML = `<h2>Quiz Finished!</h2>`;
    resultContainer.innerHTML = `Your Score: ${score} / ${quizData.length}`;
    submitBtn.style.display = "none";
  }
}

submitBtn.onclick = checkAnswer;
loadQuestion();



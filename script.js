const quizData = [
  {
    q: "The modern job market is best described as:",
    a: {
      a: "A static and predictable system",
      b: "A complex and dynamic ecosystem",
      c: "A government-controlled environment",
      d: "A purely supply-driven marketplace"
    },
    c: "b"
  },
  {
    q: "Which of the following is NOT a primary factor influencing the job market?",
    a: {
      a: "Economic conditions",
      b: "Astrological signs",
      c: "Technological advancements",
      d: "Government policies"
    },
    c: "b"
  },
  {
    q: "During an economic downturn, businesses are most likely to:",
    a: {
      a: "Increase hiring and expand operations",
      b: "Reduce hiring or lay off workers",
      c: "Ignore economic indicators",
      d: "Focus only on short-term gains"
    },
    c: "b"
  },
  {
    q: "Automation and AI primarily lead to job displacement in:",
    a: {
      a: "Creative and strategic roles",
      b: "Routine and repetitive tasks",
      c: "Healthcare and education only",
      d: "Executive management positions"
    },
    c: "b"
  },
  {
    q: "The term \"skill gap\" refers to:",
    a: {
      a: "Too many skilled workers in the market",
      b: "A mismatch between employer needs and worker abilities",
      c: "The gap between education levels and age groups",
      d: "A surplus of high-paying jobs"
    },
    c: "b"
  },
  {
    q: "An aging population is likely to increase demand for jobs in:",
    a: {
      a: "Entry-level retail",
      b: "Technology startups",
      c: "Healthcare and social services",
      d: "Manufacturing and construction"
    },
    c: "c"
  },
  {
    q: "Which government policy directly affects job creation through public projects?",
    a: {
      a: "Monetary policy",
      b: "Fiscal policy",
      c: "Immigration policy",
      d: "Foreign policy"
    },
    c: "b"
  },
  {
    q: "Globalization can lead to job displacement through:",
    a: {
      a: "Increased local hiring",
      b: "Offshoring and outsourcing",
      c: "Higher wages for all workers",
      d: "Reduced international trade"
    },
    c: "b"
  },
  {
    q: "A local job market is most influenced by:",
    a: {
      a: "Global economic trends",
      b: "Local industries and cost of living",
      c: "Foreign investment only",
      d: "National unemployment rates"
    },
    c: "b"
  },
  {
    q: "The rise of remote work is primarily enabled by:",
    a: {
      a: "Government mandates",
      b: "Technological advancements",
      c: "Declining industries",
      d: "Reduced competition"
    },
    c: "b"
  },
  {
    q: "Which industry trend is driving demand for digital marketing skills?",
    a: {
      a: "Decline of e-commerce",
      b: "Growth of sustainable energy",
      c: "Expansion of digital services",
      d: "Reduction in online retail"
    },
    c: "c"
  },
  {
    q: "Monetary policy influences the job market by:",
    a: {
      a: "Setting minimum wage levels",
      b: "Adjusting interest rates",
      c: "Creating trade agreements",
      d: "Funding education programs"
    },
    c: "b"
  },
  {
    q: "Which factor is a key driver of the gig economy?",
    a: {
      a: "Decline in digital platforms",
      b: "Rise of freelance and contract work",
      c: "Reduction in remote work tools",
      d: "Increased permanent employment"
    },
    c: "b"
  },
  {
    q: "The \"green economy\" is creating new jobs in:",
    a: {
      a: "Fossil fuel extraction",
      b: "Renewable energy sectors",
      c: "Traditional manufacturing",
      d: "Non-sustainable industries"
    },
    c: "b"
  },
  {
    q: "Which is a characteristic of the national job market?",
    a: {
      a: "Influenced only by local businesses",
      b: "Shaped by broader economic factors and government policies",
      c: "Unaffected by technological change",
      d: "Limited to one city or region"
    },
    c: "b"
  },
  {
    q: "Emigration from a country can lead to:",
    a: {
      a: "Increased local job opportunities",
      b: "Labor shortages in specific industries",
      c: "Higher wages for all workers",
      d: "Reduced skill gaps"
    },
    c: "b"
  },
  {
    q: "Which is an example of an economic indicator that affects the job market?",
    a: {
      a: "Weather patterns",
      b: "GDP growth",
      c: "Cultural trends",
      d: "Political speeches"
    },
    c: "b"
  },
  {
    q: "Digital transformation is increasing demand for skills in:",
    a: {
      a: "Handwriting analysis",
      b: "Data analysis and cybersecurity",
      c: "Traditional farming techniques",
      d: "Manual bookkeeping"
    },
    c: "b"
  },
  {
    q: "The balance between available jobs and job seekers determines:",
    a: {
      a: "The national debt",
      b: "Overall market conditions",
      c: "Immigration rates",
      d: "Educational curriculum"
    },
    c: "b"
  },
  {
    q: "Which statement about the global job market is true?",
    a: {
      a: "It is unaffected by international trade.",
      b: "It allows individuals to seek opportunities across countries.",
      c: "It is shrinking due to technological isolation.",
      d: "It is regulated by a single global government."
    },
    c: "b"
  },
  {
    q: "Core skills are best described as:",
    a: {
      a: "Skills used only in technical roles",
      b: "Foundational abilities transferable across industries",
      c: "Skills required only for leadership positions",
      d: "Industry-specific knowledge"
    },
    c: "b"
  },
  {
    q: "Which of the following is a core skill?",
    a: {
      a: "Programming in Python",
      b: "Financial accounting",
      c: "Effective communication",
      d: "Operating CAD software"
    },
    c: "c"
  },
  {
    q: "Emotional Intelligence (EI) is a subset of:",
    a: {
      a: "Technical skills",
      b: "Interpersonal skills",
      c: "Industry-specific skills",
      d: "Data analysis skills"
    },
    c: "b"
  },
  {
    q: "The ability to adjust to change and recover from setbacks is called:",
    a: {
      a: "Technical proficiency",
      b: "Adaptability and resilience",
      c: "Financial literacy",
      d: "Negotiation skill"
    },
    c: "b"
  },
  {
    q: "Which skill involves identifying issues and evaluating potential solutions?",
    a: {
      a: "Networking",
      b: "Problem-solving and critical thinking",
      c: "Cloud computing",
      d: "Public speaking"
    },
    c: "b"
  },
  {
    q: "Technical skills are:",
    a: {
      a: "Only applicable to IT jobs",
      b: "Specialized knowledge for specific tasks",
      c: "The same as core skills",
      d: "Not important in the digital age"
    },
    c: "b"
  },
  {
    q: "Proficiency in Excel, Python, or Tableau falls under:",
    a: {
      a: "Soft skills",
      b: "Data analysis and visualization skills",
      c: "Leadership skills",
      d: "Networking skills"
    },
    c: "b"
  },
  {
    q: "Knowledge of AWS, Azure, or GCP is part of:",
    a: {
      a: "Digital literacy",
      b: "Cybersecurity and cloud computing",
      c: "Financial accounting",
      d: "Emotional intelligence"
    },
    c: "b"
  },
  {
    q: "Industry-specific technical skills include:",
    a: {
      a: "Using Microsoft Word",
      b: "Understanding general economics",
      c: "Operating CAD software for engineers",
      d: "Practicing active listening"
    },
    c: "c"
  },
  {
    q: "Business acumen refers to:",
    a: {
      a: "Only financial management skills",
      b: "High-value skills that drive organizational success",
      c: "Basic computer proficiency",
      d: "Entry-level technical skills"
    },
    c: "b"
  },
  {
    q: "The ability to interpret a balance sheet is part of:",
    a: {
      a: "Emotional intelligence",
      b: "Financial accounting literacy",
      c: "Digital marketing",
      d: "Time management"
    },
    c: "b"
  },
  {
    q: "Which skill involves using data to solve business problems and make decisions?",
    a: {
      a: "Networking",
      b: "Data analysis for decision-making",
      c: "Creative writing",
      d: "Physical endurance"
    },
    c: "b"
  },
  {
    q: "Leadership is distinct from management because it focuses more on:",
    a: {
      a: "Implementing processes",
      b: "Inspiring people and articulating a vision",
      c: "Day-to-day operations",
      d: "Budget allocation"
    },
    c: "b"
  },
  {
    q: "The proactive cultivation of professional relationships is known as:",
    a: {
      a: "Financial modeling",
      b: "Networking",
      c: "Technical writing",
      d: "Self-discipline"
    },
    c: "b"
  },
  {
    q: "Which of the following is a key component of Emotional Intelligence (EI)?",
    a: {
      a: "Programming speed",
      b: "Understanding and managing one's own emotions",
      c: "Data visualization ability",
      d: "Cloud infrastructure knowledge"
    },
    c: "b"
  },
  {
    q: "A framework for strategic decision-making regarding pricing and demand is provided by:",
    a: {
      a: "An understanding of economics",
      b: "Proficiency in graphic design",
      c: "Knowledge of a foreign language",
      d: "Physical fitness"
    },
    c: "a"
  },
  {
    q: "Which skill is essential for reaching mutually beneficial agreements?",
    a: {
      a: "Negotiation",
      b: "Data entry",
      c: "Memorization",
      d: "Solo project work"
    },
    c: "a"
  },
  {
    q: "The most successful professionals blend:",
    a: {
      a: "Only technical and core skills",
      b: "Only business and networking skills",
      c: "Technical proficiency, core skills, and business acumen",
      d: "Only industry-specific and soft skills"
    },
    c: "c"
  },
  {
    q: "Which of these is an example of a soft skill?",
    a: {
      a: "Coding in Java",
      b: "Teamwork and collaboration",
      c: "Using a specific software tool",
      d: "Calculating financial ratios"
    },
    c: "b"
  },
  {
    q: "Self-regulation, a part of EI, involves:",
    a: {
      a: "Managing one's emotions and impulses",
      b: "Leading large teams",
      c: "Analyzing big datasets",
      d: "Designing marketing campaigns"
    },
    c: "a"
  },

  {
    q: "A well-crafted CV serves primarily as:",
    a: {
      a: "A personal diary",
      b: "A first impression and personal marketing document",
      c: "An internal company memo",
      d: "A legal contract"
    },
    c: "b"
  },
  {
    q: "The principle of \"strategic tailoring\" for a CV means:",
    a: {
      a: "Using the same CV for every job application",
      b: "Customizing the CV for each specific job application",
      c: "Making the CV as long as possible",
      d: "Removing all work experience"
    },
    c: "b"
  },
  {
    q: "Which of the following is a strong action verb for a CV?",
    a: {
      a: "Was responsible for",
      b: "Helped with",
      c: "Led or Implemented",
      d: "Watched over"
    },
    c: "c"
  },
  {
    q: "Quantifying achievements in a CV is important because it:",
    a: {
      a: "Makes the CV longer",
      b: "Provides concrete evidence of impact",
      c: "Hides lack of experience",
      d: "Is required by law"
    },
    c: "b"
  },
  {
    q: "The recommended length for a CV for most entry-level positions is:",
    a: {
      a: "Three to four pages",
      b: "One page",
      c: "As long as possible",
      d: "Half a page"
    },
    c: "b"
  },
  {
    q: "Which section of a CV should immediately follow the header?",
    a: {
      a: "List of references",
      b: "Compelling summary or objective",
      c: "Detailed personal hobbies",
      d: "High school grades"
    },
    c: "b"
  },
  {
    q: "To optimize a CV for Applicant Tracking Systems (ATS), you should:",
    a: {
      a: "Use images and graphics extensively",
      b: "Use relevant keywords from the job description",
      c: "Write in a narrative essay format",
      d: "Avoid listing any skills"
    },
    c: "b"
  },
  {
    q: "When listing work experience, it is best to use:",
    a: {
      a: "Reverse-chronological order",
      b: "Random order",
      c: "Order of personal preference",
      d: "Alphabetical order by company name"
    },
    c: "a"
  },
  {
    q: "Which of these should NOT be included in a professional CV?",
    a: {
      a: "Professional email address",
      b: "Relevant certifications",
      c: "Unprofessional social media profiles",
      d: "Quantified achievements"
    },
    c: "c"
  },
  {
    q: "The purpose of a professional summary in a CV is to:",
    a: {
      a: "List every job you've ever had",
      b: "Provide a concise overview of skills and career goals",
      c: "Include personal family information",
      d: "State your salary requirements"
    },
    c: "b"
  },
  {
    q: "Which font is generally considered professional for a CV?",
    a: {
      a: "Comic Sans",
      b: "Times New Roman or Arial",
      c: "Decorative script font",
      d: "Handwritten style font"
    },
    c: "b"
  },
  {
    q: "Proofreading a CV is crucial to:",
    a: {
      a: "Increase its length",
      b: "Eliminate typos and grammatical errors",
      c: "Change the format randomly",
      d: "Remove all contact information"
    },
    c: "b"
  },
  {
    q: "An \"Additional Sections\" part of a CV might include:",
    a: {
      a: "Irrelevant personal details",
      b: "Volunteer experience or relevant projects",
      c: "Political affiliations",
      d: "Religious beliefs"
    },
    c: "b"
  },
  {
    q: "When describing responsibilities in a previous role, you should:",
    a: {
      a: "List every minor task",
      b: "Focus on duties and achievements with strong verbs and metrics",
      c: "Use vague and general statements",
      d: "Copy the job description word for word"
    },
    c: "b"
  },
  {
    q: "A professional email address for a CV should be:",
    a: {
      a: "Something fun like party@email.com",
      b: "A variation of your name like firstname.lastname@email.com",
      c: "Your current work email secretly",
      d: "An email shared with family"
    },
    c: "b"
  },
  {
    q: "Including relevant coursework is useful for:",
    a: {
      a: "20+ years experience professionals",
      b: "Recent graduates or career changers",
      c: "CEOs",
      d: "Freelancers"
    },
    c: "b"
  },
  {
    q: "Which is the best quantified achievement?",
    a: {
      a: "Responsible for sales",
      b: "Increased quarterly sales by 15%",
      c: "Worked in a team",
      d: "Familiar with software"
    },
    c: "b"
  },
  {
    q: "The primary goal of a CV is to:",
    a: {
      a: "Get as many interviews regardless of fit",
      b: "Secure a job without interview",
      c: "Demonstrate fit and win an interview",
      d: "Show your entire life"
    },
    c: "c"
  },
  {
    q: "Seeking feedback on your CV helps to:",
    a: {
      a: "Guarantee job offer",
      b: "Identify errors and improve clarity",
      c: "Violate privacy",
      d: "Make it complex"
    },
    c: "b"
  },
  {
    q: "Career success depends on:",
    a: {
      a: "Single static skill",
      b: "Degree alone",
      c: "Balanced skill portfolio and self-presentation",
      d: "Networking only"
    },
    c: "c"
  }

];

// Shuffle questions
quizData.sort(() => Math.random() - 0.5);

let current = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitBtn = document.getElementById("submit");

submitBtn.innerText = "Check Answer";

function loadQuestion() {
  const q = quizData[current];
  let html = "";
  for (let key in q.a) {
    html += `
      <label>
        <input type="radio" name="answer" value="${key}">
        ${key}) ${q.a[key]}
      </label>
    `;
  }
  quizContainer.innerHTML = `
    <div class="question">${current + 1}. ${q.q}</div>
    <div class="answers">${html}</div>
  `;
}

function checkAnswer() {
  const selected = document.querySelector("input[name='answer']:checked");
  if (!selected) {
    alert("Choose an answer first!");
    return;
  }

  if (selected.value === quizData[current].c) {
    score++;
    resultContainer.innerHTML = "✅ Correct!";
  } else {
    resultContainer.innerHTML = `❌ Wrong! Correct answer is (${quizData[current].c})`;
  }

  submitBtn.innerText = "Next";
  submitBtn.onclick = nextQuestion;
}

function nextQuestion() {
  current++;
  resultContainer.innerHTML = "";

  if (current < quizData.length) {
    loadQuestion();
    submitBtn.innerText = "Check Answer";
    submitBtn.onclick = checkAnswer;
  } else {
    quizContainer.innerHTML = "<h2>Quiz Finished!</h2>";
    resultContainer.innerHTML = `Your score: ${score} / ${quizData.length}`;
    submitBtn.style.display = "none";
  }
}

submitBtn.onclick = checkAnswer;
loadQuestion();

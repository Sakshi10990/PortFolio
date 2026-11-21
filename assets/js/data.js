
const RESUME_IMGS=["assets/resume/page-1.jpg","assets/resume/page-2.jpg"];
/* ===== EDITABLE DATA (kept separate from presentation) ===== */
const SITE={
  email:"sakshi.singh9907@gmail.com",   // edit, or set "" to hide
  linkedin:"https://www.linkedin.com/in/sakshi-singh-212619159/",
  phone:"9704985017",
  resumeUrl:""                          // add hosted PDF URL when ready; empty hides the download button
};
const PROJECTS=[
  {slug:"firstmile",title:"Firstmile",short:"A little problem-solving. A lot of documentation.",category:"Product Documentation / PRD",type:"Independent Product Project",cta:"Investigate the evidence",color:"#E6D9FF",links:[{label:"Read the PRD",url:"https://docs.google.com/document/d/18DUOAXHbhj5G-1FQHxmUMirFxFmDC4jxW7L1tC-GBsU/edit?tab=t.0#heading=h.4kzkqrj36x1u"},{label:"Visit Firstmile",url:"https://firstmile-two.vercel.app/#home"}],status:"published",sections:[]},
  {slug:"report-allocation-tracker",title:"Report Allocation Tracker",short:"A readable doc and a working prototype.",category:"Product Documentation / Prototype",type:"Independent Product Project",cta:"Investigate the evidence",color:"#CDE9F4",links:[{label:"Read the doc",url:"https://docs.google.com/document/d/1p5682T_YBl6oFjXQm2XdjK5RPcXEECMz/edit?usp=sharing&ouid=104183914058553711819&rtpof=true&sd=true"},{label:"Try the prototype",url:"https://www.figma.com/community/file/1705399250770827804/recovery-analyst-tracker-protoype-1"}],status:"published",sections:[]},
  {slug:"report-allocation-automation",title:"Report Allocation Automation",short:"The case study behind the automation.",category:"Case Study",type:"Process Automation",cta:"Investigate the evidence",color:"#FFE0B9",links:[{label:"Read the case study",url:"https://docs.google.com/document/d/1z-4mWIm6o7ESQtU_57qfcnY_kcXFepbL/edit?usp=sharing&rtpof=true&sd=true"}],status:"published",sections:[]}
  // status:"published" makes a project public. Sections: [{title:"Problem",body:"..."}] — empty ones are hidden.
];
const TIMELINE=[
 {t:"Engineering",s:"B.Tech, Computer Science",d:"B.Tech in Computer Science and Engineering at GNIT, JNTU Hyderabad.",m:"A family-approved investment in my future.",c:"#A78BFA"},
 {t:"CampK12",s:"Operations Associate · 2020–21",d:"Kept remote tutoring running by fixing technical issues and keeping teachers, students and parents in sync.",m:"Turns out, people don’t always read instructions.",c:"#FFD166"},
 {t:"TCS",s:"Metrics Analyst · 2021–24",d:"Turned operational data into reports and insights, and served as a Team Lead in a Testing Centre of Excellence.",m:"Discovered that requirements change more frequently than exam syllabuses.",c:"#82C9B7"},
 {t:"Synchrony",s:"Senior Representative · 2024–now",d:"Compliance-driven operations, plus Power Automate workflows and a Power Apps Employee Pulse app.",m:"A change of industry. The meetings remained.",c:"#FF6B6B"},
 {t:"Product Management",s:"Learning and transitioning",d:"Currently learning and transitioning into Product Management.",m:"Finally, a career where asking ‘but why?’ is considered a skill.",c:"#6C8CFF"}
];
const UL=l=>`<ul style="margin:0;padding-left:20px;line-height:1.5">${l.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const TK=g=>`<div style="font-size:13px;line-height:1.35">${g.map(x=>`<p style="margin:0 0 5px"><b>${x[0]}</b><br>${x[1].join(' · ')}</p>`).join('')}</div>`;
const ABOUT=[
 ["The Why Detector","Asks ‘but why?’ until things make sense.",UL(["Curiosity","Analytical Thinking","Problem-Solving","Attention to Detail"]),"#E6D9FF"],
 ["The Chaos Translator","Turns messy inputs into something a team can act on.",UL(["Requirement Gathering","Business Analysis","Data Analysis","Prioritisation"]),"#CDE9F4"],
 ["The Human Context","Remembers there are people on the other side of the screen.",UL(["Clear Communication","Active Listening","Stakeholder Management","User Empathy"]),"#FFE0B9"],
 ["The Iteration Loop","Ship, learn, adjust. Repeat.",UL(["Adaptability","Learning Agility","Ownership","Continuous Improvement"]),"#F6C9D3"],
 ["The Toolkit","The tools behind the thinking.",TK([["Automation &amp; Apps",["Power Apps","Power Automate","SharePoint"]],["Data &amp; Analysis",["Excel","Power Query","Power BI","SQL"]],["Collaboration &amp; Delivery",["Azure DevOps","Microsoft 365"]]]),"#FFF0AE"]
];
const STICKS=[["One more iteration.","There is always one more iteration.","#FFF0AE"],["This could have been an email.","Reader, it was a 45-minute meeting.","#F6C9D3"],["User feedback received.","Feedback acknowledged. Feelings logged separately.","#D2F0E4"],["Have we validated this?","Asking for a friend. The friend is a roadmap.","#CDE9F4"],["Scope creep detected.","Pretending to be surprised.","#FFE0B9"]];
const STATS=[["Curiosity","98%",98,"#A78BFA"],["Overthinking","87%",87,"#FF6B6B"],["User empathy","Loading...",null,"#82C9B7"],["Scope management","Under observation.",40,"#FFD166"],["Coffee dependency","Not measured.",null,"#F4A261"],["Product brain","Active.",100,"#6C8CFF"]];

const CERTS=[{"title": "Certificate of Excellence in Evaluation", "issuer": "iHUB DivyaSampark, IIT Roorkee × Masai", "sub": "Product Management with Applied AI Program", "date": "06/05/2026", "img": "assets/certs/cert-1.jpg"}, {"title": "Certificate of Total Engagement", "issuer": "iHUB DivyaSampark, IIT Roorkee × Masai", "sub": "Product Management with Applied AI Program", "date": "27-06-2026", "img": "assets/certs/cert-2.jpg"}, {"title": "Certificate of Excellence in Evaluation", "issuer": "iHUB DivyaSampark, IIT Roorkee × Masai", "sub": "Product Management with Applied AI Program", "date": "01-07-2026", "img": "assets/certs/cert-3.jpg"}, {"title": "Certificate of Excellence in Evaluation", "issuer": "iHUB DivyaSampark, IIT Roorkee × Masai", "sub": "Product Management with Applied AI Program", "date": "01/08/2026", "img": "assets/certs/cert-4.jpg"}, {"title": "Certificate of Excellence in Evaluation", "issuer": "iHUB DivyaSampark, IIT Roorkee × Masai", "sub": "Product Management with Applied AI Program", "date": "04/11/2026", "img": "assets/certs/cert-5.jpg"}];

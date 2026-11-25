export const CLUB = {
  name: "Career & Soft Skills Development Club",
  short: "CSSD Club",
  school: "Govt. Mohammadpur Model School & College",
  tagline: "Build Thyself to Build the World",
  email: "gmmsccssdclub@gmail.com",
  form: "https://forms.gle/JxvFBcyxFXcJ5XYN7",
  facebook: "https://www.facebook.com/gmmsc.cssdclub",
  instagram:
    "https://www.instagram.com/gmmsc_cssd.club?dlrf=MTZvcXp5M3E0bW1oNw==",
  location: "Inside the campus of Govt. Mohammadpur Model School & College",
  map: "https://www.google.com/maps/search/?api=1&query=Govt+Mohammadpur+Model+School+and+College+Dhaka",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/career", label: "Career" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
] as const;

export const ANNOUNCEMENTS = [
  {
    date: "Open now",
    title: "Membership registration is open",
    text: "General member recruitment has been completed, but any student who wants to join can still register through the online form.",
  },
  {
    date: "2026–2027",
    title: "New executive committee announced",
    text: "Meet the 13 students who will lead the club this session on the About Us page.",
  },
  {
    date: "Coming soon",
    title: "Workshops, mentorship and career events",
    text: "Dates for upcoming sessions will be posted here and on our Facebook and Instagram pages.",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    year: "2026–2027",
    title: "New executive committee formed",
    text: "A 13-member panel took charge for the 2026–2027 session.",
  },
] as const;

export const OPPORTUNITIES = [
  {
    title: "International scholarship info session",
    status: "Date to be announced",
    text: "How to find scholarships, what committees look for, and how to start preparing in high school.",
  },
  {
    title: "Public speaking and communication workshop",
    status: "Date to be announced",
    text: "Practice speaking clearly and confidently in front of a group.",
  },
  {
    title: "CV and personal statement clinic",
    status: "Date to be announced",
    text: "Learn how to present your activities and strengths honestly and clearly.",
  },
] as const;

export const FAQS = [
  {
    q: "Who can join the club?",
    a: "Any student of Govt. Mohammadpur Model School & College who is interested in building soft skills and planning a career can apply.",
  },
  {
    q: "Do I need any experience or special skill?",
    a: "No. The club is for learning. What matters is that you are willing to participate and improve.",
  },
  {
    q: "Is there a membership fee?",
    a: `Please contact the executive committee at ${CLUB.email} to confirm current membership details.`,
  },
  {
    q: "Recruitment is over. Can I still join?",
    a: "Yes. General member recruitment has been completed, but you can still become a member by registering through the online form.",
  },
  {
    q: "How do I apply?",
    a: "Fill in the online membership application form on the Join the Club page. The committee will review it and contact you.",
  },
  {
    q: "How much time will it take?",
    a: "Most activities are workshops and events. You can take part as much as your studies allow, and school work always comes first.",
  },
  {
    q: "Will this help me get into a good university or win a scholarship?",
    a: "The club cannot promise results, but communication, leadership, teamwork and planning are skills that scholarship and university applications look for.",
  },
  {
    q: "Can I become a leader in the club?",
    a: "Yes. Active members who show commitment can be considered for executive roles in future sessions.",
  },
  {
    q: "How can I contact the club?",
    a: `Email us at ${CLUB.email} or message us on Facebook or Instagram.`,
  },
] as const;

export const ADVISER = {
  name: "To be announced",
  title: "Faculty Adviser",
  bio: "The faculty adviser guides the club, supports the committee and links the club with the school administration.",
  img: "",
} as const;

export type PanelMember = {
  name: string;
  role: string;
  group: "lead" | "creative" | "media" | "event";
  img: string;
  bio: string;
};

export const PANEL: PanelMember[] = [
  {
    name: "Mumtahina Tabassum Mohima",
    role: "President",
    group: "lead",
    img: "mohima.jpg",
    bio: "Leads the club, sets its direction and represents it inside and outside the school.",
  },
  {
    name: "Wrick Roy",
    role: "Vice President",
    group: "lead",
    img: "wrick.jpg",
    bio: "Supports the president and oversees the club's programs and departments.",
  },
  {
    name: "Sumaiya Khushi",
    role: "Vice President",
    group: "lead",
    img: "sumaiya.jpg",
    bio: "Supports the president and helps coordinate members and activities.",
  },
  {
    name: "Al Sheam Rahman",
    role: "General Secretary",
    group: "lead",
    img: "sheam.jpg",
    bio: "Manages club records, meetings and day-to-day communication.",
  },
  {
    name: "Fahmida Akter",
    role: "Administrative Coordinator",
    group: "lead",
    img: "fahmida.jpg",
    bio: "Keeps schedules, permissions and club operations organized.",
  },
  {
    name: "Silviya Rahman Samiya",
    role: "Department Head, Creative Ideas",
    group: "creative",
    img: "silviya.jpg",
    bio: "Leads the team that develops new ideas, themes and activities for the club.",
  },
  {
    name: "Nafiz Kabir",
    role: "Executive, Creative Ideas",
    group: "creative",
    img: "nafiz.jpg",
    bio: "Contributes ideas and creative content for club programs.",
  },
  {
    name: "Shafkat Tawhid Siam",
    role: "Executive, Creative Ideas",
    group: "creative",
    img: "shafkat.jpg",
    bio: "Contributes ideas and creative content for club programs.",
  },
  {
    name: "Abdullah Al Muhaimin Turzo",
    role: "Media / Technical Executive",
    group: "media",
    img: "turzo.jpg",
    bio: "Handles photography, design, social media and technical support.",
  },
  {
    name: "Akib Ahnaf",
    role: "Media / Technical Executive",
    group: "media",
    img: "akib.jpg",
    bio: "Handles photography, design, social media and technical support.",
  },
  {
    name: "Jannatul Mottakina",
    role: "Department Head, Event Management",
    group: "event",
    img: "jannatul.jpg",
    bio: "Leads planning and running of workshops and club events.",
  },
  {
    name: "Fahima Akter Moina",
    role: "Executive, Event Management",
    group: "event",
    img: "moina.jpg",
    bio: "Helps plan and run workshops and club events.",
  },
  {
    name: "Md. Minhaz",
    role: "Executive, Event Management",
    group: "event",
    img: "minhaz.jpg",
    bio: "Helps plan and run workshops and club events.",
  },
];

export const GROUPS = [
  { key: "lead" as const, label: "Executive leadership" },
  { key: "creative" as const, label: "Creative Ideas department" },
  { key: "event" as const, label: "Event Management department" },
  { key: "media" as const, label: "Media and Technical team" },
];

export const MISSIONS = [
  {
    n: "01",
    title: "Speak and lead with confidence",
    text: "Give every student a safe place to practice presenting, leading a team and sharing ideas, so stage fright becomes a skill they control.",
  },
  {
    n: "02",
    title: "Open the path to careers and scholarships",
    text: "Help students learn early about career options, study abroad and scholarship preparation, so no one finds out too late.",
  },
  {
    n: "03",
    title: "Learn by doing, together",
    text: "Turn classroom learning into real experience through workshops, mentoring, events and teamwork that students run themselves.",
  },
] as const;

export const WHY_JOIN = [
  {
    title: "Public speaking",
    text: "Practice presenting and speaking in front of a group until it feels natural.",
  },
  {
    title: "Leadership and teamwork",
    text: "Plan events, share responsibility and learn how to lead and be led.",
  },
  {
    title: "Career clarity",
    text: "Explore career paths and understand what different fields really need.",
  },
  {
    title: "Scholarship readiness",
    text: "Learn what international programs look for and start building your profile early.",
  },
  {
    title: "Better applications",
    text: "Real activities and responsibilities give you honest material for your CV and personal statements.",
  },
  {
    title: "Time and stress management",
    text: "Learn to balance studies, activities and goals without burning out.",
  },
  {
    title: "Mentors and network",
    text: "Learn from seniors and guides, and make friends who share your goals.",
  },
  {
    title: "Self-belief",
    text: "Discover strengths you did not know you had by trying new roles.",
  },
] as const;

export const OBJECTIVES = [
  "Build communication, public speaking and presentation skills.",
  "Develop leadership, teamwork and problem-solving abilities.",
  "Guide students on career options and the steps to reach them.",
  "Spread awareness about international scholarships and how to prepare for them.",
  "Organize workshops, mentoring sessions and career-oriented events.",
  "Encourage ethics, professionalism and respect in everything members do.",
  "Give students real responsibility by letting them plan and run club activities.",
] as const;

export const SCHOLARSHIP_STEPS = [
  {
    n: "01",
    title: "Know your goal",
    text: "Decide what you want to study and why. Committees look for a clear purpose, not a long list of interests.",
  },
  {
    n: "02",
    title: "Research programs",
    text: "Look at government, university and organization scholarships. Read each official website for who can apply and what it covers.",
  },
  {
    n: "03",
    title: "Check requirements early",
    text: "Note academic results, English tests, documents and recommendation letters, and make a calendar of deadlines.",
  },
  {
    n: "04",
    title: "Build your profile",
    text: "Take part in activities, volunteering and leadership roles where you can make a real contribution.",
  },
  {
    n: "05",
    title: "Write honestly",
    text: "Your CV and personal statement should tell your true story clearly. Ask a mentor to review every draft.",
  },
  {
    n: "06",
    title: "Verify every detail",
    text: "Only trust official websites. Never pay anyone who promises a guaranteed scholarship.",
  },
] as const;

export const PROGRAMS = [
  {
    title: "Workshops",
    text: "Hands-on sessions on communication, presentation, CV writing, interviews and study planning.",
  },
  {
    title: "Soft skills mentorship",
    text: "Guidance from experienced members and guests on teamwork, leadership and confidence.",
  },
  {
    title: "Mentorship and readiness",
    text: "One-to-one and group advice on choosing subjects, planning higher studies and preparing applications.",
  },
  {
    title: "Career-oriented events",
    text: "Talks, sessions and activities that introduce students to different careers and the people working in them.",
  },
] as const;

export const BENEFITS = [
  {
    title: "Skill-building workshops",
    text: "Take part in sessions on communication, leadership, CV writing and more.",
  },
  {
    title: "Mentorship",
    text: "Get advice on subjects, careers and higher study plans.",
  },
  {
    title: "Scholarship guidance",
    text: "Learn how to prepare for international scholarships from early on.",
  },
  {
    title: "Real responsibility",
    text: "Help plan and run events and build experience you can talk about in applications.",
  },
  {
    title: "A supportive community",
    text: "Meet students who share your goals and push each other forward.",
  },
  {
    title: "Path to leadership",
    text: "Active members can be considered for executive roles in future sessions.",
  },
] as const;

export function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

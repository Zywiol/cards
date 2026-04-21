const titles = [
    "Director of Calendar Tetris",
    "Chief Everything Officer",
    "Chief Meeting Magician",
    "VP of “Let Me Check That for You”",
    "Director of Making It Happen",
    "Guardian of the Inbox",
    "Scheduler-in-Chief",
    "Time Zone Translator",
    "Keeper of the MDP’s Sanity",
    "Last-Minute Miracle Worker",
    "Crisis Anticipation Specialist",
    "Human Buffer Between Chaos & Leadership",
    "Wizard of Getting Things Done",
    "Chief Vibes & Logistics Officer",
    "Calendar Whisperer",
    "The Real MVP",
    "Head of Making It All Look Easy",
    "Patron Saint of Organization",
    "Executive Mind Reader",
    "Zoom Link Archaeologist",
    "Travel Plan Ninja",
    "Supreme Commander of Calendars",
    "Grandmaster of Coordination",
    "Defender of Deadlines",
    "High Priest of Productivity",
    "Meeting Traffic Controller",
    "Calendar Conflict Negotiator",
    "Chief Follow-Up Officer",
    "VP of Flawless Logistics",
    "Master of Operational Flow",
    "Director of Precision Planning",
    "Head of Things Falling Into Place",
    "Director of Back-to-Back Optimization",
    "VP of “Does This Time Work?”",
    "Calendar Conflict Resolution Lead",
    "Director of Strategic Time Blocking",
    "Director of Inbox Zero (Aspirational)",
    "Chief Fire Prevention Officer",
    "VP of Calm Under Pressure",
    "Master of Plan B (and C)",
    "Head of Invisible Problem Solving",
    "Director of Door-to-Door Precision",
    "Chief Boarding Pass Whisperer",
    "VP of Smooth Departures & Arrivals",
    "Chief Chaos Coordinator",
    "The Right Hand (and Occasionally the Brain)",
    "Crisis Whisperer",
    "Last-Minute Magician",
    "Keeper of the Clock",
    "Inbox Tamer",
    "Logistics Commander",
    "Corporate Translator (exec ↔ humans)",
    "Get-It-Done Enforcer",
    "Chief Damage Controller",
    "Inbox Bouncer",
    "Calm in the Middle of “Urgent”"
];

const card = document.getElementById('card');
const trigger = document.getElementById('card-trigger');
const titleDisplay = document.getElementById('random-title');
const resetBtn = document.getElementById('reset-btn');

let isFlipped = false;

function getRandomTitle() {
    return titles[Math.floor(Math.random() * titles.length)];
}

function handleFlip() {
    if (!isFlipped) {
        // Pick title before flipping
        titleDisplay.textContent = getRandomTitle();
        card.classList.add('flipped');
        isFlipped = true;
    }
}

function handleReset(e) {
    e.stopPropagation(); // Prevent trigger from firing
    card.classList.remove('flipped');
    isFlipped = false;
    
    // Clear title after flip animation back (optional)
    setTimeout(() => {
        titleDisplay.textContent = "...";
    }, 800);
}

trigger.addEventListener('click', handleFlip);
resetBtn.addEventListener('click', handleReset);

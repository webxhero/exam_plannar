"use strict";

/* =========================================================
       APP CONFIG
    ========================================================= */

const PLAN_VERSION = 2;

const STORAGE_KEY = "bbs-cg4-balanced-mission-planner-v2";

const OLD_STORAGE_KEY = "bbs-cg4-mission-planner-v1";

const THEME_KEY = "bbs-cg4-theme";

const PLAN_START = "2026-08-20";

const PLAN_END = "2026-10-11";

/* =========================================================
       SUBJECTS
    ========================================================= */

const SUBJECTS = {
  history: {
    label: "স্বাধীন বাংলাদেশের অভ্যুদয়ের ইতিহাস",
    short: "History",
    type: "history",
  },

  acc1: {
    label: "হিসাববিজ্ঞান ১ম পত্র",
    short: "Accounting 1st",
    type: "accounting",
  },

  econ1: {
    label: "অর্থনীতি ১ম পত্র",
    short: "Economics 1st",
    type: "economics",
  },

  mgmt1: {
    label: "ব্যবস্থাপনা ১ম পত্র",
    short: "Management 1st",
    type: "management",
  },

  acc2: {
    label: "হিসাববিজ্ঞান ২য় পত্র",
    short: "Accounting 2nd",
    type: "accounting",
  },

  econ2: {
    label: "অর্থনীতি ২য় পত্র",
    short: "Economics 2nd",
    type: "economics",
  },

  mgmt2: {
    label: "ব্যবস্থাপনা ২য় পত্র",
    short: "Management 2nd",
    type: "management",
  },
};

/* =========================================================
       OFFICIAL EXAMS
    ========================================================= */

const EXAMS = [
  {
    date: "2026-09-20",
    subject: "history",
    paper: "আবশ্যিক",
  },

  {
    date: "2026-09-27",
    subject: "acc1",
    paper: "১ম পত্র",
  },

  {
    date: "2026-09-30",
    subject: "econ1",
    paper: "১ম পত্র",
  },

  {
    date: "2026-10-04",
    subject: "mgmt1",
    paper: "১ম পত্র",
  },

  {
    date: "2026-10-06",
    subject: "acc2",
    paper: "২য় পত্র",
  },

  {
    date: "2026-10-08",
    subject: "econ2",
    paper: "২য় পত্র",
  },

  {
    date: "2026-10-11",
    subject: "mgmt2",
    paper: "২য় পত্র",
  },
];

/* =========================================================
       READINESS TARGET BEFORE FIRST EXAM
    ========================================================= */

const PRE_HISTORY_TARGETS = {
  history: 95,
  acc1: 70,
  econ1: 62,
  mgmt1: 58,
  acc2: 48,
  econ2: 44,
  mgmt2: 42,
};

/* =========================================================
       DEFAULT PRAYER WINDOWS
       Approximate practical defaults.
    ========================================================= */

const DEFAULT_PRAYERS = [
  {
    title: "ফজর নামাজ",
    start: "05:00",
    end: "05:20",
  },

  {
    title: "যোহর নামাজ",
    start: "13:20",
    end: "13:40",
  },

  {
    title: "আসর নামাজ",
    start: "17:20",
    end: "17:40",
  },

  {
    title: "মাগরিব নামাজ",
    start: "18:30",
    end: "18:50",
  },

  {
    title: "ইশা নামাজ",
    start: "20:05",
    end: "20:25",
  },
];

/* =========================================================
       DAILY STUDY SLOTS

       JS weekday:
       Sunday = 0
       Monday = 1
       Tuesday = 2
       Wednesday = 3
       Thursday = 4
       Friday = 5
       Saturday = 6
    ========================================================= */

const STUDY_SLOTS = {
  0: [
    ["06:00", "07:45"],
    ["09:00", "10:45"],
    ["14:30", "16:15"],
    ["20:40", "22:10"],
  ],

  1: [
    ["06:00", "07:45"],
    ["09:00", "10:45"],
    ["20:40", "22:10"],
  ],

  2: [
    ["05:50", "07:00"],
    ["14:30", "16:15"],
    ["20:40", "22:10"],
  ],

  3: [
    ["06:00", "07:45"],
    ["09:00", "10:45"],
    ["20:40", "22:10"],
  ],

  4: [
    ["06:00", "07:45"],
    ["14:30", "16:15"],
    ["20:40", "22:10"],
  ],

  5: [
    ["06:00", "07:45"],
    ["09:00", "10:45"],
    ["14:30", "16:15"],
    ["20:40", "22:10"],
  ],

  6: [
    ["05:50", "07:00"],
    ["18:55", "19:45"],
    ["20:40", "22:10"],
  ],
};

/* =========================================================
       AUTO STUDY PHASES

       Percentages are relative study-block weights.
    ========================================================= */

const STUDY_PHASES = [
  {
    id: "balanced-foundation",
    start: "2026-08-20",
    end: "2026-08-31",

    name: "Balanced Foundation",

    description:
      "History daily/very frequent থাকবে, কিন্তু সব ৭টা paper-এর foundation এখন থেকেই তৈরি হবে। কোনো ২য় পত্র পরে zero থেকে শুরু করতে হবে না।",

    weights: {
      history: 26,
      acc1: 15,
      econ1: 13,
      mgmt1: 12,
      acc2: 12,
      econ2: 11,
      mgmt2: 11,
    },

    primary: ["history"],
  },

  {
    id: "main-build",
    start: "2026-09-01",
    end: "2026-09-12",

    name: "Main Coverage + Question Build",

    description:
      "History strong করার পাশাপাশি ১ম পত্রগুলো exam-ready করার দিকে নেওয়া হবে এবং ২য় পত্রগুলোর core syllabus coverage চালু থাকবে।",

    weights: {
      history: 30,
      acc1: 17,
      econ1: 14,
      mgmt1: 12,
      acc2: 10,
      econ2: 9,
      mgmt2: 8,
    },

    primary: ["history", "acc1"],
  },

  {
    id: "history-final",
    start: "2026-09-13",
    end: "2026-09-19",

    name: "History Final Attack + Maintenance",

    description:
      "History-তে final revision, past question ও written practice হবে। অন্য ৬টা paper সম্পূর্ণ বন্ধ হবে না—maintenance session থাকবে।",

    weights: {
      history: 50,
      acc1: 14,
      econ1: 9,
      mgmt1: 8,
      acc2: 7,
      econ2: 6,
      mgmt2: 6,
    },

    primary: ["history"],
  },

  {
    id: "accounting-1-gap",
    start: "2026-09-21",
    end: "2026-09-26",

    name: "Accounting 1st Attack",

    description:
      "Accounting 1st এখন main target। Economics 1st এবং পরের ২য় পত্রগুলোর memory warm রাখা হবে।",

    weights: {
      acc1: 52,
      econ1: 12,
      mgmt1: 8,
      acc2: 12,
      econ2: 8,
      mgmt2: 8,
    },

    primary: ["acc1"],
  },

  {
    id: "economics-1-gap",
    start: "2026-09-28",
    end: "2026-09-29",

    name: "Economics 1st Final Attack",

    description:
      "মাত্র দুই দিন। Economics 1st-এর revision, graph, definitions এবং written questions main focus হবে।",

    weights: {
      econ1: 62,
      mgmt1: 12,
      acc2: 10,
      econ2: 9,
      mgmt2: 7,
    },

    primary: ["econ1"],
  },

  {
    id: "management-1-gap",
    start: "2026-10-01",
    end: "2026-10-03",

    name: "Management 1st Final Attack",

    description:
      "Management 1st main focus। Accounting 2nd-কে strong maintenance দেওয়া হবে কারণ তার exam খুব কাছেই।",

    weights: {
      mgmt1: 58,
      acc2: 18,
      econ2: 12,
      mgmt2: 12,
    },

    primary: ["mgmt1", "acc2"],
  },

  {
    id: "accounting-2-gap",
    start: "2026-10-05",
    end: "2026-10-05",

    name: "Accounting 2nd Final Revision",

    description:
      "আজ নতুন chapter শেখা নয়। Numerical problem, error-log, past question এবং weak area repair।",

    weights: {
      acc2: 76,
      econ2: 14,
      mgmt2: 10,
    },

    primary: ["acc2"],
  },

  {
    id: "economics-2-gap",
    start: "2026-10-07",
    end: "2026-10-07",

    name: "Economics 2nd Final Revision",

    description:
      "Economics 2nd-এর concept, graph, definitions এবং important written questions final recall করা হবে।",

    weights: {
      econ2: 82,
      mgmt2: 18,
    },

    primary: ["econ2"],
  },

  {
    id: "management-2-gap",
    start: "2026-10-09",
    end: "2026-10-10",

    name: "Management 2nd Final Attack",

    description:
      "শেষ paper। Full syllabus recall, important questions, headings এবং written practice।",

    weights: {
      mgmt2: 100,
    },

    primary: ["mgmt2"],
  },
];

/* =========================================================
       CATEGORY CLASSES
    ========================================================= */

const SUBJECT_COLORS = {
  history: "#24d7ff",
  acc1: "#7068ff",
  econ1: "#32d996",
  mgmt1: "#ffc961",
  acc2: "#ee78ff",
  econ2: "#ff984f",
  mgmt2: "#ff657c",
};
const CATEGORY_CLASS = {
  Study: "cat-study",
  Namaz: "cat-namaz",
  Programming: "cat-programming",
  BNCC: "cat-bncc",
  WebXHero: "cat-webxhero",
  English: "cat-english",
  Personal: "cat-personal",
  Exam: "cat-exam",
};

let tasks = [];

let selectedDate = getInitialDate();

let calendarCursor = parseISO(selectedDate);

let focusSeconds = 50 * 60;

let focusInterval = null;

let focusRunning = false;

/* =========================================================
       DATE HELPERS
    ========================================================= */

function parseISO(value) {
  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function toISO(date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function todayISO() {
  return toISO(new Date());
}

function addDays(isoDate, amount) {
  const date = parseISO(isoDate);

  date.setDate(date.getDate() + amount);

  return toISO(date);
}

function daysBetween(fromISO, toISO) {
  const from = parseISO(fromISO);

  const to = parseISO(toISO);

  from.setHours(12, 0, 0, 0);

  to.setHours(12, 0, 0, 0);

  return Math.round((to - from) / 86400000);
}

function clampPlanDate(date) {
  if (date < PLAN_START) {
    return PLAN_START;
  }

  if (date > PLAN_END) {
    return PLAN_END;
  }

  return date;
}

function getInitialDate() {
  return clampPlanDate(todayISO());
}

function formatDateBn(isoDate, options = {}) {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: options.weekday ?? "long",

    day: options.day ?? "numeric",

    month: options.month ?? "long",

    year: options.year ?? "numeric",
  }).format(parseISO(isoDate));
}

function formatMonthTitle(date) {
  return new Intl.DateTimeFormat("bn-BD", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatMonthShort(isoDate) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(parseISO(isoDate));
}

function formatWeekdayShort(isoDate) {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "short",
  }).format(parseISO(isoDate));
}

/* =========================================================
       GENERAL HELPERS
    ========================================================= */

function uid(prefix = "task") {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function safeIdPart(value) {
  return (
    String(value || "none")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "item"
  );
}

function createSeedId({ date, start, category, subject, title }) {
  return [
    "seed-v2",
    date,
    start || "any",
    safeIdPart(category),
    safeIdPart(subject),
    safeIdPart(title),
  ].join("-");
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function timeToMinutes(time) {
  if (!time) {
    return 0;
  }

  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function taskDurationMinutes(task) {
  if (!task.start || !task.end) {
    return 0;
  }

  return Math.max(0, timeToMinutes(task.end) - timeToMinutes(task.start));
}

function minutesToHuman(minutes) {
  if (!minutes) {
    return "0h";
  }

  const hours = Math.floor(minutes / 60);

  const remainder = minutes % 60;

  if (hours && remainder) {
    return `${hours}h ${remainder}m`;
  }

  if (hours) {
    return `${hours}h`;
  }

  return `${remainder}m`;
}

function percent(done, total) {
  if (!total) {
    return 0;
  }

  return Math.round((done / total) * 100);
}

function taskSort(a, b) {
  return (a.start || "99:99").localeCompare(b.start || "99:99");
}

function getTasksByDate(date) {
  return tasks.filter((task) => task.date === date).sort(taskSort);
}

function getExamOnDate(date) {
  return EXAMS.find((exam) => exam.date === date);
}

function getNextExam(referenceDate = todayISO()) {
  return EXAMS.find((exam) => exam.date >= referenceDate) || null;
}

function getStudyPhase(date) {
  return (
    STUDY_PHASES.find((phase) => date >= phase.start && date <= phase.end) ||
    null
  );
}

function getExecutionReferenceDate() {
  return clampPlanDate(todayISO());
}

/* =========================================================
       WEIGHTED STUDY ALGORITHM

       This is the core of the balanced planner.
    ========================================================= */

function chooseWeightedSubject(weights, assigned, totalAssigned, lastSubject) {
  const entries = Object.entries(weights);

  const totalWeight = entries.reduce((total, [, weight]) => total + weight, 0);

  let winner = entries[0][0];

  let winnerScore = -Infinity;

  entries.forEach(([subject, weight]) => {
    const idealAfterNext = ((totalAssigned + 1) * weight) / totalWeight;

    const alreadyAssigned = assigned[subject] || 0;

    let score = idealAfterNext - alreadyAssigned;

    /*
            Avoid repeating the same subject too often,
            but allow it when the weight is high enough.
          */
    if (subject === lastSubject) {
      score -= 0.34;
    }

    if (score > winnerScore) {
      winnerScore = score;

      winner = subject;
    }
  });

  return winner;
}

function buildBalancedStudyMap() {
  const map = {};

  const globalSessionCounter = {
    history: 0,
    acc1: 0,
    econ1: 0,
    mgmt1: 0,
    acc2: 0,
    econ2: 0,
    mgmt2: 0,
  };

  STUDY_PHASES.forEach((phase) => {
    const assigned = {};

    Object.keys(phase.weights).forEach((subject) => {
      assigned[subject] = 0;
    });

    let totalAssigned = 0;
    let lastSubject = "";

    let date = phase.start;

    while (date <= phase.end) {
      const weekday = parseISO(date).getDay();

      const slots = STUDY_SLOTS[weekday] || [];

      map[date] = [];

      slots.forEach((slot) => {
        const subject = chooseWeightedSubject(
          phase.weights,
          assigned,
          totalAssigned,
          lastSubject,
        );

        assigned[subject] += 1;

        totalAssigned += 1;

        globalSessionCounter[subject] += 1;

        map[date].push({
          start: slot[0],

          end: slot[1],

          subject,

          phaseId: phase.id,

          sessionIndex: globalSessionCounter[subject],
        });

        lastSubject = subject;
      });

      date = addDays(date, 1);
    }
  });

  return map;
}

const BALANCED_STUDY_MAP = buildBalancedStudyMap();

/* =========================================================
       STUDY METHODS
    ========================================================= */

function getBaseMethodList(subject) {
  const type = SUBJECTS[subject].type;

  if (type === "history") {
    return [
      "Core Topic + Timeline",
      "Important Questions",
      "Written Answer Practice",
      "Active Recall + Short Notes",
    ];
  }

  if (type === "accounting") {
    return [
      "Concept + Worked Examples",
      "Numerical Problem Set",
      "Past Question Problems",
      "Error Log + Re-solve",
    ];
  }

  if (type === "economics") {
    return [
      "Concept + Definitions",
      "Graph + Explanation",
      "Important Written Questions",
      "Past Question + Recall",
    ];
  }

  return [
    "Theory + Key Headings",
    "Definitions + Keywords",
    "Written Answer Practice",
    "Past Question + Recall",
  ];
}

function getStudyMethod(studyInfo) {
  const { subject, phaseId, sessionIndex } = studyInfo;

  const phase = STUDY_PHASES.find((item) => item.id === phaseId);

  const isPrimary = phase && phase.primary.includes(subject);

  if (phaseId === "history-final" && subject === "history") {
    const finalMethods = [
      "Full Revision",
      "Past Question Attack",
      "Timed Written Practice",
      "Weak Area Final Repair",
    ];

    return finalMethods[(sessionIndex - 1) % finalMethods.length];
  }

  if (phaseId.includes("-gap") && isPrimary) {
    const gapMethods = [
      "Full Syllabus Revision",
      "Past Question Attack",
      "Timed Practice",
      "Weak Area Final Repair",
    ];

    return gapMethods[(sessionIndex - 1) % gapMethods.length];
  }

  if (phaseId === "history-final" && subject !== "history") {
    return "Maintenance + Active Recall";
  }

  if (phaseId.includes("-gap") && !isPrimary) {
    return "Maintenance + Next Exam Support";
  }

  const list = getBaseMethodList(subject);

  return list[(sessionIndex - 1) % list.length];
}

function getStudyInstructions(subject, method) {
  const type = SUBJECTS[subject].type;

  if (method === "Maintenance + Active Recall") {
    return "আগে পড়া topic বই বন্ধ রেখে recall করো → ভুল/ভুলে যাওয়া অংশ check করো → next pending topic-এর ছোট coverage করো।";
  }

  if (method === "Maintenance + Next Exam Support") {
    return "এই subject বন্ধ রাখবে না। Previous notes recall → ১টা important question/problem → next pending weak area touch করো।";
  }

  if (method.includes("Full Syllabus")) {
    return "নতুন topic নয়। Already covered syllabus দ্রুত revise → important questions/problems → weak areas mark ও repair।";
  }

  if (method.includes("Past Question")) {
    if (type === "accounting") {
      return "Past question থেকে problem হাতে solve করো। Answer দেখে নয়। শেষে wrong problems error-log-এ রাখো।";
    }

    return "Previous questions দেখে বই বন্ধ রেখে answer structure তৈরি করো, তারপর full/short written answer practice করো।";
  }

  if (method.includes("Timed")) {
    return "Timer চালু করো। Exam-এর মতো লিখে/solve করে finish করো। শেষে 10–15 মিনিট self-check করো।";
  }

  if (type === "history") {
    return "Next pending chapter/topic → event/date/cause/result note → 2 important answers → শেষ 10 মিনিট active recall।";
  }

  if (type === "accounting") {
    return "Next pending concept → worked example → 6–10 numerical problems → wrong problem আবার solve → short error-log।";
  }

  if (type === "economics") {
    return "Next pending topic → definitions/concept → প্রয়োজনীয় graph → 2 written questions → শেষ 10 মিনিট recall।";
  }

  return "Next pending topic → key headings/keywords → definitions → 2 descriptive questions → বই বন্ধ রেখে recall।";
}

/* =========================================================
       TASK BUILDERS
    ========================================================= */

function createSeedTask(data) {
  return {
    id: createSeedId(data),

    date: data.date,

    start: data.start || "",

    end: data.end || "",

    title: data.title,

    category: data.category,

    subject: data.subject || "",

    priority: data.priority || "medium",

    notes: data.notes || "",

    done: false,

    seed: true,
  };
}

function addPrayerTasks(dayTasks, date) {
  const weekday = parseISO(date).getDay();

  DEFAULT_PRAYERS.forEach((prayer) => {
    if (weekday === 5 && prayer.title === "যোহর নামাজ") {
      return;
    }

    dayTasks.push(
      createSeedTask({
        date,

        start: prayer.start,

        end: prayer.end,

        title: prayer.title,

        category: "Namaz",

        priority: "critical",

        notes:
          "নামাজ non-negotiable। সময়টি practical default; আজান/জামাত অনুযায়ী কয়েক মিনিট adjust হতে পারে।",
      }),
    );
  });

  if (weekday === 5) {
    dayTasks.push(
      createSeedTask({
        date,

        start: "12:30",

        end: "14:00",

        title: "জুম্মার নামাজ + মসজিদ",

        category: "Namaz",

        priority: "critical",

        notes: "Friday fixed mosque block.",
      }),
    );
  }
}

function addWeeklyCommitments(dayTasks, date) {
  const weekday = parseISO(date).getDay();

  /* Saturday */

  if (weekday === 6) {
    dayTasks.push(
      createSeedTask({
        date,
        start: "07:30",
        end: "08:30",
        title: "College যাওয়ার Travel",
        category: "Personal",
        priority: "medium",
      }),

      createSeedTask({
        date,
        start: "08:30",
        end: "12:30",
        title: "College BNCC",
        category: "BNCC",
        priority: "high",
      }),

      createSeedTask({
        date,
        start: "12:30",
        end: "14:30",
        title: "Travel + Lunch + Recovery",
        category: "Personal",
        priority: "medium",
      }),

      createSeedTask({
        date,
        start: "15:00",
        end: "16:00",
        title: "Programming Learning Class",
        category: "Programming",
        priority: "high",
      }),

      createSeedTask({
        date,
        start: "16:00",
        end: "17:00",
        title: "Return Travel",
        category: "Personal",
        priority: "medium",
      }),
    );
  }

  /* Monday / Wednesday */

  if (weekday === 1 || weekday === 3) {
    dayTasks.push(
      createSeedTask({
        date,
        start: "13:40",
        end: "14:40",
        title: "Programming Class Travel",
        category: "Personal",
        priority: "medium",
      }),

      createSeedTask({
        date,
        start: "14:40",
        end: "16:30",
        title: "Programming Learning Class",
        category: "Programming",
        priority: "high",
      }),

      createSeedTask({
        date,
        start: "16:30",
        end: "17:30",
        title: "Return Travel",
        category: "Personal",
        priority: "medium",
      }),
    );
  }

  /* Tuesday */

  if (weekday === 2) {
    dayTasks.push(
      createSeedTask({
        date,
        start: "07:30",
        end: "08:30",
        title: "College যাওয়ার Travel",
        category: "Personal",
        priority: "medium",
      }),

      createSeedTask({
        date,
        start: "08:30",
        end: "12:30",
        title: "College BNCC",
        category: "BNCC",
        priority: "high",
      }),

      createSeedTask({
        date,
        start: "12:30",
        end: "13:30",
        title: "Return Travel",
        category: "Personal",
        priority: "medium",
      }),
    );
  }

  /* Thursday */

  if (weekday === 4) {
    dayTasks.push(
      createSeedTask({
        date,
        start: "08:30",
        end: "13:30",
        title: "Private Time",
        category: "Personal",
        priority: "high",
      }),
    );
  }
}

function addIndoorRegularTasks(dayTasks, date) {
  const weekday = parseISO(date).getDay();

  const phase = getStudyPhase(date);

  const intensive =
    phase && (phase.id === "history-final" || phase.id.includes("-gap"));

  let homeworkStart = "17:45";

  let homeworkEnd = intensive ? "18:10" : "18:20";

  if (weekday === 1 || weekday === 3) {
    homeworkStart = "17:45";

    homeworkEnd = "18:15";
  }

  if (weekday === 6) {
    homeworkStart = "17:45";

    homeworkEnd = "18:15";
  }

  dayTasks.push(
    createSeedTask({
      date,

      start: homeworkStart,

      end: homeworkEnd,

      title: "Programming HW / Coding Practice",

      category: "Programming",

      priority: intensive ? "medium" : "high",

      notes:
        "Pending class homework finish করো। Timebox শেষ হলে BBS study priority-তে ফিরে যাও।",
    }),
  );

  dayTasks.push(
    createSeedTask({
      date,

      start: weekday === 6 ? "22:15" : "19:05",

      end: weekday === 6 ? "22:35" : "19:30",

      title: "WebXHero Client Hunting",

      category: "WebXHero",

      priority: intensive ? "low" : "medium",

      notes:
        "Short focused lead research/outreach। Timebox শেষ হলে stop—study time eat করতে দেবে না।",
    }),
  );

  dayTasks.push(
    createSeedTask({
      date,

      start: weekday === 6 ? "22:40" : "22:15",

      end: weekday === 6 ? "23:00" : "22:35",

      title: "English Speaking Practice",

      category: "English",

      priority: "medium",

      notes: "20 মিনিট loud speaking → একটি topic → record → ভুলগুলো identify।",
    }),
  );
}

function addBalancedStudyTasks(dayTasks, date) {
  const studyItems = BALANCED_STUDY_MAP[date] || [];

  studyItems.forEach((studyInfo) => {
    const subject = studyInfo.subject;

    const subjectMeta = SUBJECTS[subject];

    const method = getStudyMethod(studyInfo);

    const phase = STUDY_PHASES.find((item) => item.id === studyInfo.phaseId);

    const isPrimary = phase && phase.primary.includes(subject);

    dayTasks.push(
      createSeedTask({
        date,

        start: studyInfo.start,

        end: studyInfo.end,

        title: `${subjectMeta.short} — ${method}`,

        category: "Study",

        subject,

        priority: isPrimary ? "critical" : "high",

        notes: `Session ${studyInfo.sessionIndex}. ${getStudyInstructions(
          subject,
          method,
        )}`,
      }),
    );
  });
}

function addExamDayTasks(dayTasks, date, exam) {
  const subject = SUBJECTS[exam.subject];

  dayTasks.push(
    createSeedTask({
      date,

      start: "06:00",

      end: "07:30",

      title: `${subject.short} — Final Morning Revision`,

      category: "Study",

      subject: exam.subject,

      priority: "critical",

      notes:
        "নতুন topic পড়বে না। Final notes, formulas/dates/headings এবং already-marked weak areas revise করো।",
    }),

    createSeedTask({
      date,

      start: "09:15",

      end: "10:15",

      title: `${subject.short} — Closed Book Recall`,

      category: "Study",

      subject: exam.subject,

      priority: "critical",

      notes: "বই বন্ধ রেখে recall। ভুলে যাওয়া অংশগুলো শুধু শেষে check করো।",
    }),

    createSeedTask({
      date,

      start: "13:00",

      title: `FINAL EXAM — ${subject.label}`,

      category: "Exam",

      subject: exam.subject,

      priority: "critical",

      notes:
        "Exam starts at 1:00 PM. প্রয়োজনীয় documents/materials আগে ready রাখো।",
    }),
  );

  const examIndex = EXAMS.findIndex((item) => item.date === date);

  const nextExam = EXAMS[examIndex + 1];

  if (nextExam) {
    dayTasks.push(
      createSeedTask({
        date,

        start: "20:45",

        end: "21:30",

        title: `Next Mission Setup — ${SUBJECTS[nextExam.subject].short}`,

        category: "Study",

        subject: nextExam.subject,

        priority: "high",

        notes:
          "Heavy study নয়। Notes, syllabus, past questions এবং weak-topic list ready করে কাল থেকে direct attack শুরু করো।",
      }),
    );
  }
}

/* =========================================================
       GENERATE COMPLETE ROUTINE
    ========================================================= */

function generateInitialSchedule() {
  const generated = [];

  let date = PLAN_START;

  while (date <= PLAN_END) {
    const dayTasks = [];

    addPrayerTasks(dayTasks, date);

    const exam = getExamOnDate(date);

    if (exam) {
      addExamDayTasks(dayTasks, date, exam);

      dayTasks.push(
        createSeedTask({
          date,

          start: "22:00",

          end: "22:15",

          title: "Light English Speaking",

          category: "English",

          priority: "low",

          notes: "Exam day হওয়ায় শুধু light maintenance।",
        }),
      );
    } else {
      addWeeklyCommitments(dayTasks, date);

      addBalancedStudyTasks(dayTasks, date);

      addIndoorRegularTasks(dayTasks, date);
    }

    generated.push(...dayTasks);

    date = addDays(date, 1);
  }

  return generated;
}

/* =========================================================
       STORAGE + OLD VERSION MIGRATION
    ========================================================= */

function saveTasks() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      version: PLAN_VERSION,

      savedAt: new Date().toISOString(),

      tasks,
    }),
  );
}

function migrateOldProgress(newTasks) {
  const oldRaw = localStorage.getItem(OLD_STORAGE_KEY);

  if (!oldRaw) {
    return newTasks;
  }

  try {
    const oldData = JSON.parse(oldRaw);

    if (!oldData || !Array.isArray(oldData.tasks)) {
      return newTasks;
    }

    /*
          Carry completion where date/start/category/subject match.
        */
    newTasks.forEach((newTask) => {
      const match = oldData.tasks.find(
        (oldTask) =>
          oldTask.date === newTask.date &&
          oldTask.start === newTask.start &&
          oldTask.category === newTask.category &&
          (oldTask.subject || "") === (newTask.subject || ""),
      );

      if (match && match.done) {
        newTask.done = true;
      }
    });

    /*
          Keep old custom tasks.
        */
    oldData.tasks
      .filter((task) => task.seed === false)
      .forEach((customTask) => {
        newTasks.push({
          ...customTask,
          id: uid("migrated"),
          seed: false,
        });
      });

    return newTasks;
  } catch (error) {
    console.error("Old data migration failed:", error);

    return newTasks;
  }
}

function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (raw) {
    try {
      const parsed = JSON.parse(raw);

      if (
        parsed &&
        parsed.version === PLAN_VERSION &&
        Array.isArray(parsed.tasks)
      ) {
        tasks = parsed.tasks;

        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  tasks = migrateOldProgress(generateInitialSchedule());

  saveTasks();
}

/* =========================================================
       STATS
    ========================================================= */

function getDayStats(date) {
  const dayTasks = getTasksByDate(date);

  const done = dayTasks.filter((task) => task.done).length;

  const studyTasks = dayTasks.filter((task) => task.category === "Study");

  const plannedStudyMinutes = studyTasks.reduce(
    (total, task) => total + taskDurationMinutes(task),
    0,
  );

  const completedStudyMinutes = studyTasks
    .filter((task) => task.done)
    .reduce((total, task) => total + taskDurationMinutes(task), 0);

  return {
    total: dayTasks.length,

    done,

    progress: percent(done, dayTasks.length),

    plannedStudyMinutes,

    completedStudyMinutes,
  };
}

function getMissionExecution() {
  const reference = getExecutionReferenceDate();

  const applicable = tasks.filter((task) => task.date <= reference);

  const done = applicable.filter((task) => task.done).length;

  return {
    total: applicable.length,

    done,

    progress: percent(done, applicable.length),
  };
}

/* =========================================================
       TASK HTML
    ========================================================= */

function createTaskHtml(task) {
  const categoryClass = CATEGORY_CLASS[task.category] || "cat-personal";

  const subjectLabel =
    task.subject && SUBJECTS[task.subject] ? SUBJECTS[task.subject].short : "";

  return `
        <div
          class="task-item ${task.done ? "completed" : ""}"
        >

          <div class="task-time">

            <strong>
              ${escapeHtml(task.start || "Anytime")}
            </strong>

            ${task.end ? `<span>${escapeHtml(task.end)}</span>` : ""}

          </div>

          <button
            class="task-check ${task.done ? "done" : ""}"
            data-task-action="toggle"
            data-task-id="${escapeHtml(task.id)}"
          >
            ✓
          </button>

          <div class="task-main">

            <div class="task-title">
              ${escapeHtml(task.title)}
            </div>

            ${
              task.notes
                ? `
                  <div class="task-notes">
                    ${escapeHtml(task.notes)}
                  </div>
                `
                : ""
            }

            <div class="task-meta">

              <span
                class="badge ${categoryClass}"
              >
                ${escapeHtml(task.category)}
              </span>

              ${
                subjectLabel
                  ? `
                    <span class="badge cat-study">
                      ${escapeHtml(subjectLabel)}
                    </span>
                  `
                  : ""
              }

              <span
                class="badge priority-${escapeHtml(task.priority)}"
              >
                ${escapeHtml(task.priority)}
              </span>

            </div>

          </div>

          <div class="task-actions">

            <button
              class="mini-action"
              data-task-action="edit"
              data-task-id="${escapeHtml(task.id)}"
              title="Edit"
            >
              ✎
            </button>

            <button
              class="mini-action delete"
              data-task-action="delete"
              data-task-id="${escapeHtml(task.id)}"
              title="Delete"
            >
              ×
            </button>

          </div>

        </div>
      `;
}

function renderTaskList(container, dayTasks) {
  if (!dayTasks.length) {
    container.innerHTML = `
          <div class="empty-state">
            এই দিনের কোনো task নেই।
          </div>
        `;

    return;
  }

  container.innerHTML = dayTasks.map(createTaskHtml).join("");
}

/* =========================================================
       PHASE RENDER
    ========================================================= */

function getDisplayPhase(referenceDate) {
  const phase = getStudyPhase(referenceDate);

  if (phase) {
    return phase;
  }

  const exam = getExamOnDate(referenceDate);

  if (exam) {
    return {
      name: "Exam Day",

      description: `${
        SUBJECTS[exam.subject].short
      } exam। আজ new learning নয়—morning final recall + exam + রাতে next subject setup।`,

      weights: {
        [exam.subject]: 100,
      },
    };
  }

  return {
    name: "Mission Complete",

    description: "Exam mission finished.",

    weights: {},
  };
}

/* =========================================================
   DYNAMIC PHASE COMPLETION
========================================================= */

function getPhaseBounds(phase, referenceDate) {
  /*
    Normal study phases have start/end.

    Exam Day is generated dynamically,
    so in that case we use only the current date.
  */
  if (phase.start && phase.end) {
    return {
      start: phase.start,
      end: phase.end,
    };
  }

  return {
    start: referenceDate,
    end: referenceDate,
  };
}

/* ---------------------------------------------------------
   SUBJECT PROGRESS INSIDE CURRENT PHASE
--------------------------------------------------------- */

function getPhaseSubjectProgress(phase, subjectId, referenceDate) {
  const bounds = getPhaseBounds(phase, referenceDate);

  const subjectStudyTasks = tasks.filter(
    (task) =>
      task.category === "Study" &&
      task.subject === subjectId &&
      task.date >= bounds.start &&
      task.date <= bounds.end,
  );

  const completedTasks = subjectStudyTasks.filter((task) => task.done);

  const total = subjectStudyTasks.length;

  const completed = completedTasks.length;

  const completion = percent(completed, total);

  const totalMinutes = subjectStudyTasks.reduce(
    (totalMinutes, task) => totalMinutes + taskDurationMinutes(task),
    0,
  );

  const completedMinutes = completedTasks.reduce(
    (totalMinutes, task) => totalMinutes + taskDurationMinutes(task),
    0,
  );

  return {
    total,
    completed,
    completion,
    totalMinutes,
    completedMinutes,
  };
}

/* ---------------------------------------------------------
   WHOLE PHASE COMPLETION
--------------------------------------------------------- */

function getPhaseOverallProgress(phase, referenceDate) {
  const bounds = getPhaseBounds(phase, referenceDate);

  const phaseSubjects = Object.keys(phase.weights || {});

  const phaseStudyTasks = tasks.filter(
    (task) =>
      task.category === "Study" &&
      task.date >= bounds.start &&
      task.date <= bounds.end &&
      phaseSubjects.includes(task.subject),
  );

  const completed = phaseStudyTasks.filter((task) => task.done).length;

  const total = phaseStudyTasks.length;

  return {
    completed,
    total,

    completion: percent(completed, total),
  };
}

/* ---------------------------------------------------------
   CURRENT PHASE UI
--------------------------------------------------------- */

function renderPhaseInfo() {
  const reference = clampPlanDate(todayISO());

  const phase = getDisplayPhase(reference);

  /* BASIC INFO */

  document.getElementById("phaseName").textContent = phase.name;

  document.getElementById("phaseDescription").textContent = phase.description;

  document.getElementById("sidebarPhaseName").textContent = phase.name;

  document.getElementById("sidebarPhaseMeta").textContent =
    reference <= "2026-09-19"
      ? "All 7 papers stay active"
      : "Gap = revision + exam attack";

  /* OVERALL PHASE PROGRESS */

  const overall = getPhaseOverallProgress(phase, reference);

  document.getElementById("phaseOverallPercent").textContent =
    `${overall.completion}%`;

  document.getElementById("phaseOverallCount").textContent =
    `${overall.completed} / ${overall.total} study sessions`;

  document.getElementById("phaseOverallFill").style.width =
    `${overall.completion}%`;

  /* SUBJECT CARDS */

  const allocationContainer = document.getElementById("phaseAllocation");

  const phaseWeights = phase.weights || {};

  allocationContainer.innerHTML = Object.entries(phaseWeights)
    .map(([subjectId, allocationWeight]) => {
      const subject = SUBJECTS[subjectId];

      if (!subject) {
        return "";
      }

      const progress = getPhaseSubjectProgress(phase, subjectId, reference);

      const color = SUBJECT_COLORS[subjectId] || "#24d7ff";

      const completedTime = minutesToHuman(progress.completedMinutes);

      const plannedTime = minutesToHuman(progress.totalMinutes);

      return `
            <div
              class="phase-subject-card"
              style="--subject-color:${color}"
            >

              <div class="phase-subject-name">
                ${escapeHtml(subject.short)}
              </div>

              <div class="phase-subject-percent-row">

                <div
                  class="phase-subject-percent"
                >
                  ${progress.completion}%
                </div>

                <div
                  class="phase-subject-share"
                  title="Study allocation in this phase"
                >
                  Plan ${allocationWeight}%
                </div>

              </div>

              <div class="phase-subject-progress">

                <div
                  class="phase-subject-progress-fill"
                  style="width:${progress.completion}%"
                ></div>

              </div>

              <div class="phase-subject-footer">

                <span>
                  <span class="phase-subject-done">
                    ${progress.completed}
                  </span>
                  /
                  ${progress.total}
                  sessions
                </span>

                <span>
                  ${completedTime}
                  /
                  ${plannedTime}
                </span>

              </div>

            </div>
          `;
    })
    .join("");
}
/* =========================================================
       DASHBOARD
    ========================================================= */

function renderDashboard() {
  const reference = clampPlanDate(todayISO());

  const stats = getDayStats(reference);

  const mission = getMissionExecution();

  document.getElementById("topDate").textContent = formatDateBn(todayISO());

  document.getElementById("todayProgressStat").textContent =
    `${stats.progress}%`;

  document.getElementById("todayProgressMeta").textContent =
    `${stats.done} of ${stats.total} tasks`;

  document.getElementById("studyHoursStat").textContent = minutesToHuman(
    stats.completedStudyMinutes,
  );

  document.getElementById("studyHoursMeta").textContent =
    `${minutesToHuman(stats.plannedStudyMinutes)} study planned`;

  document.getElementById("missionProgressStat").textContent =
    `${mission.progress}%`;

  document.getElementById("heroProgressValue").textContent =
    `${mission.progress}%`;

  document
    .getElementById("heroProgressRing")
    .style.setProperty("--progress", mission.progress);

  document.getElementById("todayTaskSubtitle").textContent =
    formatDateBn(reference);

  renderTaskList(
    document.getElementById("todayTaskList"),
    getTasksByDate(reference),
  );

  renderNextExamStats();
  renderUpcomingExams();
  renderPhaseInfo();
}

function renderNextExamStats() {
  const reference = todayISO();

  const nextExam = getNextExam(reference);

  const nameEl = document.getElementById("sidebarExamName");

  const daysEl = document.getElementById("sidebarExamDays");

  const statDays = document.getElementById("daysLeftStat");

  const statName = document.getElementById("nextExamStat");

  if (!nextExam) {
    nameEl.textContent = "Mission Complete";

    daysEl.textContent = "All exams finished";

    statDays.textContent = "✓";

    statName.textContent = "Completed";

    return;
  }

  const subject = SUBJECTS[nextExam.subject];

  const days = daysBetween(reference, nextExam.date);

  nameEl.textContent = subject.short;

  daysEl.textContent = days === 0 ? "আজ পরীক্ষা" : `${days} দিন বাকি`;

  statDays.textContent = days === 0 ? "Today" : `${days}d`;

  statName.textContent = subject.short;
}

function renderUpcomingExams() {
  const container = document.getElementById("dashboardUpcomingExams");

  const reference = todayISO();

  const upcoming = EXAMS.filter((exam) => exam.date >= reference).slice(0, 4);

  if (!upcoming.length) {
    container.innerHTML = `
          <div class="empty-state">
            সব পরীক্ষা শেষ ✔️
          </div>
        `;

    return;
  }

  container.innerHTML = upcoming
    .map((exam) => {
      const date = parseISO(exam.date);

      const days = daysBetween(reference, exam.date);

      return `
                <div class="upcoming-exam">

                  <div class="exam-date-box">
                    <strong>
                      ${date.getDate()}
                    </strong>

                    <span>
                      ${formatMonthShort(exam.date)}
                    </span>
                  </div>

                  <div>

                    <div class="exam-small-name">
                      ${escapeHtml(SUBJECTS[exam.subject].short)}
                    </div>

                    <div class="exam-small-paper">
                      ${escapeHtml(exam.paper)}
                    </div>

                  </div>

                  <div class="exam-days-left">
                    ${days === 0 ? "Today" : `${days}d`}
                  </div>

                </div>
              `;
    })
    .join("");
}

/* =========================================================
       CALENDAR
    ========================================================= */

function renderCalendar() {
  document.getElementById("calendarMonthTitle").textContent =
    formatMonthTitle(calendarCursor);

  const grid = document.getElementById("calendarGrid");

  grid.innerHTML = "";

  const year = calendarCursor.getFullYear();

  const month = calendarCursor.getMonth();

  const firstDay = new Date(year, month, 1);

  const start = new Date(year, month, 1 - firstDay.getDay());

  const actualToday = todayISO();

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(start);

    date.setDate(start.getDate() + index);

    const iso = toISO(date);

    const outside = date.getMonth() !== month;

    const isToday = iso === actualToday;

    const isSelected = iso === selectedDate;

    const exam = getExamOnDate(iso);

    const stats = getDayStats(iso);

    const cell = document.createElement("button");

    cell.type = "button";

    cell.dataset.date = iso;

    cell.className = `calendar-day${outside ? " outside" : ""}${
      isToday ? " today" : ""
    }${isSelected ? " selected" : ""}${exam ? " exam-day" : ""}`;

    let indicators = "";

    if (exam) {
      indicators += `
            <span class="exam-label">
              ${escapeHtml(SUBJECTS[exam.subject].short)}
            </span>
          `;
    }

    if (stats.total) {
      indicators += `
            <div class="day-progress">

              <div class="day-progress-track">
                <div
                  class="day-progress-fill"
                  style="width:${stats.progress}%"
                ></div>
              </div>

              <div class="day-progress-text">
                ${stats.done}/${stats.total}
              </div>

            </div>
          `;
    }

    cell.innerHTML = `
          <div class="day-number">
            ${date.getDate()}
          </div>

          <div class="day-indicators">
            ${indicators}
          </div>
        `;

    grid.appendChild(cell);
  }

  renderSelectedDay();
}

function renderSelectedDay() {
  const dayTasks = getTasksByDate(selectedDate);

  const stats = getDayStats(selectedDate);

  const exam = getExamOnDate(selectedDate);

  document.getElementById("selectedDateTitle").textContent =
    formatDateBn(selectedDate);

  let meta = `${stats.total} scheduled tasks`;

  if (exam) {
    meta += ` • EXAM: ${SUBJECTS[exam.subject].short}`;
  }

  document.getElementById("selectedDateMeta").textContent = meta;

  document.getElementById("selectedDayProgress").textContent =
    `${stats.progress}%`;

  document.getElementById("selectedDayStudy").textContent = minutesToHuman(
    stats.completedStudyMinutes,
  );

  document.getElementById("selectedDayTasks").textContent = String(stats.total);

  renderTaskList(document.getElementById("selectedDayTaskList"), dayTasks);
}

/* =========================================================
       REPORTS
    ========================================================= */

function renderReports() {
  renderSubjectProgress();
  renderWeekChart();
  renderReadinessTargets();
  renderReportSummary();
}

function renderSubjectProgress() {
  const container = document.getElementById("subjectProgressList");

  container.innerHTML = Object.entries(SUBJECTS)
    .map(([subjectId, subject]) => {
      const studyTasks = tasks.filter(
        (task) => task.category === "Study" && task.subject === subjectId,
      );

      const completed = studyTasks.filter((task) => task.done).length;

      const progress = percent(completed, studyTasks.length);

      return `
                <div class="subject-progress-item">

                  <div class="subject-progress-row">

                    <div class="subject-progress-name">
                      ${escapeHtml(subject.label)}
                    </div>

                    <div class="subject-progress-value">
                      ${completed}/${studyTasks.length}
                      • ${progress}%
                    </div>

                  </div>

                  <div class="progress-track">
                    <div
                      class="progress-fill"
                      style="width:${progress}%"
                    ></div>
                  </div>

                </div>
              `;
    })
    .join("");
}

function renderWeekChart() {
  const anchor = getExecutionReferenceDate();

  const container = document.getElementById("weekChart");

  const days = [];

  for (let offset = 6; offset >= 0; offset -= 1) {
    let date = addDays(anchor, -offset);

    if (date < PLAN_START) {
      date = PLAN_START;
    }

    days.push(date);
  }

  container.innerHTML = days
    .map((date) => {
      const stats = getDayStats(date);

      return `
                <div class="week-col">

                  <div class="week-value">
                    ${stats.progress}%
                  </div>

                  <div class="week-bar-track">
                    <div
                      class="week-bar"
                      style="height:${stats.progress}%"
                    ></div>
                  </div>

                  <div class="week-label">
                    ${formatWeekdayShort(date)}
                  </div>

                </div>
              `;
    })
    .join("");
}

function renderReadinessTargets() {
  const container = document.getElementById("readinessTargetGrid");

  container.innerHTML = Object.entries(PRE_HISTORY_TARGETS)
    .map(
      ([subject, target]) => `
              <div class="target-card">

                <div class="target-subject">
                  ${escapeHtml(SUBJECTS[subject].short)}
                </div>

                <div class="target-percent">
                  ${target}%
                </div>

                <div class="target-label">
                  readiness target by 19 Sep
                </div>

              </div>
            `,
    )
    .join("");
}

function renderReportSummary() {
  const completedTasks = tasks.filter((task) => task.done);

  const completedStudyMinutes = completedTasks
    .filter((task) => task.category === "Study")
    .reduce((total, task) => total + taskDurationMinutes(task), 0);

  document.getElementById("reportTotalTasks").textContent = tasks.length;

  document.getElementById("reportCompletedTasks").textContent =
    completedTasks.length;

  document.getElementById("reportStudyHours").textContent = minutesToHuman(
    completedStudyMinutes,
  );
}

/* =========================================================
       EXAM TIMELINE
    ========================================================= */

function renderExamTimeline() {
  const container = document.getElementById("examTimeline");

  const reference = todayISO();

  const nextExam = getNextExam(reference);

  container.innerHTML = EXAMS.map((exam) => {
    const subject = SUBJECTS[exam.subject];

    const completed = exam.date < reference;

    const isNext = nextExam && nextExam.date === exam.date;

    const days = daysBetween(reference, exam.date);

    const status = completed
      ? "Completed"
      : days === 0
        ? "Today"
        : `${days} days`;

    return `
                <div
                  class="exam-timeline-item ${
                    completed ? "completed-exam" : ""
                  } ${isNext ? "next-exam" : ""}"
                >

                  <div class="exam-timeline-top">

                    <div>

                      <div class="exam-full-date">
                        ${escapeHtml(formatDateBn(exam.date))}
                        • 1:00 PM
                      </div>

                      <div class="exam-full-name">
                        ${escapeHtml(subject.label)}
                      </div>

                      <div class="exam-full-paper">
                        ${escapeHtml(exam.paper)}
                      </div>

                    </div>

                    <span class="exam-count-badge">
                      ${escapeHtml(status)}
                    </span>

                  </div>

                </div>
              `;
  }).join("");
}

/* =========================================================
       RENDER EVERYTHING
    ========================================================= */

function renderAll() {
  renderDashboard();
  renderCalendar();
  renderReports();
  renderExamTimeline();
}

/* =========================================================
       VIEW NAVIGATION
    ========================================================= */

function switchView(viewName) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.remove("active");
  });

  document.getElementById(`${viewName}View`)?.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });

  closeMobileMenu();

  if (viewName === "calendar") {
    renderCalendar();
  }

  if (viewName === "reports") {
    renderReports();
  }
}

/* =========================================================
       MOBILE MENU
    ========================================================= */

function openMobileMenu() {
  if (window.innerWidth > 900) {
    return;
  }

  document.getElementById("sidebar").classList.add("mobile-open");

  document.getElementById("sidebarOverlay").classList.add("open");

  document.body.classList.add("menu-open");
}

function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("mobile-open");

  document.getElementById("sidebarOverlay").classList.remove("open");

  document.body.classList.remove("menu-open");
}

/* =========================================================
       TASK MODAL
    ========================================================= */

const taskModalBackdrop = document.getElementById("taskModalBackdrop");

function openTaskModal(task = null, preferredDate = selectedDate) {
  document.getElementById("taskModalTitle").textContent = task
    ? "Edit Task"
    : "Add Task";

  document.getElementById("taskId").value = task?.id || "";

  document.getElementById("taskTitle").value = task?.title || "";

  document.getElementById("taskDate").value = task?.date || preferredDate;

  document.getElementById("taskStart").value = task?.start || "08:00";

  document.getElementById("taskEnd").value = task?.end || "";

  document.getElementById("taskCategory").value = task?.category || "Study";

  document.getElementById("taskSubject").value = task?.subject || "";

  document.getElementById("taskPriority").value = task?.priority || "high";

  document.getElementById("taskNotes").value = task?.notes || "";

  taskModalBackdrop.classList.add("open");

  taskModalBackdrop.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    document.getElementById("taskTitle").focus();
  }, 70);
}

function closeTaskModal() {
  taskModalBackdrop.classList.remove("open");

  taskModalBackdrop.setAttribute("aria-hidden", "true");

  document.getElementById("taskForm").reset();

  document.getElementById("taskId").value = "";
}

function saveTaskFromForm(event) {
  event.preventDefault();

  const id = document.getElementById("taskId").value;

  const data = {
    date: document.getElementById("taskDate").value,

    start: document.getElementById("taskStart").value,

    end: document.getElementById("taskEnd").value,

    title: document.getElementById("taskTitle").value.trim(),

    category: document.getElementById("taskCategory").value,

    subject: document.getElementById("taskSubject").value,

    priority: document.getElementById("taskPriority").value,

    notes: document.getElementById("taskNotes").value.trim(),
  };

  if (!data.title) {
    showToast("Task title required.");

    return;
  }

  if (id) {
    const index = tasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      tasks[index] = {
        ...tasks[index],
        ...data,
      };
    }

    showToast("Task updated ✔️");
  } else {
    tasks.push({
      id: uid("custom"),

      ...data,

      done: false,

      seed: false,
    });

    showToast("Task added ✔️");
  }

  selectedDate = data.date;

  calendarCursor = parseISO(selectedDate);

  saveTasks();
  closeTaskModal();
  renderAll();
}

/* =========================================================
       TASK ACTIONS
    ========================================================= */

function toggleTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return;
  }

  task.done = !task.done;

  saveTasks();
  renderAll();
}

function editTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (task) {
    openTaskModal(task, task.date);
  }
}

function deleteTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return;
  }

  if (!window.confirm(`Delete "${task.title}"?`)) {
    return;
  }

  tasks = tasks.filter((item) => item.id !== taskId);

  saveTasks();
  renderAll();

  showToast("Task deleted.");
}

function handleTaskAction(event) {
  const button = event.target.closest("[data-task-action]");

  if (!button) {
    return;
  }

  const { taskAction, taskId } = button.dataset;

  if (taskAction === "toggle") {
    toggleTask(taskId);
  }

  if (taskAction === "edit") {
    editTask(taskId);
  }

  if (taskAction === "delete") {
    deleteTask(taskId);
  }
}

function completeSelectedDay() {
  const dayTasks = tasks.filter((task) => task.date === selectedDate);

  const incomplete = dayTasks.filter((task) => !task.done);

  if (!incomplete.length) {
    showToast("এই দিনের সব task complete ✔️");

    return;
  }

  if (!window.confirm(`Mark ${incomplete.length} tasks complete?`)) {
    return;
  }

  dayTasks.forEach((task) => {
    task.done = true;
  });

  saveTasks();
  renderAll();

  showToast("Full day completed ✔️");
}

/* =========================================================
       FOCUS TIMER
    ========================================================= */

function renderFocusTimer() {
  const minutes = Math.floor(focusSeconds / 60);

  const seconds = focusSeconds % 60;

  document.getElementById("focusTime").textContent = `${String(
    minutes,
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  document.getElementById("focusStartBtn").textContent = focusRunning
    ? "Pause"
    : focusSeconds === 3000
      ? "Start Focus"
      : "Resume";
}

function toggleFocusTimer() {
  if (focusRunning) {
    focusRunning = false;

    clearInterval(focusInterval);

    focusInterval = null;

    renderFocusTimer();

    return;
  }

  focusRunning = true;

  focusInterval = setInterval(() => {
    focusSeconds -= 1;

    if (focusSeconds <= 0) {
      focusSeconds = 0;

      focusRunning = false;

      clearInterval(focusInterval);

      focusInterval = null;

      renderFocusTimer();

      showToast("50 মিনিট deep focus complete ✔️");

      return;
    }

    renderFocusTimer();
  }, 1000);

  renderFocusTimer();
}

function resetFocusTimer() {
  clearInterval(focusInterval);

  focusInterval = null;

  focusRunning = false;

  focusSeconds = 50 * 60;

  renderFocusTimer();
}

/* =========================================================
       BACKUP
    ========================================================= */

function exportData() {
  const backup = {
    app: "BBS CG-4 Balanced Mission Planner",

    version: PLAN_VERSION,

    exportedAt: new Date().toISOString(),

    tasks,
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");

  anchor.href = url;

  anchor.download = `bbs-cg4-backup-${todayISO()}.json`;

  document.body.appendChild(anchor);

  anchor.click();

  anchor.remove();

  URL.revokeObjectURL(url);

  showToast("Backup exported ✔️");
}

function importData(file) {
  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);

      if (!parsed || !Array.isArray(parsed.tasks)) {
        throw new Error("Invalid backup");
      }

      if (!window.confirm("Current planner data will be replaced. Continue?")) {
        return;
      }

      tasks = parsed.tasks;

      saveTasks();
      renderAll();

      showToast("Backup imported ✔️");
    } catch (error) {
      console.error(error);

      showToast("Invalid backup file.");
    }
  };

  reader.readAsText(file);
}

function resetPlanner() {
  if (
    !window.confirm(
      "Reset করবে? Custom changes এবং completion progress reset হবে.",
    )
  ) {
    return;
  }

  tasks = generateInitialSchedule();

  selectedDate = getInitialDate();

  calendarCursor = parseISO(selectedDate);

  saveTasks();
  renderAll();

  showToast("Balanced planner regenerated ✔️");
}

/* =========================================================
       THEME
    ========================================================= */

function loadTheme() {
  if (localStorage.getItem(THEME_KEY) === "light") {
    document.body.classList.add("light-theme");
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");

  const value = document.body.classList.contains("light-theme")
    ? "light"
    : "dark";

  localStorage.setItem(THEME_KEY, value);
}

/* =========================================================
       TOAST
    ========================================================= */

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* =========================================================
       EVENTS
    ========================================================= */

document.querySelectorAll(".nav-btn").forEach((button) => {
  button.addEventListener("click", () => {
    switchView(button.dataset.view);
  });
});

document
  .getElementById("mobileMenuBtn")
  .addEventListener("click", openMobileMenu);

document
  .getElementById("sidebarCloseBtn")
  .addEventListener("click", closeMobileMenu);

document
  .getElementById("sidebarOverlay")
  .addEventListener("click", closeMobileMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMobileMenu();
  }
});

document.getElementById("themeToggle").addEventListener("click", toggleTheme);

document.getElementById("addTaskTopBtn").addEventListener("click", () => {
  openTaskModal(null, selectedDate);
});

document.getElementById("addTaskDayBtn").addEventListener("click", () => {
  openTaskModal(null, selectedDate);
});

document
  .getElementById("taskModalClose")
  .addEventListener("click", closeTaskModal);

document
  .getElementById("taskCancelBtn")
  .addEventListener("click", closeTaskModal);

document
  .getElementById("taskForm")
  .addEventListener("submit", saveTaskFromForm);

taskModalBackdrop.addEventListener("click", (event) => {
  if (event.target === taskModalBackdrop) {
    closeTaskModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTaskModal();
    closeMobileMenu();
  }
});

document
  .getElementById("todayTaskList")
  .addEventListener("click", handleTaskAction);

document
  .getElementById("selectedDayTaskList")
  .addEventListener("click", handleTaskAction);

document.getElementById("calendarGrid").addEventListener("click", (event) => {
  const cell = event.target.closest(".calendar-day");

  if (!cell) {
    return;
  }

  selectedDate = cell.dataset.date;

  const selected = parseISO(selectedDate);

  if (
    selected.getMonth() !== calendarCursor.getMonth() ||
    selected.getFullYear() !== calendarCursor.getFullYear()
  ) {
    calendarCursor = selected;
  }

  renderCalendar();
});

document.getElementById("previousMonthBtn").addEventListener("click", () => {
  calendarCursor = new Date(
    calendarCursor.getFullYear(),
    calendarCursor.getMonth() - 1,
    1,
  );

  renderCalendar();
});

document.getElementById("nextMonthBtn").addEventListener("click", () => {
  calendarCursor = new Date(
    calendarCursor.getFullYear(),
    calendarCursor.getMonth() + 1,
    1,
  );

  renderCalendar();
});

document.getElementById("calendarTodayBtn").addEventListener("click", () => {
  selectedDate = clampPlanDate(todayISO());

  calendarCursor = parseISO(selectedDate);

  renderCalendar();
});

document
  .getElementById("openTodayCalendarBtn")
  .addEventListener("click", () => {
    selectedDate = clampPlanDate(todayISO());

    calendarCursor = parseISO(selectedDate);

    switchView("calendar");
  });

document
  .getElementById("completeAllDayBtn")
  .addEventListener("click", completeSelectedDay);

document
  .getElementById("focusStartBtn")
  .addEventListener("click", toggleFocusTimer);

document
  .getElementById("focusResetBtn")
  .addEventListener("click", resetFocusTimer);

document.getElementById("exportDataBtn").addEventListener("click", exportData);

document.getElementById("importDataBtn").addEventListener("click", () => {
  document.getElementById("importFileInput").click();
});

document
  .getElementById("importFileInput")
  .addEventListener("change", (event) => {
    const file = event.target.files?.[0];

    if (file) {
      importData(file);
    }

    event.target.value = "";
  });

document
  .getElementById("resetPlannerBtn")
  .addEventListener("click", resetPlanner);

/* =========================================================
       INIT
    ========================================================= */

function initializeApp() {
  loadTheme();
  loadTasks();
  renderFocusTimer();
  renderAll();
}

initializeApp();

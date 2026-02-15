export type SkillGroup = {
  title: string;
  items: { name: string; level: number; note?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript / TypeScript", level: 82 },
      { name: "React / Next.js", level: 78 },
      { name: "UI/UX (Accessibility)", level: 70 }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 72 },
      { name: "SQL (SQLite/Postgres)", level: 62 },
      { name: "Docker", level: 60 }
    ]
  },
  {
    title: "Security",
    items: [
      { name: "Log Analysis", level: 75 },
      { name: "Detections (Rules)", level: 65 },
      { name: "Threat Intel Basics", level: 62 },
      { name: "Incident Response Basics", level: 55 }
    ]
  }
];

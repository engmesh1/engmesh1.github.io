import type { Project } from "@/lib/projects";
import { profile as defaultProfile } from "@/lib/profile";
import { projects as defaultProjects } from "@/lib/projects";

export type EditableProfile = typeof defaultProfile & {
  nameEn?: string;
  heroTitle?: string;
  heroSubtitle?: string;
};

export type ContentState = {
  profile: EditableProfile;
  projects: Project[];
  ui: {
    projectsTitle: string;
    projectsSubtitle: string;
    projectsPageTitle: string;
    projectsPageSubtitle: string;
  };
};

export const DEFAULT_CONTENT: ContentState = {
  profile: defaultProfile,
  projects: defaultProjects,
  ui: {
    projectsTitle: "Projects",
    projectsSubtitle: "فلتر المشاريع حسب النوع. كل كرت يفتح نافذة تفاصيل بدون مغادرة الصفحة.",
    projectsPageTitle: "Projects",
    projectsPageSubtitle: "أبرز المشاريع حسب الفئات الظاهرة لكم.",
  },
};

export const CONTENT_STORAGE_KEY = "meshari_portfolio_content_v1";

export function safeParseJSON<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

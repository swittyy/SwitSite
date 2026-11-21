export interface Project {
  name: string;
  description: string;
  status: "in-progress" | "planned" | "completed";
  href: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

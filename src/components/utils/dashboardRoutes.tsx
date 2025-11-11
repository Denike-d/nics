import { ProfileType } from "@/components/utils/types";

export const dashboardRoutes: Record<Exclude<ProfileType, null>, string> = {
  individual: "/dashboard",
  agent: "/agent",
  company: "/company",
  government: "/government",
};

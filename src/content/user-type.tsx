import { Check, User, Users, Building2, Landmark } from "lucide-react";

export const userType = [
  {
    id: "Individual",
    title: "INDIVIDUAL",
    icon: <User size={28} strokeWidth={2} />,
    description: "Individuals importing non-commercial items",
    eligibility: [
      "Importing for personal use (non-commercial)",
      "Must have valid identification ( NIN or international passport)",
    ],
    requiredDocs: ["Valid NIN"],
    fee: "35,000 Naira",
    bgColor: "rgba(231, 242, 236, 1)",
  },

  {
    id: "Agent",
    title: "AGENT",
    icon: <Users size={28} strokeWidth={2} />,
    description: "Licensed agents handling imports on behalf of others",
    eligibility: [
      "Must have a valid identification (NIN or international passport)",
      "Authorized to act on behalf of client or organization",
    ],
    requiredDocs: ["Valid NIN or passport"],
    fee: "35,000 Naira",
    bgColor: "rgba(231, 242, 236, 1)",
  },
  {
    id: "Company",
    title: "COMPANY",
    icon: <Building2 size={28} strokeWidth={2} />,
    description: "Registered businesses importing goods for commercial use",
    eligibility: [
      "Must be a legally registered company in Nigeria",
      "Imports are strictly for business or resale purposes",
    ],
    requiredDocs: ["CAC / TIN"],
    fee: "35,000 Naira",
    bgColor: "bg-green-50",
  },
  {
    id: "Government",
    title: "GOVERNMENT",
    icon: <Landmark size={28} strokeWidth={2} />,
    description: "Government agencies importing official items",
    eligibility: [
      "Must be on official government body",
      "Imports are for public or institutional use only",
    ],
    requiredDocs: ["Government Agency ID"],
    fee: "Not Applicable",
    bgColor: "bg-green-50",
  },
];

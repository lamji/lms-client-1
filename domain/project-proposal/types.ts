export interface ProposalSubSection {
  id: string;
  title: string;
  anchor: string;
}

export interface ProposalSection {
  id: string;
  title: string;
  icon: "BookOpenText" | "ShieldCheck" | "MonitorSmartphone" | "CreditCard" | "UserRound" | "ListChecks";
  children: ProposalSubSection[];
}

export interface ProposalStep {
  title: string;
  description: string;
}

export interface ProposalCallout {
  label: "Included in Scope" | "How It Works" | "Clarification Needed";
  text: string;
}

export interface ProposalServiceRow {
  service: string;
  purpose: string;
  notes: string;
  costModel: string;
}

export interface ProposalState {
  activeSection: string;
  activeSubSection: string;
  searchQuery: string;
}

export interface ProposalContentSectionsProps {
  activeSection: string;
  activeSubSection: string;
}

export type MainScreensFeatureMockType = "header" | "hero" | "subscriber" | "non-subscriber" | "reviewer";

export interface MainScreensFeatureMockProps {
  feature: MainScreensFeatureMockType;
}

export interface MainScreensMockFrameProps {
  title: string;
  children: unknown;
}

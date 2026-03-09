"use client";

import { useCallback, useMemo, useState } from "react";
import type { ProposalSection, ProposalState } from "@/domain/project-proposal/types";

export const PROPOSAL_SECTIONS: ProposalSection[] = [
  {
    id: "scope",
    title: "Scope",
    icon: "BookOpenText",
    children: [{ id: "scope-main", title: "Scope", anchor: "scope-main" }],
  },
  {
    id: "external-services",
    title: "External Services",
    icon: "MonitorSmartphone",
    children: [{ id: "external-services-main", title: "External Services", anchor: "external-services-main" }],
  },
  {
    id: "work-breakdown",
    title: "Work Breakdown Sheet",
    icon: "ShieldCheck",
    children: [
      { id: "work-breakdown-main", title: "Work Breakdown Sheet", anchor: "work-breakdown-main" },
      { id: "wbs-otp-flow", title: "1.0 OTP Flow", anchor: "wbs-otp-flow" },
      { id: "wbs-login", title: "Login", anchor: "wbs-login" },
      { id: "wbs-forgot-password", title: "Forgot Password", anchor: "wbs-forgot-password" },
      { id: "wbs-sign-up", title: "Sign Up", anchor: "wbs-sign-up" },
    ],
  },
  {
    id: "main-screens",
    title: "App/Web Main Screens",
    icon: "CreditCard",
    children: [
      { id: "main-screens-main", title: "App/Web Main Screens", anchor: "main-screens-main" },
      { id: "screens-home-hero", title: "Hero Section", anchor: "screens-home-hero" },
      { id: "screens-home-subscriber", title: "Subscriber Course View", anchor: "screens-home-subscriber" },
      { id: "screens-home-nonsubscriber", title: "Non-Subscriber Simulation View", anchor: "screens-home-nonsubscriber" },
      { id: "screens-reviewer-modal", title: "Modal Reviewer", anchor: "screens-reviewer-modal" },
    ],
  },
  {
    id: "profile-screen",
    title: "Profile Screen",
    icon: "ListChecks",
    children: [{ id: "profile-screen-main", title: "Profile Screen", anchor: "profile-screen-main" }],
  },
  {
    id: "admin-brd",
    title: "Admin BRD",
    icon: "UserRound",
    children: [
      { id: "admin-brd-main", title: "Overview", anchor: "admin-brd-main" },
      { id: "admin-brd-dashboard", title: "1. Dashboard", anchor: "admin-brd-dashboard" },
      { id: "admin-brd-subscribers", title: "2. Subscribers", anchor: "admin-brd-subscribers" },
      { id: "admin-brd-unsubscribers", title: "3. Unsubscribers", anchor: "admin-brd-unsubscribers" },
      { id: "admin-brd-modules", title: "4. Modules", anchor: "admin-brd-modules" },
      { id: "admin-brd-payments", title: "5. Payments", anchor: "admin-brd-payments" },
    ],
  },
];

export function useProjectProposal() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: useProjectProposal fired");
  }

  const [state, setState] = useState<ProposalState>({
    activeSection: PROPOSAL_SECTIONS[0]?.id ?? "",
    activeSubSection: PROPOSAL_SECTIONS[0]?.children[0]?.anchor ?? "",
    searchQuery: "",
  });

  const normalizedQuery = state.searchQuery.trim().toLowerCase();

  const sections = useMemo(() => {
    return PROPOSAL_SECTIONS.map((section) => {
      const sectionMatches = section.title.toLowerCase().includes(normalizedQuery);
      const children = sectionMatches
        ? section.children
        : section.children.filter((child) => child.title.toLowerCase().includes(normalizedQuery));

      return {
        ...section,
        children,
      };
    }).filter((section) => section.children.length > 0);
  }, [normalizedQuery]);

  const activeSection = sections.find((section) => section.id === state.activeSection)?.id ?? sections[0]?.id ?? "";
  const activeSubSection =
    sections.find((section) => section.id === activeSection)?.children.find((child) => child.anchor === state.activeSubSection)
      ?.anchor ??
    sections.find((section) => section.id === activeSection)?.children[0]?.anchor ??
    "";

  const setActiveSection = useCallback((sectionId: string) => {
    const section = PROPOSAL_SECTIONS.find((entry) => entry.id === sectionId);
    setState((prev) => ({
      ...prev,
      activeSection: sectionId,
      activeSubSection: section?.children[0]?.anchor ?? "",
    }));
  }, []);

  const setSearchQuery = useCallback((searchQuery: string) => {
    setState((prev) => ({
      ...prev,
      searchQuery,
    }));
  }, []);

  return {
    activeSection,
    activeSubSection,
    searchQuery: state.searchQuery,
    sections,
    setActiveSection,
    setActiveSubSection: (subSectionAnchor: string) => {
      setState((prev) => ({
        ...prev,
        activeSubSection: subSectionAnchor,
      }));
    },
    setSearchQuery,
  };
}

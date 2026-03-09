"use client";

import Link from "next/link";
import { BookOpenText, CreditCard, ListChecks, MonitorSmartphone, Search, ShieldCheck, UserRound } from "lucide-react";
import { Footer } from "@/components/shared/Footer";
import { Input } from "@/components/ui/input";
import { ProposalContentSections } from "./modules/ProposalContentSections";
import { useProjectProposal } from "./useProjectProposal";

const SECTION_ICONS = {
  BookOpenText: <BookOpenText size={16} />,
  ShieldCheck: <ShieldCheck size={16} />,
  MonitorSmartphone: <MonitorSmartphone size={16} />,
  CreditCard: <CreditCard size={16} />,
  UserRound: <UserRound size={16} />,
  ListChecks: <ListChecks size={16} />,
} as const;

export default function ProjectProposalPage() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: ProjectProposalPage fired");
  }

  const proposal = useProjectProposal();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0f9ff_0%,_#f8fafc_35%,_#ffffff_100%)] text-zinc-900 selection:bg-cyan-200/60">
      <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5" data-test-id="project-proposal-logo">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-600 text-white">
              <BookOpenText size={16} />
            </div>
            <span className="text-lg font-bold tracking-tight">LMS Proposal</span>
          </Link>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/docs" className="text-sm text-zinc-500 hover:text-zinc-900" data-test-id="project-proposal-nav-docs">
              Docs
            </Link>
            <Link
              href="/prroject-proposal"
              className="rounded-full bg-zinc-900 px-3 py-1 text-sm text-white"
              data-test-id="project-proposal-nav-current"
            >
              Proposal
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto flex max-w-7xl">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-zinc-200/80 px-4 py-8 lg:block">
          <div className="relative mb-6">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <Input
              data-test-id="project-proposal-search"
              placeholder="Search proposal sections..."
              value={proposal.searchQuery}
              onChange={(event) => proposal.setSearchQuery(event.target.value)}
              className="h-10 border-zinc-300 bg-white pl-9 text-xs text-zinc-900 placeholder:text-zinc-400"
            />
          </div>

          <nav className="space-y-3">
            {proposal.sections.map((section) => (
              <div key={section.id}>
                <button
                  type="button"
                  data-test-id={`project-proposal-section-${section.id}`}
                  onClick={() => proposal.setActiveSection(section.id)}
                  className={`flex w-full items-center justify-start gap-2 px-2 text-left text-sm font-semibold transition-colors ${
                    proposal.activeSection === section.id ? "text-cyan-800" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {SECTION_ICONS[section.icon]}
                  {section.title}
                </button>
                <ul className="ml-6 mt-1 space-y-1">
                  {section.children.map((subSection) => (
                    <li key={subSection.id}>
                      <button
                        type="button"
                        data-test-id={`project-proposal-sub-${subSection.anchor}`}
                        onClick={() => {
                          proposal.setActiveSection(section.id);
                          proposal.setActiveSubSection(subSection.anchor);
                        }}
                        className={`block w-full px-2 py-1 text-left text-xs transition-colors ${
                          proposal.activeSubSection === subSection.anchor
                            ? "font-semibold text-cyan-700"
                            : "text-zinc-500 hover:text-zinc-800"
                        }`}
                      >
                        {subSection.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 px-6 py-12 lg:px-12">
          <div className="mb-10 p-1">
            <span className="mb-3 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-900">
              Client Proposal
            </span>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto lg:hidden">
            {proposal.sections.map((section) => (
              <button
                type="button"
                key={section.id}
                data-test-id={`project-proposal-mobile-tab-${section.id}`}
                onClick={() => proposal.setActiveSection(section.id)}
                className={`whitespace-nowrap border-b-2 px-1 pb-2 text-sm transition-colors ${
                  proposal.activeSection === section.id
                    ? "border-cyan-700 font-semibold text-cyan-700"
                    : "border-transparent text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <ProposalContentSections activeSection={proposal.activeSection} activeSubSection={proposal.activeSubSection} />
        </main>
      </div>

      <Footer />
    </div>
  );
}

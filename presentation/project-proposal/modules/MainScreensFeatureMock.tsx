"use client";

import type { MainScreensFeatureMockProps, MainScreensMockFrameProps } from "@/domain/project-proposal/types";

function MockFrame({ title, children }: MainScreensMockFrameProps) {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MockFrame fired", { title });
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-[0_14px_32px_-20px_rgba(15,23,42,0.45)]">
      <div className="border-b border-slate-300 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 px-4 py-2.5">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-100">{title}</div>
      </div>
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4">{children as never}</div>
    </div>
  );
}

function HeaderFeatureMock() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: HeaderFeatureMock fired");
  }

  return (
    <MockFrame title="Home Header Mock">
      <div className="mx-auto w-full max-w-2xl pt-2">
        <div className="rounded-[26px] border border-slate-700 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-2 shadow-[0_22px_55px_-30px_rgba(2,6,23,0.95)]">
          <div className="relative overflow-hidden rounded-[20px] border border-slate-600 bg-black p-2">
            <div className="absolute left-1/2 top-0 h-3 w-20 -translate-x-1/2 rounded-b-xl bg-slate-800">
              <div className="mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
            </div>
            <div className="overflow-hidden rounded-[14px] border border-slate-300 bg-slate-100 shadow-inner">
              <div className="border-b border-slate-300 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 px-4 py-2">
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-100">Home Header Mock</div>
              </div>

              <div className="space-y-4 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:14px_14px] bg-[#f3f6fb] p-4">
                <header className="flex items-center justify-between rounded-xl border border-slate-300/80 bg-white/80 px-3 py-2.5 backdrop-blur">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-500" />
                    <span className="text-xs font-semibold text-slate-700">Jick T. Lampago</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-medium">
                    <button type="button" className="rounded-md border border-slate-900 bg-slate-900 px-3 py-1.5 text-white">
                      Request Resume
                    </button>
                    <button type="button" className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-700">
                      Contact Me
                    </button>
                    <button type="button" className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-700">
                      BrainX AI
                    </button>
                  </div>
                </header>

                <div className="h-48 rounded-xl border border-slate-200/80 bg-white/55" />
                <div className="h-24 rounded-xl border border-slate-200/80 bg-white/45" />
                <div className="h-16 rounded-xl border border-slate-200/80 bg-white/40" />
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>Header-only preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-3 w-[92%] rounded-b-2xl border border-slate-300 bg-gradient-to-b from-slate-200 to-slate-300 shadow-[0_16px_30px_-24px_rgba(15,23,42,0.85)]">
          <div className="mx-auto mt-0.5 h-1.5 w-24 rounded-full bg-slate-400/80" />
        </div>
      </div>
    </MockFrame>
  );
}

function HeroFeatureMock() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: HeroFeatureMock fired");
  }

  return (
    <MockFrame title="Hero Slider Mock">
      <div className="space-y-3">
        <div className="relative overflow-hidden rounded-xl border border-slate-300 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 p-4 text-white">
          <div className="absolute -right-4 -top-5 h-20 w-20 rounded-full bg-white/20 blur-md" />
          <p className="text-[11px] uppercase tracking-[0.14em] text-blue-100">Featured</p>
          <h4 className="mt-1 text-base font-semibold">Nursing Masterclass Track</h4>
          <p className="mt-1 text-xs text-blue-50/90">Slide presentation powered by React Slick</p>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
          <span>Slide 1 of 3</span>
          <div className="flex items-center gap-2">
            <span className="h-2 w-5 rounded-full bg-slate-800" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

function SubscriberFeatureMock() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: SubscriberFeatureMock fired");
  }

  return (
    <MockFrame title="Subscriber Course View Mock">
      <div className="space-y-3">
        <div className="rounded-xl border border-slate-300 bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-800">Emergency Nursing</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">Paid Active</span>
          </div>
          <p className="mb-2 text-xs text-slate-600">Progress: 65% complete</p>
          <div className="mb-3 h-2 rounded-full bg-slate-200">
            <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-slate-700 to-blue-700" />
          </div>
          <div className="flex gap-2 text-xs">
            <div className="rounded-md border border-slate-900 bg-slate-900 px-2.5 py-1 text-white">Continue</div>
            <div className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-slate-500">Start (Due Unpaid)</div>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

function NonSubscriberFeatureMock() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: NonSubscriberFeatureMock fired");
  }

  return (
    <MockFrame title="Non-Subscriber Simulation + Plans Mock">
      <div className="space-y-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
          <div className="mb-2 text-sm font-semibold text-amber-900">Free Simulation</div>
          <div className="text-xs text-amber-800">Selectable item count • Start Free • Detailed score and explanation after finish</div>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-300 bg-white px-3 py-2">
            <p className="text-xs font-semibold text-slate-800">Monthly</p>
            <p className="text-[11px] text-slate-600">Entry plan</p>
          </div>
          <div className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-2">
            <p className="text-xs font-semibold text-blue-900">Quarterly</p>
            <p className="text-[11px] text-blue-700">Best value</p>
          </div>
          <div className="rounded-lg border border-slate-300 bg-white px-3 py-2">
            <p className="text-xs font-semibold text-slate-800">Yearly</p>
            <p className="text-[11px] text-slate-600">Long-term plan</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs text-slate-700">
          Payment Flow: PayMongo (GCash, Maya, Credit/Debit) → webhook updates subscription status
        </div>
      </div>
    </MockFrame>
  );
}

function ReviewerFeatureMock() {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: ReviewerFeatureMock fired");
  }

  return (
    <MockFrame title="Reviewer Modal Mock">
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-xl border border-slate-300 bg-white px-3 py-2">
          <span className="text-xs font-medium text-slate-700">Question 3 of 50</span>
          <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-700">Timer 01:45</span>
        </div>
        <div className="space-y-2">
          <div className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700">A. Option</div>
          <div className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700">B. Option</div>
          <div className="rounded-lg border border-blue-700 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-900">C. Selected Option</div>
        </div>
        <div className="flex gap-2 text-xs">
          <div className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-slate-700">Previous</div>
          <div className="rounded-md border border-slate-900 bg-slate-900 px-2.5 py-1 text-white">Next</div>
        </div>
      </div>
    </MockFrame>
  );
}

export function MainScreensFeatureMock({ feature }: MainScreensFeatureMockProps) {
  if (process.env.NODE_ENV !== "production") {
    console.debug("Debug flow: MainScreensFeatureMock fired", { feature });
  }

  if (feature === "header") return <HeaderFeatureMock />;
  if (feature === "hero") return <HeroFeatureMock />;
  if (feature === "subscriber") return <SubscriberFeatureMock />;
  if (feature === "non-subscriber") return <NonSubscriberFeatureMock />;
  return <ReviewerFeatureMock />;
}

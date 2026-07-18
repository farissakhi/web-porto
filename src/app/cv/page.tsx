import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `CV — ${profile.name}`,
  description: `Curriculum Vitae of ${profile.fullName} — ${profile.role}`,
};

export default function CVPage() {
  return (
    <main className="fixed inset-0 bg-[#1a1a1a] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#111] border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </a>

          <span className="text-white/20">|</span>

          <span className="text-sm text-white/80 font-medium">
            {profile.fullName} — CV
          </span>
        </div>

        <a
          href={profile.cvFile}
          download="CV-Faris-Sakhi.pdf"
          className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
                     bg-emerald-500 text-white hover:bg-emerald-400
                     transition-colors duration-200"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* PDF Viewer — embed as iframe so IDM doesn't intercept */}
      <div className="flex-1 min-h-0">
        <iframe
          src={`${profile.cvFile}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
          title={`CV — ${profile.name}`}
          className="w-full h-full border-none"
          loading="eager"
        />
      </div>
    </main>
  );
}

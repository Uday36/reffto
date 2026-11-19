import { useState } from "react";
import {
  Search,
  Briefcase,
  MapPin,
  ArrowRight,
  X,
  Send,
  CheckCircle2,
} from "lucide-react";

const jobListings = [
  {
    id: "role-1",
    title: "Full-Stack Engineer",
    department: "Software Development",
    type: "Full-time",
    location: "Indore, India (Hybrid)",
  },
  {
    id: "role-2",
    title: "Embedded Systems Engineer",
    department: "Hardware Labs",
    type: "Full-time",
    location: "Indore, India (On-site)",
  },
  {
    id: "role-3",
    title: "Product Design Generalist",
    department: "Design & User Experience",
    type: "Full-time",
    location: "Indore, India",
  },
  {
    id: "role-4",
    title: "Drone Avionics & Flight Systems Specialist",
    department: "Aerial Systems",
    type: "Full-time",
    location: "Indore, India (On-site)",
  },
  {
    id: "role-5",
    title: "Backend Engineer",
    department: "Software Development",
    type: "Full-time",
    location: "Indore, India",
  },
  {
    id: "role-6",
    title: "AI & Computer Vision Engineer",
    department: "Applied Research",
    type: "Full-time",
    location: "Indore, India (Hybrid)",
  },
];

export default function OpenPositions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeJobModal, setActiveJobModal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = jobListings.filter((job) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      job.title.toLowerCase().includes(q) ||
      job.department.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q)
    );
  });

  const handleApplyClick = (job) => {
    setActiveJobModal(job);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setActiveJobModal(null);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="open-roles"
      className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Search and Active Roles Header Bar */}
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-1 items-center gap-3">
            <Search
              size={18}
              className="text-gray-400 shrink-0"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job role, skill, or department..."
              className="w-full bg-transparent py-1 text-sm text-[#111827] placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-[#F3E8FF] bg-[#FAF5FF] px-4 py-1.5 text-xs font-semibold text-[#9401AE] sm:self-auto shadow-2xs shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
            <span className="text-[11px] font-bold tracking-wider text-[#9401AE]">ACTIVE</span>
            <span className="rounded bg-white border border-gray-200 px-2 py-0.5 text-xs font-bold text-gray-900 shadow-2xs">
              {filteredJobs.length}
            </span>
            <span className="text-[11px] font-bold tracking-wider text-[#9401AE]">ROLES</span>
          </div>
        </div>

        {/* Job Listings matching Reference Rows */}
        <div className="mt-8 sm:mt-10">
          {filteredJobs.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 p-12 text-center mt-6">
              <p className="text-base font-medium text-gray-600">
                No roles match &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs font-semibold text-[#9401AE] hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className={`group flex flex-col justify-between gap-3 bg-white px-2 sm:px-4 py-3.5 sm:py-4 transition-all duration-200 md:flex-row md:items-center ${
                  index < filteredJobs.length - 1
                    ? "border-b-2 border-black rounded-b-2xl mb-1"
                    : "border-b border-gray-200 rounded-b-none"
                }`}
              >
                {/* Title */}
                <h3 className="text-base font-bold text-[#111827] tracking-tight md:min-w-[260px] lg:min-w-[300px]">
                  {job.title}
                </h3>

                {/* Metadata cluster */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 md:flex-1 md:justify-start">
                  {/* Department pill with briefcase icon */}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F3E8FF] bg-[#FAF5FF] px-3.5 py-1 text-xs font-medium text-[#9401AE]">
                    <Briefcase size={13} className="text-[#9401AE]" />
                    {job.department}
                  </span>

                  {/* Type pill */}
                  <span className="inline-flex items-center rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-normal text-gray-500">
                    {job.type}
                  </span>

                  {/* Location with Pin */}
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                    <MapPin size={13} className="text-gray-400" />
                    {job.location}
                  </span>
                </div>

                {/* Apply Button */}
                <div className="shrink-0 pt-1 md:pt-0">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#9401AE] px-5 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#7e0094]"
                  >
                    <span>Apply</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Application Modal */}
      {activeJobModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#171329]/60 backdrop-blur-xs"
            onClick={handleCloseModal}
          />

          {/* Modal Container */}
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-gray-150 bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={handleCloseModal}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF5FF] text-[#9401AE]">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="mt-5 text-2xl font-bold text-[#171329]">
                  Application Received!
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Thank you for applying for the{" "}
                  <strong className="text-[#9401AE]">{activeJobModal.title}</strong>{" "}
                  role at Reffto. Our recruiting team will review your profile and reach out within 48 hours.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="mt-6 rounded-full bg-[#9401AE] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#7e0094]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <span className="rounded-full bg-[#FAF5FF] px-3 py-1 text-xs font-semibold text-[#9401AE]">
                  {activeJobModal.department}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-[#171329]">
                  {activeJobModal.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {activeJobModal.location} • {activeJobModal.type}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Maya Sharma"
                      className="mt-1.5 w-full rounded-xl border border-gray-250 px-3.5 py-2.5 text-xs text-[#21162A] placeholder-gray-400 focus:border-[#9401AE] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="maya@example.com"
                        className="mt-1.5 w-full rounded-xl border border-gray-250 px-3.5 py-2.5 text-xs text-[#21162A] placeholder-gray-400 focus:border-[#9401AE] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="mt-1.5 w-full rounded-xl border border-gray-250 px-3.5 py-2.5 text-xs text-[#21162A] placeholder-gray-400 focus:border-[#9401AE] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      LinkedIn / GitHub / Portfolio Link *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.portfolio}
                      onChange={(e) =>
                        setFormData({ ...formData, portfolio: e.target.value })
                      }
                      placeholder="https://linkedin.com/in/yourprofile or portfolio URL"
                      className="mt-1.5 w-full rounded-xl border border-gray-250 px-3.5 py-2.5 text-xs text-[#21162A] placeholder-gray-400 focus:border-[#9401AE] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Why Reffto? (Brief Note)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.note}
                      onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })
                      }
                      placeholder="Tell us what you're passionate about building..."
                      className="mt-1.5 w-full rounded-xl border border-gray-250 px-3.5 py-2.5 text-xs text-[#21162A] placeholder-gray-400 focus:border-[#9401AE] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#9401AE] py-3 text-xs font-semibold text-white transition-colors hover:bg-[#7e0094]"
                    >
                      <Send size={14} />
                      Submit Application
                    </button>
                    <p className="mt-2.5 text-center text-[11px] text-gray-400">
                      Or email your resume directly to{" "}
                      <a
                        href={`mailto:hr@reffto.com?subject=Application for ${encodeURIComponent(
                          activeJobModal.title
                        )}`}
                        className="font-medium text-[#9401AE] underline"
                      >
                        hr@reffto.com
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}


import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";

const initialForm = {
  fullName: "",
  institutionName: "",
  email: "",
  phone: "",
  institutionType: "",
  studentStrength: "",
  city: "",
  state: "",
  requirements: "",
  contactMethod: "Email",
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-[#E6DFED] bg-white px-4 py-3.5 text-sm text-[#171329] outline-none transition placeholder:text-[#A19AAA] focus:border-[#9B28CC] focus:ring-4 focus:ring-[#8000B8]/10";

const labelClass = "text-sm font-medium text-[#393247]";

function Field({ label, name, value, onChange, error, ...props }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${fieldClass} ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />

      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function LabEnquiryFormSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  function validate() {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.institutionName.trim()) {
      nextErrors.institutionName = "Please enter your institution name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!/^[0-9+\-\s()]{10,18}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.institutionType) {
      nextErrors.institutionType = "Please select an institution type.";
    }

    if (!form.city.trim()) {
      nextErrors.city = "Please enter your city.";
    }

    if (!form.state.trim()) {
      nextErrors.state = "Please enter your state.";
    }

    if (!form.requirements.trim()) {
      nextErrors.requirements = "Please describe your lab requirements.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("validation-error");
      return;
    }

    // EmailJS is not configured yet.
    // Do not show a success state or claim that data was sent.
    setStatus("configuration-required");
  }

  return (
    <section
      id="lab-enquiry"
      className="scroll-mt-24 bg-[#FAF9FC] px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8000B8]">
            Let's plan your lab
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.06em] text-[#171329] sm:text-6xl">
            Tell us what you want to build.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#706B7D] sm:text-base">
            Share a few details about your institution and requirements.
            Our team can use this information to understand the lab
            setup you have in mind.
          </p>

          <div className="mt-8 rounded-2xl border border-[#E8DDF0] bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E7F8] text-[#8000B8]">
                <Send size={18} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#171329]">
                  Have a specific requirement?
                </p>
                <p className="mt-1 text-xs leading-5 text-[#706B7D]">
                  Tell us about your space, students and goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[26px] border border-[#E9E1F0] bg-white p-5 shadow-[0_16px_60px_rgba(43,22,64,0.05)] sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#171329]">
                Lab enquiry
              </h3>
              <p className="mt-2 text-sm text-[#706B7D]">
                Fields marked * are required.
              </p>
            </div>

            <span className="hidden rounded-full bg-[#F0E7F8] px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#8000B8] sm:inline-flex">
              GET STARTED
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
            <Field
              label="Full name *"
              name="fullName"
              placeholder="Your full name"
              autoComplete="name"
              value={form.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />

            <Field
              label="Institution name *"
              name="institutionName"
              placeholder="School / college / university"
              value={form.institutionName}
              onChange={handleChange}
              error={errors.institutionName}
              required
            />

            <Field
              label="Work email *"
              name="email"
              type="email"
              placeholder="you@institution.edu"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Field
              label="Mobile number *"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />

            <div>
              <label htmlFor="institutionType" className={labelClass}>
                Institution type *
              </label>

              <select
                id="institutionType"
                name="institutionType"
                value={form.institutionType}
                onChange={handleChange}
                className={fieldClass}
                aria-invalid={Boolean(errors.institutionType)}
                required
              >
                <option value="">Select institution type</option>
                <option value="School">School</option>
                <option value="College">College</option>
                <option value="University">University</option>
                <option value="Training Institute">Training institute</option>
                <option value="Other">Other</option>
              </select>

              {errors.institutionType && (
                <p className="mt-1.5 text-xs text-red-600">
                  {errors.institutionType}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="studentStrength" className={labelClass}>
                Approx. student strength
              </label>

              <select
                id="studentStrength"
                name="studentStrength"
                value={form.studentStrength}
                onChange={handleChange}
                className={fieldClass}
              >
                <option value="">Select range (optional)</option>
                <option value="Below 500">Below 500</option>
                <option value="500–1000">500–1,000</option>
                <option value="1000–3000">1,000–3,000</option>
                <option value="3000+">3,000+</option>
              </select>
            </div>

            <Field
              label="City *"
              name="city"
              placeholder="Your city"
              autoComplete="address-level2"
              value={form.city}
              onChange={handleChange}
              error={errors.city}
              required
            />

            <Field
              label="State *"
              name="state"
              placeholder="Your state"
              autoComplete="address-level1"
              value={form.state}
              onChange={handleChange}
              error={errors.state}
              required
            />

            <div className="sm:col-span-2">
              <label htmlFor="requirements" className={labelClass}>
                What kind of lab are you planning? *
              </label>

              <textarea
                id="requirements"
                name="requirements"
                value={form.requirements}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your available space, technologies of interest, budget range or other requirements..."
                className={`${fieldClass} resize-y ${errors.requirements ? "border-red-500" : ""}`}
                aria-invalid={Boolean(errors.requirements)}
                required
              />

              {errors.requirements && (
                <p className="mt-1.5 text-xs text-red-600">
                  {errors.requirements}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contactMethod" className={labelClass}>
                Preferred contact method
              </label>

              <select
                id="contactMethod"
                name="contactMethod"
                value={form.contactMethod}
                onChange={handleChange}
                className={fieldClass}
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>
          </div>

          {status === "validation-error" && (
            <p role="alert" className="mt-5 text-sm text-red-600">
              Please review the highlighted fields and try again.
            </p>
          )}

          {status === "configuration-required" && (
            <div
              role="status"
              className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              Your details have been validated in this form, but the
              enquiry has not been sent. EmailJS needs to be configured
              before submissions can be delivered.
            </div>
          )}

          <button
            type="submit"
            className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8000B8] to-[#B026D3] px-6 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(128,0,184,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(128,0,184,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8000B8] sm:w-auto"
          >
            Submit enquiry
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <p className="mt-4 text-xs leading-5 text-[#898294]">
            Your enquiry will be ready for submission once the email
            service is connected.
          </p>
        </form>
      </div>
    </section>
  );
}

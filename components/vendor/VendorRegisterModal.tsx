"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type VendorRegisterModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  storeName: string;
  city: string;
  state: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  storeName: "",
  city: "",
  state: "",
  country: "",
  addressLine1: "",
  addressLine2: "",
};

export function VendorRegisterModal({ open, onOpenChange, className }: VendorRegisterModalProps) {
  const titleId = useId();
  const descId = useId();

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState<FormState>(initialState);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setForm(initialState);
    }
  }, [open]);

  const canSubmit = useMemo(() => {
    if (status === "submitting") return false;
    return (
      form.fullName.trim().length > 1 &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.phone.replace(/\D/g, "").length >= 10 &&
      form.storeName.trim().length > 1 &&
      form.city.trim().length > 1 &&
      form.state.trim().length > 1 &&
      form.country.trim().length > 1 &&
      form.addressLine1.trim().length > 3
    );
  }, [form, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");

    // No backend endpoint is wired yet; keep this UI-only for now.
    // This can later be replaced with a real API call.
    await new Promise((r) => setTimeout(r, 650));

    setStatus("success");
    setTimeout(() => onOpenChange(false), 900);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={cn("fixed inset-0 z-[100] flex items-center justify-center px-4", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden={false}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-[2px]"
            onClick={() => onOpenChange(false)}
            aria-label="Close dialog"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className={cn(
              "relative z-10 w-full max-w-[760px] overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl",
              "ring-1 ring-black/5",
            )}
            initial={{ y: 14, opacity: 0, scale: 0.985 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative overflow-hidden px-6 pb-6 pt-6 text-white md:px-7"
              style={{
                backgroundImage: "url('/assets/images/fresh-green-textured.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[#0B6F1C]/70" aria-hidden />
              <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-[#00A14E]/25 blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h2 id={titleId} className="text-2xl font-semibold leading-tight">
                    Register your store
                  </h2>
                  <p id={descId} className="mt-1 text-sm text-white/85">
                    Share a few details and our team will reach out shortly.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label="Close"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>
            </div>

            <form onSubmit={onSubmit} className="px-6 pb-6 pt-6 md:px-7 md:pb-7">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field
                  label="Full name"
                  value={form.fullName}
                  onChange={(v) => setForm((s) => ({ ...s, fullName: v }))}
                  placeholder="e.g. Suyash Sharma"
                  autoComplete="name"
                  required
                />
                <Field
                  label="Email"
                  value={form.email}
                  onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                  placeholder="e.g. suyash@email.com"
                  autoComplete="email"
                  type="email"
                  required
                />

                <Field
                  label="Mobile number"
                  value={form.phone}
                  onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
                  placeholder="e.g. +91 98765 43210"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
                <Field
                  label="Store name"
                  value={form.storeName}
                  onChange={(v) => setForm((s) => ({ ...s, storeName: v }))}
                  placeholder="e.g. Yelo Mart"
                  required
                />

                <div className="md:col-span-2">
                  <Field
                    label="Address line 1"
                    value={form.addressLine1}
                    onChange={(v) => setForm((s) => ({ ...s, addressLine1: v }))}
                    placeholder="Street / Area"
                    autoComplete="address-line1"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Field
                    label="Address line 2 (optional)"
                    value={form.addressLine2}
                    onChange={(v) => setForm((s) => ({ ...s, addressLine2: v }))}
                    placeholder="Landmark / Apartment"
                    autoComplete="address-line2"
                  />
                </div>

                <Field
                  label="City"
                  value={form.city}
                  onChange={(v) => setForm((s) => ({ ...s, city: v }))}
                  placeholder="City"
                  autoComplete="address-level2"
                  required
                />
                <Field
                  label="State"
                  value={form.state}
                  onChange={(v) => setForm((s) => ({ ...s, state: v }))}
                  placeholder="State"
                  autoComplete="address-level1"
                  required
                />
                <Field
                  label="Country"
                  value={form.country}
                  onChange={(v) => setForm((s) => ({ ...s, country: v }))}
                  placeholder="Country"
                  autoComplete="country-name"
                  required
                />
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-zinc-500">
                  By submitting, you agree to be contacted about onboarding.
                </p>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={cn(
                      "inline-flex h-11 items-center justify-center rounded-full bg-[#00A14E] px-6 text-sm font-semibold text-white shadow-sm",
                      "transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:bg-[#008f44] hover:shadow-md active:translate-y-0",
                      "disabled:pointer-events-none disabled:opacity-60",
                    )}
                  >
                    {status === "success"
                      ? "Submitted!"
                      : status === "submitting"
                        ? "Submitting…"
                        : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
  autoComplete,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  autoComplete?: string;
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-zinc-800">
        {label}
        {required ? <span className="text-[#00A14E]"> *</span> : null}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        className={cn(
          "mt-2 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 shadow-sm",
          "outline-none transition focus:border-[#00A14E]/50 focus:ring-2 focus:ring-[#00A14E]/15",
          "placeholder:text-zinc-400",
        )}
      />
    </div>
  );
}


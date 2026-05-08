"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { VendorRegisterModal } from "@/components/vendor/VendorRegisterModal";
import { cn } from "@/lib/utils";

export function VendorRegisterCTA({
  className,
  label = "Register Your Store Today",
  chevron = true,
}: {
  className?: string;
  label?: string;
  chevron?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
        {chevron ? <ChevronRight className="size-5 shrink-0" aria-hidden /> : null}
      </button>

      <VendorRegisterModal open={open} onOpenChange={setOpen} />
    </>
  );
}

export function VendorRegisterCTAButton({
  className,
  label = "Register Your Store Today",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <VendorRegisterCTA
      label={label}
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-full bg-[#00A14E] px-6 py-3.5 text-sm font-semibold text-white shadow-sm",
        "transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:bg-[#008f44] hover:shadow-md active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A14E]/25",
        className,
      )}
    />
  );
}


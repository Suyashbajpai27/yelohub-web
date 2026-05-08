"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { DeliveryPartnerJoinModal } from "@/components/delivery/DeliveryPartnerJoinModal";

export function DeliveryPartnerJoinCTA({
  className,
  label = "Join as Delivery Partner",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
        <ChevronRight className="size-5 shrink-0" aria-hidden />
      </button>
      <DeliveryPartnerJoinModal open={open} onOpenChange={setOpen} />
    </>
  );
}


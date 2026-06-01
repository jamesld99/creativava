"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export function FAQ({ items, limit }: { items: FaqItem[]; limit?: number }) {
  const displayed = limit ? items.slice(0, limit) : items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-rose-100 overflow-hidden rounded-[1.75rem] border-2 border-rose-200 bg-cream-50 shadow-xl shadow-rose-200/40">
      {displayed.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className={`px-6 py-1 transition-colors ${isOpen ? "bg-gradient-to-r from-cream-100 to-rose-50" : ""}`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-bold text-charcoal transition-colors hover:text-rose-600"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-all ${
                    isOpen
                      ? "rotate-45 bg-gradient-to-br from-rose-500 to-rose-400 text-white"
                      : "bg-rose-100 text-rose-700"
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 text-sm leading-relaxed text-charcoal/75"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

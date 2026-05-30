"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export function FAQ({ items, limit }: { items: FaqItem[]; limit?: number }) {
  const displayed = limit ? items.slice(0, limit) : items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-lilac-100 overflow-hidden rounded-[1.75rem] border-2 border-lilac-200 bg-white shadow-xl shadow-lilac-200/40">
      {displayed.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className={`px-6 py-1 transition-colors ${isOpen ? "bg-gradient-to-r from-lilac-50 to-blush-50" : ""}`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold text-violet-deep transition-colors hover:text-lilac-700"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-all ${
                    isOpen
                      ? "rotate-45 bg-gradient-to-br from-lilac-500 to-blush-400 text-white"
                      : "bg-lilac-100 text-lilac-700"
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
              className="pb-5 text-sm leading-relaxed text-slate-600"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

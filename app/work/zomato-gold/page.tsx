"use client";

import { useState } from "react";
import Link from "next/link";

export default function ZomatoGoldCaseStudy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="max-w-3xl mx-auto pb-20 space-y-10">

      {/* Breadcrumb */}
      <div>
        <Link
          href="/work"
          className="text-sm text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition"
        >
          ← Work
        </Link>
      </div>

      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
          Zomato Gold — Designing a Premium Subscription
        </h1>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Built Zomato’s first dine-out membership product, scaling to 200K+ 
          members in 8 months and establishing subscription-led growth.
        </p>

        {/* Meta */}
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Company
            </dt>
            <dd className="mt-2 text-neutral-900 dark:text-neutral-100">
              Zomato
            </dd>
          </div>

          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Role
            </dt>
            <dd className="mt-2 text-neutral-900 dark:text-neutral-100">
              Product Designer
            </dd>
          </div>

          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Timeline
            </dt>
            <dd className="mt-2 text-neutral-900 dark:text-neutral-100">
              2017 – 2018
            </dd>
          </div>
        </dl>
      </section>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Overview
        </h2>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Zomato wanted to capture more of the dine-out market by introducing a
          premium membership program that created value for users, restaurants,
          and the business.
        </p>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          The challenge: design a subscription that felt exclusive and trustworthy,
          while integrating seamlessly into an already established ecosystem.
        </p>
      </section>

      {/* Impact Card — White Card Style */}
      <section>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-6 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Impact
          </h3>

          <ul className="space-y-2 text-sm md:text-base text-neutral-700 dark:text-neutral-300 list-disc pl-5">
            <li>200,000+ memberships in first 8 months</li>
            <li>40% of sales driven by referrals</li>
            <li>3x increase in traffic for Gold restaurants</li>
            <li>83% members discovered new restaurants</li>
          </ul>
        </div>
      </section>

      {/* Problem */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Problem
        </h2>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Zomato’s revenue model was largely advertising-driven. We needed to
          unlock recurring revenue in dine-out without hurting restaurant
          economics.
        </p>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          The value proposition — Buy 1 Get 1 dishes or Buy 2 Get 2 drinks —
          sounded “too good to be true.” Building trust was critical.
        </p>
      </section>

      {/* Product Principles — White Card */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Product Principles
        </h2>

        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-6 space-y-3">
          <ul className="space-y-2 text-sm md:text-base text-neutral-700 dark:text-neutral-300 list-disc pl-5">
            <li>Create a premium & exclusive experience</li>
            <li>Build trust through clear communication</li>
            <li>Make Gold restaurants easy to discover</li>
            <li>Reduce friction during redemption</li>
            <li>Integrate seamlessly into the Zomato ecosystem</li>
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          My Role & Approach
        </h2>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          I led end-to-end experience design — from defining principles and mapping
          journeys to designing the purchase and redemption flows.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>Benchmarked global subscription models</li>
          <li>Ran internal mock sales conversations</li>
          <li>Mapped purchase & redemption journeys</li>
          <li>Designed branding and UI system</li>
          <li>Crafted copy to reduce anxiety</li>
        </ul>
      </section>

      {/* Visual Section with Modal */}
      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Core Flow
        </h2>

        <div
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden cursor-zoom-in"
          onClick={() => setIsOpen(true)}
        >
          <img
            src="/images/zomato-gold-flow.png"
            alt="Zomato Gold flow"
            className="w-full h-auto block"
          />
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/zomato-gold-flow.png"
              alt="Expanded flow"
              className="max-w-[95%] max-h-[90%] rounded-lg shadow-2xl"
            />
          </div>
        )}
      </section>

      {/* Reflection */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Key Learnings
        </h2>

        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-6 space-y-3">
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Subscriptions are trust products before they are feature products.
          </p>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Communication design directly impacts revenue.
          </p>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Reducing anxiety increases conversion.
          </p>
          <p className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
            Premium positioning is emotional, not just visual.
          </p>
        </div>
      </section>

    </article>
  );
}
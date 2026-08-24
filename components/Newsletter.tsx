"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="bg-sage-dark text-cream py-16 sm:py-20">
      <div className="container-px max-w-xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl mb-3">
          Register for The Newsletter
        </h2>
        <p className="text-cream/75 mb-8 leading-relaxed">
          Sign up for first access to new pieces, seasonal collections, and
          studio news from Mrittika.
        </p>

        {submitted ? (
          <p className="text-cream">
            Thank you — you&rsquo;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-full bg-cream text-ink placeholder:text-ink-soft/50 px-5 py-3 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 rounded-full bg-sage hover:bg-sage-dark transition-colors text-cream px-7 py-3 text-sm font-medium tracking-wide"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

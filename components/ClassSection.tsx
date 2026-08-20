import { MugIcon, PotIcon, WheelIcon } from "./CategoryIcons";

const iconBg = [
  "bg-terracotta text-cream",
  "bg-sage text-cream",
  "bg-ink text-cream",
];

export default function ClassSection() {
  return (
    <section id="class" className="pb-16 sm:pb-20">
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-sage/10 rounded-2xl px-6 py-12 sm:px-12 sm:py-14">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] text-ink">
            Get to know pottery,
            <br />
            book a class now!
          </h2>

          <div>
            <div className="flex items-center gap-3 mb-5">
              {[MugIcon, PotIcon, WheelIcon].map((Icon, i) => (
                <span
                  key={i}
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg[i]}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              ))}
            </div>
            <p className="text-ink-soft leading-relaxed mb-7 max-w-md">
              Are you interested in pottery and want to learn how to create
              unique pieces from clay? Then my pottery course is the place
              for you. Make your own masterpiece according to your wishes and
              ideas, guided every step of the way.
            </p>
            <a
              href="#class"
              className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide"
            >
              Book A Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

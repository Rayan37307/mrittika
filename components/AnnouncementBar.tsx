export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-cream text-xs sm:text-sm">
      <div className="container-px py-2.5 flex items-center justify-center gap-2 text-center">
        <span aria-hidden="true">🎁</span>
        <p>
          Free gift with every order over{" "}
          <span className="text-terracotta-light">$150</span> — handmade,
          just for you.
        </p>
      </div>
    </div>
  );
}

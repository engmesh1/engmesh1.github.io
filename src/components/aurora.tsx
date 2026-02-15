export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl animate-floaty" />
      <div className="absolute -bottom-40 left-10 h-[520px] w-[520px] rounded-full bg-accent/15 blur-3xl animate-floaty" />
      <div className="absolute top-24 right-10 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl animate-floaty" />
    </div>
  );
}

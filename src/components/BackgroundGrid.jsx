export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-signal/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber/5 blur-[140px] rounded-full" />
    </div>
  )
}

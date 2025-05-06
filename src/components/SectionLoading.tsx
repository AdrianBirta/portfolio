export default function SectionLoading({ name }: { name: string }) {
  return (
    <div className="flex justify-center items-center min-h-[200px] animate-pulse text-muted-foreground text-sm">
      <div className="flex flex-col items-center">
        <div className="spinner-border snipper-border-section animate-spin mb-2" role="status">
          <span className="sr-only text-highlight">Loading...</span>
        </div>
        <span className="text-highlight">Loading {name}...</span>
      </div>
    </div>
  );
}
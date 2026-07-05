import { ImageIcon } from "lucide-react";

export function PlaceholderVisual({ label }: { label: string }) {
  return (
    <div className="flex aspect-video min-h-56 items-center justify-center rounded-lg border border-dashed border-white/20 bg-grid bg-[length:24px_24px]">
      <div className="rounded-md border border-white/10 bg-background/80 px-4 py-3 text-center">
        <ImageIcon className="mx-auto mb-2 h-5 w-5 text-secondary" />
        <p className="text-sm font-medium text-primary">{label}</p>
        <p className="text-xs text-muted">Replace with project screenshot</p>
      </div>
    </div>
  );
}

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-4">
      <Loader2 className="w-10 h-10 text-accent animate-spin" />
      <p className="text-slate-500 font-medium animate-pulse">Loading...</p>
    </div>
  );
}

export default function LoadingScreen() {
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-80 animate-fadeIn">
        <div className="w-10 h-10 border-4 border-white/30 border-t-rose-400 rounded-full animate-spin"></div>
        <p className="text-sm tracking-wide text-gray-300">Generating your ticket...</p>
      </div>
    );
  }
  
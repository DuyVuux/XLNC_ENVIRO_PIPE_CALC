import Link from "next/link";

export default function ModuleTopBar() {
  return (
    <div className="w-full bg-blue-900 dark:bg-blue-950 h-16 flex items-center px-6 lg:px-10">
      <Link href="/" className="text-white text-2xl font-bold hover:opacity-80 transition-opacity">
        XLNC
      </Link>
    </div>
  );
}



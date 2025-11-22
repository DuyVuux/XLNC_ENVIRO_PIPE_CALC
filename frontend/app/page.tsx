import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          XLNC Automated Water Treatment Calculation System
          </h1>
        <p className="text-center text-lg mb-8">
          Hệ thống tính toán tự động xử lý nước
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
          <Link
            href="/modules/pipe-sizing"
            className="border border-gray-300 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold mb-2">Module 1</h3>
            <p className="text-sm">Pipeline Hydraulics</p>
            <p className="text-xs text-green-600 mt-2">✓ Hoàn thành</p>
          </Link>
          <Link
            href="/modules/spray-aeration"
            className="border border-gray-300 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold mb-2">Module 2</h3>
            <p className="text-sm">Rainfall Aeration</p>
            <p className="text-xs text-green-600 mt-2">✓ Hoàn thành</p>
          </Link>
          <Link
            href="/modules/mixing-reaction"
            className="border border-gray-300 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold mb-2">Module 3</h3>
            <p className="text-sm">Rapid Mixing</p>
            <p className="text-xs text-green-600 mt-2">✓ Hoàn thành</p>
          </Link>
          <Link
            href="/modules/settling-tank"
            className="border border-gray-300 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold mb-2">Module 4</h3>
            <p className="text-sm">Sedimentation</p>
            <p className="text-xs text-green-600 mt-2">✓ Hoàn thành</p>
          </Link>
          <Link
            href="/modules/filtration"
            className="border border-gray-300 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold mb-2">Module 5</h3>
            <p className="text-sm">Filtration</p>
            <p className="text-xs text-green-600 mt-2">✓ Hoàn thành</p>
          </Link>
        </div>
        </div>
      </main>
  );
}

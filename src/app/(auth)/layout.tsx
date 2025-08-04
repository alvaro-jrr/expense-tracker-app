export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-svh">
      <div className="w-full">{children}</div>

      <div className="bg-gray-50 hidden lg:block"></div>
    </div>
  );
}

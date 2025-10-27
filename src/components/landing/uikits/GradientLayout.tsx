export default function GradientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
      {children}
    </div>
  );
}

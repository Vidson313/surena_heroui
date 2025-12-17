export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="ds-section flex flex-col gap-10">{children}</section>
  );
}

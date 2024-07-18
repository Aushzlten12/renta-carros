import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 h-full items-center justify-center">
      <div className="flex items-center justify-center">{children}</div>
      <div className="hidden lg:flex lg:bg-slate-100 h-full justify-center items-center lg:flex-col">
        <Image
          src="/logo.svg"
          alt="Logo RentCars"
          width="80"
          height="80"
          priority
        />
        <h1 className="text-xl font-bold">RentCars</h1>
      </div>
    </div>
  );
}

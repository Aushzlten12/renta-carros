import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function OrderConfirmationPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">Thank you so much for trusting us!</h1>
          <p>In a few minutes, you will receive all the information by email</p>
          <p>You can view all your reservations in the Client Area.</p>
          <Link href="/">
            <Button>View the cars again</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

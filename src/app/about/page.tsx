import { Suspense } from "react";
import About from "@/components/About";

export default function AboutRoute() {
  return (
    <Suspense>
      <main>
        <About />
      </main>
    </Suspense>
  );
}

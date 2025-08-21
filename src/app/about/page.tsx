import { Suspense } from "react";
import About from "@/components/About"
import Header from "@/components/Header"

export default function AboutRoute(){

    return(
        <Suspense>
            <div>
                <Header/>
                <main>
                    <About/>
                </main>
            </div>
        </Suspense>
    )
}

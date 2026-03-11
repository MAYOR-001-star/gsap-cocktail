import React from 'react'
import {ScrollTrigger, SplitText} from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
    return (
        <div>
            <h1 className="p-[2.2875rem] text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    )
}
export default App

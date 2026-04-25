import "./Header.css"
import { useState, useEffect } from "react"

function Header() {

    // LEFT typing
    const words = ["Websites", "Landing Pages", "Portfolios", "Startup Websites"]
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[wordIndex]
        let speed = isDeleting ? 50 : 100

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, index + 1))
                setIndex(index + 1)

                if (index + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1000)
                }
            } else {
                setText(currentWord.substring(0, index - 1))
                setIndex(index - 1)

                if (index - 1 === 0) {
                    setIsDeleting(false)
                    setWordIndex((wordIndex + 1) % words.length)
                }
            }
        }, speed)

        return () => clearTimeout(timeout)
    }, [index, isDeleting, wordIndex])


    // RIGHT code typing
    const codeString = `const sites = useState([]);

useEffect(() => {
  buildAwesomeWebsite();
}, []);

function buildAwesomeWebsite() {
  const design = "modern & clean";
  const speed = "lightning fast";
  const quality = "premium";
  return { design, speed, quality };
}

const services = [
  "Landing Pages",
  "Startup Websites",
  "Restaurant Sites",
  "Portfolio Sites"
];`

    const [codeText, setCodeText] = useState("")
    const [codeIndex, setCodeIndex] = useState(0)

    useEffect(() => {
        if (codeIndex < codeString.length) {
            const timeout = setTimeout(() => {
                setCodeText(prev => prev + codeString[codeIndex])
                setCodeIndex(codeIndex + 1)
            }, 15)

            return () => clearTimeout(timeout)
        }
    }, [codeIndex])


    return (
        <header>
            <div className="header-container">

                {/* LEFT */}
                <div className="left-head">
                    <div className="ani-icon">
                        ⚡Fast • Professional • Modern
                    </div><br />

                    <h1 className="h1-des">We Build Fast &</h1>
                    <h1 className="h1-desc">Professional</h1><br />

                    <div className="chiqizContainer">
                        <div className="head-chiziq"></div>
                        <b className="w-b">
                            {text}
                            <span className="cursor">|</span>
                        </b>
                    </div><br />

                    <div className="btnd-head">
                        <button className="btn-head1">View Our Work</button>
                        <button className="btn-head2">Get a Quote</button>
                    </div><br /><br /><br /><br />

                    <div className="countes">
                        <div className="proj1">
                            <h2>10+</h2>
                            <p>Projects</p>
                        </div>
                        <div className="proj1">
                            <h2>100%</h2>
                            <p>Quality</p>
                        </div>
                        <div className="proj1">
                            <h2>24/7</h2>
                            <p>Support</p>
                        </div>
                    </div>
                </div>


                {/* RIGHT */}
                <div className="right-head">
                    <pre className="code-box">
                        <code>
                            {codeText}
                            <span className="cursor">|</span>
                        </code>
                    </pre>
                </div>

            </div>
        </header>
    )
}

export default Header
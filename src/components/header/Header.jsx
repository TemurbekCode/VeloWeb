import "./Header.css"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

function Header() {

    const { t, i18n } = useTranslation()

    // LEFT typing
    const words =
        i18n.language === "uz"
            ? ["Websaytlar", "Landing Pagelar", "Portfoliolar", "Startup Saytlar"]
            : ["Websites", "Landing Pages", "Portfolios", "Startup Websites"]

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
    }, [index, isDeleting, wordIndex, words])

    // Til almashganda reset
    useEffect(() => {
        setText("")
        setIndex(0)
        setWordIndex(0)
        setIsDeleting(false)
    }, [i18n.language])


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
                        ⚡{t("fast")} • {t("professional")} • {t("modern")}
                    </div><br />

                    <h1 className="h1-des">{t("title1")}</h1>
                    <h1 className="h1-desc">{t("title2")}</h1><br />

                    <div className="chiqizContainer">
                        <div className="head-chiziq"></div>
                        <b className="w-b">
                            {text}
                            <span className="cursor">|</span>
                        </b>
                    </div><br />

                    <div className="btnd-head">
                        <a href="#portfolio">
                            <button className="btn-head1">
                                {t("viewWork")}
                            </button>
                        </a>

                        <a href="#contact">
                            <button className="btn-head2">
                                {t("quote")}
                            </button>
                        </a>
                    </div><br /><br /><br /><br />

                    <div className="countes">
                        <div className="proj1">
                            <h2>10+</h2>
                            <p>{t("projects")}</p>
                        </div>

                        <div className="proj1">
                            <h2>100%</h2>
                            <p>{t("quality")}</p>
                        </div>

                        <div className="proj1">
                            <h2>24/7</h2>
                            <p>{t("support")}</p>
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
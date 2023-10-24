import { useEffect } from "react"
import product1 from "../../../assets/product1.webp"
import product2 from "../../../assets/product2.webp"
import product3 from "../../../assets/product3.webp"
import "../services/services.css"
import "./products.css"

export default function Prodcuts() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show');
            }
        })
    })

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden,.hidden2');
        hiddenElements.forEach(el => observer.observe(el));
    }, [])

    return (
        <div className="service-container">

            <div className="styling hidden">
                <img src={product1} />
                <div>
                    <div>
                        <h5 style={{ fontSize: "30px" }}>Olaplex</h5>
                        <p><span style={{ fontWeight: "700" }}>The brand:</span> First launched in 2014, Olaplex started by offering a game-changing reparative in-salon treatment that colorists quickly went ga-ga for. Credit the brand's proprietary technology that focused on repairing the protein bonds that are broken when hair undergoes chemical processes. Fast forward, and there's now a whole line of at-home products that utilize the same type of bond-building technology—which in turn inspired tons of other brands to follow suit and focus on the same type of repair.</p>
                        <p><span style={{ fontWeight: "700" }}>The hero product:</span> There's a good reason why the No.3 Hair Perfector is the brand's best-seller—it's basically the at-home version of the OG in-salon treatment that started it all. Great for all hair types and textures, it can be used weekly as a preventative or up to three times per week to help undo some pretty serious damage. All you have to do is apply to damp hair and leave it on for 10 minutes before shampooing and conditioning as normal.</p>
                    </div>
                </div>
            </div>

            <div className="styling hidden2 product2">
                <img src={product2} />
                <div>
                    <div>
                        <h5 style={{ fontSize: "30px" }}>Odele</h5>
                        <p><span style={{ fontWeight: "700" }}>The brand:</span>Arguably our favorite new brand to launch in recent years, we can't get enough of anything and everything Odele. The premise is simple: A line of totally clean, super affordable, genderless, and above all, effective formulas. The brand checks every one of these boxes, and the packaging is beyond chic to boot.</p>
                        <p><span style={{ fontWeight: "700" }}>The hero product:</span> There's no shortage of air-dry products on the market, but in our humble opinion, none work as well as the Air Dry Styler. Just a tiny dollop of the gel-like serum adds shine and smoothness, and generally leaves your hair looking better, even if you don't do another thing to it. Bonus points for the fresh and clean fragrance, which is completely naturally derived.</p>
                    </div>
                </div>
            </div>

            <div className="styling hidden">
                <img src={product3} />
                <div>
                    <div>
                        <h5 style={{ fontSize: "30px" }}>Odele</h5>
                        <p><span style={{ fontWeight: "700" }}>The brand:</span>The brainchild of Tracee Ellis Ross, Pattern is all about meeting the needs of those with curly, coily, and tight textures, offering a curated collection of products to do exactly that. There's everything from cleansing products to stylers and treatments, plus unique tools and accessories specially developed to work for this subset of hair types.</p>
                        <p><span style={{ fontWeight: "700" }}>The hero product:</span>Unlike any hair product we've ever seen, the Scalp Serum is the choice for all types of styles, from locs to curls. The targeted applicator makes it easy to deliver the formula directly onto the scalp, where it helps hydrate and refresh the skin, thanks to a combo of invigorating peppermint and rosemary oils.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
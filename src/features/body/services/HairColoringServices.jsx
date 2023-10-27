import coloring from "../../../assets/coloring.jpg"

export default function HairColoringServices() {
    return (
        <div className="styling">
            <img src={coloring} />
            <div>
                <div>
                    <h5>Single process</h5>
                    <p className="services-details">A single process hair color produces a consistent, uniform hue throughout your hair. Depending on your hair type, color can be either permanent or semi-permanent.</p>
                </div>
                <div>
                    <h5>Double process</h5>
                    <p className="services-details">A double process color is ideal for people with dark hair seeking a lighter hair color. The process begins with a professional bleaching, followed by color application. Double process alters the hair color permanently.</p>
                </div>
                <div>
                    <h5>Glossing</h5>
                    <p className="services-details">A shine treatment livens up dull hair and tones down extreme hues that result from coloring. Voila! A rich, more natural look.</p>
                </div>
                <div>
                    <h5>Full foil</h5>
                    <p className="services-details">A full foil highlights strands of hair beginning at the hairline and extending all the way down to the nape of the neck. This is a great look if you wear your hair up, as the highlights are distributed throughout.</p>
                </div>
                <div>
                    <h5>After-color blow-dry</h5>
                    <p className="services-details">Expert after-color blow-dry styling is available for an extra charge.

                    </p>
                </div>
            </div>
        </div>
    )
}
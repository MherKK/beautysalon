import styling from "../../../assets/styling.jpg"
import treatments from "../../../assets/treatment.jpg"
import coloring from "../../../assets/coloring.jpg"
import makeUp from "../../../assets/makeup.jpg"
import "./services.css"

export default function Services() {
    return (
        <div className="service-container">
            <h2>At Haze, we are dedicated to helping you achieve your best look. Share your desires with us, and we will make them a reality.</h2>
            <div className="styling">

                <img src={styling} />

                <div>
                    <div>
                        <h5>Cut and Blowout <span style={{ fontSize: '12px' }}>4000 <span style={{ fontSize: '8px' }}> AMD</span></span></h5>
                        <p className="services-details">
                            Long, short, asymmetrical, or precision-straight, we love giving clients cuts that accentuate who they are and allow them to refine their personal style. All our haircuts come with a complimentary blowout and style so you will always leave the salon looking perfectly coiffed.
                        </p>
                    </div>
                    <div>
                        <h5>Blowouts and Sets <span style={{ fontSize: '12px' }}>15000 <span style={{ fontSize: '8px' }}> AMD</span></span></h5>
                        <p className="services-details">From special occasion blowouts to long-lasting sets, we have the beautification skills to make your hair gorgeous for any event, no matter how big or small. From finger-waves to pin-straight blowouts, we have you covered.</p>
                    </div>
                    <div>
                        <h5>Texture Changing Perms</h5>
                        <p className="services-details">Ideal for medium-short to long hair, a permanent wave adds body, texture and bounce to straight locks.</p>
                    </div>
                    <div>
                        <h5>Straightening</h5>
                        <p className="services-details">A straightening transforms frizzy, difficult-to-manage or curly hair into sleek, straight and silky-soft locks that are virtually maintenance-free.</p>
                    </div>
                    <div>
                        <h5>Updo</h5>
                        <p className="services-details">Updos are perfect for occasions when you need a little extra glamour. Whether you’re attending a wedding or a rock concert, we will curl, pin, wrap, and twist your hair into a look that will make you feel like the belle of any ball.</p>
                    </div>
                </div>
            </div>

            <div className="styling">
                <img src={treatments} />
                <div>
                    <div>
                        <h5>Conditioning Treatments</h5>
                        <p className="services-details">Rikoko is a collection of professional treatment-based products formulated with exotic ingredients that naturally lock in color, reduce fading, accelerate repair and promote healthy, strong hair. Rikoko Lock Shampoo and Conditioner are accompanied by Reset and Seal, a two-phase, ten-minute treatment that also relieves itchy scalps post-color service.
                            It is infused with coconut oil, a blend of other natural oils and strengthening lemongrass for protection, hydration and nourishment suitable for all hair textures. Plus, Kokobalm is paraben-, silicone- and colorant-free.</p>
                    </div>
                    <div>
                        <h5>Texture Changing Perms</h5>
                        <p className="services-details">From frustrated to fabulous, what if you could kiss her frizzy hair good-bye and win back control? The Kerasilk Keratin Treatment Service provides long-lasting transformation into perfectly smooth and soft hair for up to 3–5 months. The secret: high-performing KeraShapeTechnology. Simply fabulous!</p>
                    </div>
                    <div>
                        <h5>Conditioning Treatments</h5>
                        <p className="services-details">Our three-step process includes a patented active ingredient that works on a molecular level to seek out broken bonds in the hair that are caused by chemical, thermal, and mechanical damage. You can use Olaplex to restore compromised hair If you’ve over-highlighted your hair over the years, Olaplex allows you to rebuild the strength, structure and integrity of your hair; a ‘reset’ for your locks, if you will.</p>
                    </div>
                </div>
            </div>

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

            <div className="styling">
                <img src={makeUp} />
                <div>
                    <div>
                        <h5>Makeup</h5>
                        <p className="services-details">A date. Cocktails with the girls. An important meeting. No matter what you’ve got planned, our makeup specialists can help you attain the show–stopping glamor you deserve. We know the latest trends and hottest colors and we like to share tips and tricks for emphasizing your natural attributes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
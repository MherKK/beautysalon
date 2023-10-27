import treatments from "../../../assets/treatment.jpg"

export default function TreatmentServices() {
    return (
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
    )
}
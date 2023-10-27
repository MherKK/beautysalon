import styling from "../../../assets/styling.jpg"

export default function HairStylingServices() {
    return (
        <div className="styling">

            <img src={styling} />

            <div>
                <div>
                    <h5>Cut and Blowout <span style={{ fontSize: '12px', border: '1px solid black', padding: '3px' }}>4000 <span style={{ fontSize: '8px' }}> AMD</span></span></h5>
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
    )
}
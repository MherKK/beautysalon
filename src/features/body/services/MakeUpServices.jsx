import makeUp from "../../../assets/makeup.jpg"

export default function MakeUpServices() {
    return (
        <div className="styling">
            <img src={makeUp} />
            <div>
                <div>
                    <h5>Makeup</h5>
                    <p className="services-details">A date. Cocktails with the girls. An important meeting. No matter what you’ve got planned, our makeup specialists can help you attain the show–stopping glamor you deserve. We know the latest trends and hottest colors and we like to share tips and tricks for emphasizing your natural attributes.</p>
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import "./contact.css"

export default function Contact() {
    return (
        <form className="contact-container">
            <h2>Our Conctact Options</h2>
            <div>

                <div className="contact">
                    <h3>Through Email:</h3>
                    <div>
                        <div>
                            <label >Full Name:</label>
                            <input placeholder="Full Name" type="text" />
                        </div>

                        <div>
                            <label>Email Address:</label>
                            <input placeholder="email@gmail.com" type="email" />
                        </div>
                    </div>

                    <div>
                        <label >Subject:</label>
                        <input placeholder="Subject" type="text" />
                    </div>

                    <div>
                        <label >Message:</label>
                        <textarea placeholder="How Can We Help You?" />
                    </div>
                </div>

                <div className="other-contacts">
                    <h3>Other Options:</h3>
                    <a href="tel:+37495158155">(+374) 042 142-123</a>
                    <a href="mailto:salon@gmail.com">salon@gmail.com</a>
                    <Link to="https://www.instagram.com">Or click here to book online</Link>

                    <h3>Check us on google map</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.889978481062!2d44.511583812210446!3d40.18926187135812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdb1db458939%3A0xcf678d9195d7b83d!2shaze%20creative!5e0!3m2!1sen!2sam!4v1697745608335!5m2!1sen!2sam"
                        width='300px'
                        height='180px'
                    ></iframe>
                </div>

                <div>

                </div>
            </div>
        </form>
    )
}
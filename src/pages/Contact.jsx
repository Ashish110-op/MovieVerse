import { useEffect, useState } from "react"
import"./contact.css"
export const Contact = () =>{
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const[submiteForm, setSubmitForm]=useState(false)
    const handleToChange= (e)=>{
        const{name, value}=e.target;
      setFormData((prev)=>({
        ...prev, [name]:value,
      }))
    }
    const handkeToSubmit = async (e)=>{
        e.preventDefault();
        try {
            console.log("Form data", formData);
            
        } catch (error) {
            console.log("Error", error);
            setSubmitForm(true);
        }
    };
    useEffect(()=>{
        if(submiteForm){
            const timer=setTimeout(()=>{
                setSubmitForm(false);
            }, 3000);
            return ()=>clearTimeout(timer)
        }
    },[submiteForm])
    return(
    <>
    <section className="contact-section">
        <div className="contact-heading">
            <span>GET IN TOUCH</span>
            <h1>Let's talk about <strong>movies</strong></h1>
            <p>Have a suggestion, feedback or just want to say hello?
                We'd love to hear from you.
            </p>
        </div>
        <div className="contact-container">
            <div className="contact-info">
                <h2>We'd love to hear from you.</h2>
                <p>Your feedback helps us make Movie Verse better.
                    Tell us what you think about the website.
                </p>
                <div className="contact-item">
                    <span>📩</span>
                    <div>
                        <h4>Email</h4>
                        <p>support@movieverse.com</p>
                    </div>
                </div>
                <div className="contact-item">
                    <span>💬</span>
                    <div>
                        <h4>Feedback</h4>
                        <p>Share your movie experience with us.</p>
                    </div>
                </div>
                <div className="contact-item">
                    <span>🎬</span>
                    <div>
                        <h4>Movie Suggestion</h4>
                        <p>Suggest a movie you'd like to see.</p>
                    </div>
                </div>
            </div>
            <div className="contact-form-box">
                {submiteForm &&(
                    <div className="success-message">
                        ✅ Thanks! Your feedback has been submitted.
                    </div>
                )}
                <form action="" onSubmit={handkeToSubmit}>
                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleToChange} required/>
                        </div>
                         <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleToChange} required/>
                        </div>
                    </div>
                     <div className="input-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" placeholder="What is this about?"
                            value={formData.subject}
                            onChange={handleToChange} required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="feedback">Your Feedback</label>
                            <textarea name="message" placeholder="Write your message..."
                            rows="6" value={formData.message}
                            onChange={handleToChange} required></textarea>
                        </div>
                        <button type="submit" className="contact-btn">Send Message🚀</button>
                </form>
            </div>
        </div>
    </section>
    </>

    );
}
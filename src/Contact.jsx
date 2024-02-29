export function Contact () {
    return (
        <div className="tags">
            <h2>CONTACT</h2> 
            <section id="contact">
                <form className="form">
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" id="name" name="name" placeholder="Enter your name: "/><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="text" id="email" name="email" placeholder="Enter your email: "/><br/>
                    <label htmlFor="comments">Comments: </label><br/>
                    <textarea name="comments" id="comments" placeholder="Comment here..." cols="30" rows="10"></textarea>
                    <button className="button button1">SUBMIT</button>
                </form>
            </section>
        </div>
    )
}
export default function ContactForm () {
    return (
        <div className="sm:w-1/2 w-full h-full sm:h-full flex-col justify-center">
            <div className="w-auto h-4/5 mt-12 m-8 ">
                <form className="flex flex-col justify-center items-center">
                    <label className="text-themeWhite text-2xl font-extralight">Name</label>
                    <input className="w-3/4 h-10 m-2 rounded-md p-2" type="text" placeholder="Name" />
                    <label className="text-themeWhite text-2xl font-extralight">Email</label>
                    <input className="w-3/4 h-10 m-2 rounded-md p-2 " type="text" placeholder="Email" />
                    <label className="text-themeWhite text-2xl font-extralight">Message</label>
                    <textarea className="w-3/4 h-40 m-2 rounded-md p-2" type="text" placeholder="Message" />
                    <button className="w-3/4 h-10 m-2 rounded-md border-themePurple border hover:border-themeWhite text-themeWhite font-extralight">Submit</button>
                </form>
            </div>
        </div>
    )
}
import "../../../css/main.css"

interface ContactProps{
  cursorVariant : React.Dispatch<React.SetStateAction<string>>
}
export default function Contact({cursorVariant}:ContactProps) {
  return (
    <>
      <div id="Contact"></div>
      <section id="contactsec" className="w-[1600px] h-[80vh] bg-[#131011] px-8 py-4">

        <div className="flex flex-col items-center gap-1 mb-[150px]">
          <h1 className="text-[#ff3635] text-[70px] uppercase font-bold leading-none">Let's Connect</h1>
          <p className="text-[#6f6f6f] m-0 leading-none">Send us an email for any query.</p>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 grid-cols-[1fr_1.2fr] gap-24">
          {/* LEFT — spec sheet */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-[#F2EFEA] text-[13vw] md:text-[6vw] leading-[0.9] uppercase tracking-tight">
                Talk to
                <br />
                the shop.
              </h2>
            </div>

            <dl className="mt-16 md:mt-0 space-y-6 font-mono text-sm">
              <div className="flex justify-between border-t border-[#2A2724] pt-3">
                <dt className="text-[#8C8680] uppercase tracking-widest">Email</dt>
                <dd className="text-[#F2EFEA]">trendyhelmetszone@gmail.com</dd>
              </div>
              <div className="flex justify-between border-t border-[#2A2724] pt-3">
                <dt className="text-[#8C8680] uppercase tracking-widest">Shop</dt>
                <dd className="text-[#F2EFEA]">Kathmandu, NP</dd>
              </div>
              <div className="flex justify-between border-t border-[#2A2724] pt-3 pb-3 border-b">
                <dt className="text-[#8C8680] uppercase tracking-widest">Hours</dt>
                <dd className="text-[#F2EFEA]">Mon–Fri, 10–8</dd>
              </div>
            </dl>
          </div>

          {/* RIGHT — form */}
          <form className="contact-form flex flex-col gap-10 self-center">
            <Field label="Name" name="name" type="text" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <Field label="Message" name="message" type="textarea" placeholder="What are you building?" />

            <button
              onMouseEnter={()=>cursorVariant("button")}
              onMouseLeave={()=>cursorVariant("default")}
              type="submit"
              className="cursor-pointer w-[50%] bg-[#cc3635] hover:bg-[#b02e2d] text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.01] shadow-lg shadow-[#cc3635]/20"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string
  name: string
  type: string
  placeholder: string
}) {
  return (
    <label className="group flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8C8680] group-focus-within:text-[#FF4A1C] transition-colors">
        {label}
      </span>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={3}
          className="bg-transparent border-b border-[#2A2724] focus:border-[#FF4A1C] outline-none text-[#F2EFEA] font-sans text-lg py-2 resize-none transition-colors placeholder:text-[#4A4642]"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="bg-transparent border-b border-[#2A2724] focus:border-[#FF4A1C] outline-none text-[#F2EFEA] font-sans text-lg py-2 transition-colors placeholder:text-[#4A4642]"
        />
      )}
    </label>
  )
}
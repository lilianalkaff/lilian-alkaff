import FadeInView from "@/components/FadeInView";
import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="page-padding section-spacing">
        <FadeInView>
          <h1 className="text-editorial-title text-foreground">Contact</h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="text-editorial-body text-muted-foreground mt-6 max-w-md">
            For inquiries, collaborations, or correspondence.
          </p>
        </FadeInView>
      </section>

      <section className="page-padding pb-20 md:pb-32 max-w-lg">
        <FadeInView delay={0.3}>
          <div className="mb-12">
            <a
              href="mailto:studio@artist.com"
              className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500 border-b border-border pb-1"
            >
              studio@artist.com
            </a>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="text-editorial-sm text-muted-foreground block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border py-2 text-editorial-body text-foreground focus:outline-none focus:border-foreground transition-colors duration-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-editorial-sm text-muted-foreground block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-2 text-editorial-body text-foreground focus:outline-none focus:border-foreground transition-colors duration-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-editorial-sm text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-border py-2 text-editorial-body text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="text-editorial-sm text-muted-foreground hover:text-foreground transition-colors duration-500 border-b border-border pb-1"
              >
                Send
              </button>
            </form>
          ) : (
            <p className="text-editorial-body text-muted-foreground">
              Thank you. Your message has been received.
            </p>
          )}
        </FadeInView>
      </section>
    </div>
  );
};

export default Contact;

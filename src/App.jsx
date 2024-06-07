import React from "react";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-950 text-white">
          <a className="flex items-center justify-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="sr-only">Interior Design Startup</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Portfolio
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </a>
          </nav>
        </header>
        <main className="flex-1">
          <section
            id="hero"
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Elevate Your Space with Our Timeless Designs
                    </h1>
                    <p className="max-w-[600px] text-gray-400 md:text-xl">
                      Our team of experienced designers creates stunning,
                      functional interiors that reflect your unique style and
                      vision.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-700"
                      href="#"
                    >
                      View Portfolio
                    </a>
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
                <img
                  src="./assets/hero.jpeg"
                  width="550"
                  height="310"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </section>
          <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                    Our Work
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Explore Our Portfolio
                  </h2>
                  <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    From modern minimalist to cozy traditional, our team has the
                    expertise to transform any space into a beautiful and
                    functional oasis.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <img
                    src="./assets/living_room.jpeg"
                    width="300"
                    height="200"
                    alt="Project 1"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Modern Living Room</h3>
                    <p className="text-sm text-gray-400">
                      A sleek and minimalist design that maximizes space and
                      natural light.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <img
                    src="./assets/kitchen.jpg"
                    width="300"
                    height="200"
                    alt="Project 2"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">
                      Cozy Farmhouse Kitchen
                    </h3>
                    <p className="text-sm text-gray-400">
                      A warm and inviting design that blends rustic and modern
                      elements.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <img
                    src="/./assets/bedroom.jpg"
                    width="300"
                    height="200"
                    alt="Project 3"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">
                      Bright and Airy Bedroom
                    </h3>
                    <p className="text-sm text-gray-400">
                      A serene and calming design that promotes relaxation and
                      rest.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <img
                    src="/./assets/home_office.jpeg"
                    width="300"
                    height="200"
                    alt="Project 4"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Elegant Home Office</h3>
                    <p className="text-sm text-gray-400">
                      A sophisticated and functional design that inspires
                      productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="about"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white"
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Transforming Spaces, Elevating Lives
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At our interior design startup, we believe that the spaces
                    we live and work in have a profound impact on our well-being
                    and productivity. Our team of talented designers is
                    passionate about creating beautiful, functional, and
                    sustainable environments that enhance the lives of our
                    clients.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        <img src="./assets/founder.png" alt="" />
                      </span>
                    </span>
                    <div>
                      <p className="text-lg font-medium">Jane Doe</p>
                      <p className="text-sm text-gray-400">
                        Founder &amp; Creative Director
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        <img src="./assets/lead_designer.png" alt="" />
                      </span>
                    </span>
                    <div>
                      <p className="text-lg font-medium">John Bauer</p>
                      <p className="text-sm text-gray-400">Lead Designer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        <img src="./assets/manager.jpeg" alt="" />
                      </span>
                    </span>
                    <div>
                      <p className="text-lg font-medium">Sarah Miller</p>
                      <p className="text-sm text-gray-400">Project Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Let's Discuss Your Project
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below and one of our designers will be in
                  touch to discuss your design needs.
                </p>
              </div>
              <form className="mx-auto w-full max-w-md space-y-4">
                <input
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  placeholder="Your Name"
                  type="text"
                  fdprocessedid="3ki1u"
                />
                <input
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  placeholder="Your Email"
                  type="email"
                  fdprocessedid="ot9r4c"
                />
                <input
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  placeholder="Your Phone"
                  type="tel"
                  fdprocessedid="c3gcg"
                />
                <textarea
                  className="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  placeholder="Your Message"
                ></textarea>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 active:scale-95 shadow-lg hover:shadow-xl h-12 px-6 py-3 w-full dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus-visible:ring-offset-gray-800 dark:focus-visible:ring-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 p-6 md:py-12 w-full text-white">
          <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
            <div className="grid gap-1">
              <h3 className="font-semibold">Company</h3>
              <a href="#">About Us</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
              <a href="#">News</a>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Services</h3>
              <a href="#">Interior Design</a>
              <a href="#">Space Planning</a>
              <a href="#">Furniture Selection</a>
              <a href="#">Project Management</a>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Portfolio</h3>
              <a href="#">Residential</a>
              <a href="#">Commercial</a>
              <a href="#">Hospitality</a>
              <a href="#">Retail</a>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Contact</h3>
              <a href="#">Email</a>
              <a href="#">Phone</a>
              <a href="#">Address</a>
              <div className="flex gap-2">
                <a className="text-gray-400 hover:text-gray-50" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-gray-50" href="#"></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default App;

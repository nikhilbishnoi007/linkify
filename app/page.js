import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[50vh]">
        
        
        <div className="flex flex-col gap-4 items-center justify-center text-center md:text-left px-4">
          <p className="text-3xl font-bold">
            The best URL shortner in the market
          </p>

          <p className="md:px-16">
            We are the most straigtforward in the world Most of the url shortner
            will track you or ask you to get your details for login we understand
            your need hence we created this url shortner
          </p>

          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold cursor-pointer text-white">
                Try now
              </button>
            </Link>

            <Link href="https://github.com/nikhilbishnoi007">
              <button className="bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold cursor-pointer text-white">
                Github
              </button>
            </Link>
          </div>
        </div>

        
        <div className="relative flex justify-center md:justify-start h-[250px] md:h-auto">
          <Image alt="image" src="/vector.jpg" fill className="mix-blend-darken object-contain"/>
        </div>

      </section>
    </main>
  );
}

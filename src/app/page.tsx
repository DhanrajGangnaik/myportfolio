import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="rounded-full"
          src="/avatar.jpg" // Replace with your avatar image path
          alt="Dhanraj Gangnaik's avatar"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Hi, I&apos;m Dhanraj Gangnaik
        </h1>
        <p className="text-lg text-center sm:text-left text-gray-600 dark:text-gray-400">
          A passionate Cloud Security Enthusiast and Developer. I love solving
          complex challenges, building secure web solutions, and creating
          innovative applications. Explore my projects and let&apos;s connect!
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#projects"
          >
            Explore Projects
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/DhanrajGangnaik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-icon.svg" // Replace with GitHub icon path
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/dhanraj-gangnaik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin-icon.svg" // Replace with LinkedIn icon path
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:example@gmail.com" // Replace with your email
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/email-icon.svg" // Replace with email icon path
            alt="Email icon"
            width={16}
            height={16}
          />
          Email Me
        </a>
      </footer>
    </div>
  );
}

import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Ganesha Ampuh</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer - Frontend</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi! I`m Ganesha from Indonesia. 
        </p>

        <br />

        <p>
          I am a software engineer with over 8 years of experience. I use often use Vue.js stack for development process to delivery user-oriented application. My skills have been honed through years of practical experience, and I am always eager to take on new challenges and develop further.
        </p>

        <br />

        <p>
          I am available for contact via phone or email. Let&apos;s Discuss!
        </p>
      </div>

      <Links />
    </div>
  )
}

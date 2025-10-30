import {
  IconType,
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
  SiGmail
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGithub,
      href: 'https://github.com/ganeshaampuh',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/ganeshaampuh/',
    },
    {
      icon: SiWhatsapp,
      href: 'https://wa.me/6285155001131',
    },
    {
      icon: SiGmail,
      href: 'mailto:ganeshaampuh@gmail.com',
    },
  ]

  return (
    <div className="mr-auto mt-3 flex w-full flex-wrap items-center gap-5">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}

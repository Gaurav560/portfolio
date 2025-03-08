import {
  IconType,
  SiGithub,
  SiGmail,
  SiHashnode,
  SiLinkedin,
  SiMedium,
  SiSubstack,
  SiX,
} from '@icons-pack/react-simple-icons'
import { FC } from 'react'

interface LinkItem {
  icon: IconType
  href: string
}

const Links: FC = () => {
  const links: LinkItem[] = [
    {
      icon: SiGmail,
      href: 'mailto:gauravtelusko@gmail.com',  // Updated to use mailto:
    },
    {
      icon: SiGithub,
      href: 'https://github.com/Gaurav560',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/gaurav4044/',
    },
    {
      icon: SiSubstack,
      href: 'https://techinsightsbygaurav.substack.com/',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@1809157_26884',
    },
    {
      icon: SiX,
      href: 'https://x.com/1809157Gaurav',
    },{
      icon: SiHashnode,
      href: 'https://javaexpert.hashnode.dev/',
    }
  ]

  return (
    <div className="mr-auto mt-2 flex w-full flex-col items-center gap-4 sm:mt-4 md:mt-6">
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
        {links.map((link: LinkItem, id: number) => {
          return (
            <a
              target="_blank"
              key={id}
              href={link.href}
              rel="noopener noreferrer"
            >
              <link.icon title="" size={45} />
            </a>
          )
        })}
      </div>
      <p className="text-sm text-gray-500">
        © 2025 100-x.dev | All rights reserved.
      </p>
    </div>
  )
}

export default Links
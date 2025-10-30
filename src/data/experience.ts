const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  achievements: string[]
}[] = [
  {
    company: 'The Feast',
    role: 'Senior Frontend Engineer',
    description:
      'Working on FMH V10, responsible to optimize performance and maintain code quality',
    startDate: 'Feb 2025',
    endDate: 'Present',
    achievements: [
      'Implement chunks on frontend bundle to reduce load times using dynamic import and manual chunks',
      'Implement husky to running linter on commit for manage code quality',
      'Implement define-async-component to enables lazy loading of components, reducing initial bundle size.',
    ],
  },
  {
    company: 'Mekari',
    role: 'Software Engineer 2 (Frontend)',
    description:
      'Responsible for maintaining the user interface, seamlessly integrating third-party vendors, and actively involved in developing new features for Mekari Talenta.',
    startDate: 'Oct 2021',
    endDate: 'Feb 2025',
    achievements: [
      'Decoupled a monolith to micro-frontend architecture, reducing development time by 70%',
      'Implemented error logging and monitoring, reducing the error rate by 70% before user escalation',
      'Revamped core features to a single-page application on Mekari Talenta, reducing page load times by 80%',
    ],
  },
  {
    company: 'PT Indie Marketindo Ceria',
    role: 'Software Engineer (Frontend)',
    description:
      'Building IndieMarketFest storefront and seller management system.',
    startDate: 'April 2021',
    endDate: 'March 2023',
    achievements: [
      'Lead a team of 3 frontend engineers',
      'Implemented a single-page application for the storefront and seller dashboard to increase speed of pages by 70%',
    ],
  },
  {
    company: 'TRYS',
    role: 'Web Developer',
    description:
      'Involved in creating company profile websites. Contributed to TRYS extensive brand portfolio, which includes well-names like Wuling, Telon Lang, and So Good.',
    startDate: 'May 2016',
    endDate: 'Oct 2018',
    achievements: [
      'Developed the test drive feature for Wuling’s website, contributing to GIIAS 2016 with a 0% error rate',
      ' Executed a microsite campaign for the Telon Lang brand, incorporating SEO best practices which improved search engine rankings, leading to over 1,200 organic visits within the first month.',
    ],
  },
]

export default PAST_ROLES

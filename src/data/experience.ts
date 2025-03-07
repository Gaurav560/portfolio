const PAST_ROLES: {
  id: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate?: string;
  link?: string;
}[] = [
  {
    id: '1',
    company: 'Telusko',
    role: 'Backend Developer (Java & Spring Boot)',
    description:
      'Led the development of a real-time, bi-directional application(in house product) for the currently working EdTech startup, leveraging a tech stack that includes WebSocket with STOMP, Spring Web, Spring Data JPA, Docker, Redis Cloud, and more. Managed a team of three in the development, testing, and deployment process. Conducted functional and load testing using Selenium scripts in both head and headless modes, with LambdaTest and JMeter for scalability and reliability. Reduced latency for US clients by 40% with AWS Global Accelerator and edge locations. Integrated Spring AI with Anthropic API to dynamically generate data. Designed and implemented the entire backend architecture, utilizing RDS for PostgreSQL and an in-memory message broker for real-time communication. Set up AWS CloudWatch for detailed monitoring of CPU utilization, RAM usage, Spring Boot backend logs, and RDS for PostgreSQL, optimizing performance and resource allocation. Leveraged the serverless Fargate pay-as-you-go model to efficiently manage costs. Successfully delivered the MVP within 180 days',
    startDate: 'August 2024',
    endDate: 'Present',
    link: 'https://www.telusko.com/',
  },
  {
    id: '2',
    company: 'Unlogged (Freelance)',
    role: 'Technical Writer & Blogger',
    description:
      'I create in-depth technical blogs and articles focused on the Java and Spring ecosystem, with several pieces ranking in the top 10 globally on Google search. My published works include comprehensive guides on Java 22, 23, and 24 features, WebSockets with Spring Boot, GraalVM, Z Garbage Collector, MongoDB with Spring Boot, and managing technical debt. I also share valuable developer best practices, including insights on Git workflows such as merge vs. rebase strategies. With an average SEO score of over 85%, my blogs consistently drive high visibility and engagement.',
    startDate: 'January 2024',
    endDate: 'Present',
    link: 'https://www.unlogged.io/blog',
  },
];

export default PAST_ROLES;

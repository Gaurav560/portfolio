import {
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiTerraform,
  SiTensorflow,
  SiPytorch,
  SiGithubactions,
  SiGrafana,
  SiPrometheus,
  SiAnsible,
  SiGit,
  SiGithub,
  SiAwslambda
} from '@icons-pack/react-simple-icons';
import { FaBrain, FaCogs,FaLinux, FaAws,  FaUsers, FaProjectDiagram, FaChalkboardTeacher, FaHandshake} from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { SiApachekafka, SiHuggingface, SiLangchain, SiSpring,SiAmazonecs ,SiAmazoncloudwatch,SiAmazoniam ,SiAmazonroute53 ,SiAmazonrds, SiAmazons3, SiSpringboot,SiAwsfargate,SiAmazonec2 ,SiIntellijidea, SiRabbitmq,SiMongodb,SiApachemaven,SiHibernate, SiNextdotjs, SiReact, SiNodedotjs, SiExpress } from 'react-icons/si';
const SKILLS = [
  {
    field: 'Backend Development',
    skills: [
      { skill: 'Java', icon: FaJava },
      { skill: 'Spring', icon: SiSpring },
      { skill: 'Spring Boot', icon: SiSpringboot },
      { skill: 'PostgreSQL', icon: SiPostgresql },
      { skill: 'MySQL', icon: SiMysql },
      { skill: 'MongoDB', icon: SiMongodb },
      { skill: 'Hibernate', icon: SiHibernate },
      { skill: 'Maven', icon: SiApachemaven },
      { skill: 'Kafka', icon: SiApachekafka },
      { skill: 'RabbitMQ', icon:SiRabbitmq },
      { skill: 'Redis', icon: SiRedis },
      { skill: 'IntellijIdea', icon: SiIntellijidea }


     
    ],
  },
  {
    field: 'DevOps',
    skills: [
            { skill: 'Linux', icon: FaLinux },
      { skill: 'Docker', icon: SiDocker },
      { skill: 'Kubernetes', icon: SiKubernetes },
      { skill: 'Terraform', icon: SiTerraform },
      { skill: 'Jenkins', icon: SiJenkins },
      { skill: 'Git', icon: SiGit },
      { skill: 'GitHub', icon: SiGithub },
      { skill: 'GitHub Actions', icon: SiGithubactions },
      { skill: 'Ansible', icon: SiAnsible },
      { skill: 'Grafana', icon: SiGrafana },
      { skill: 'Prometheus', icon: SiPrometheus },
     
    ],
  }
  ,
  {
    field: 'Cloud(AWS)',
    skills: [

      { skill: 'AWS', icon: FaAws},
      { skill: 'EC2', icon: SiAmazonec2 },
      { skill: 'Lambda', icon: SiAwslambda},
      { skill: 'Fargate', icon: SiAwsfargate},
      { skill: 'ecs', icon: SiAmazonecs },
      { skill: 's3', icon: SiAmazons3 },
      { skill: 'rds', icon: SiAmazonrds },
      { skill: 'route53', icon: SiAmazonroute53 },
      { skill: 'IAM', icon: SiAmazoniam },
      { skill: 'CloudWatch', icon: SiAmazoncloudwatch },
     
    ],
  },
  {
    field: 'AI(Gen AI + Agentic AI) & Machine Learning',
    skills: [
      { skill: 'Python', icon: SiPython },
      { skill: 'TensorFlow', icon: SiTensorflow },
      { skill: 'PyTorch', icon: SiPytorch },
      { skill: 'HuggingFace', icon: SiHuggingface },
      { skill: 'LangChain', icon: SiLangchain },
    ],
  },

 
    {
      field: 'Soft Skills and Project Management Skills',
      skills: [
        { skill: 'Problem Solving', icon: FaBrain },
        { skill: 'Team Collaboration', icon: FaUsers },
        { skill: 'Project Management', icon: FaProjectDiagram },
        { skill: 'Mentorship & Coaching', icon: FaChalkboardTeacher },
        { skill: 'Negotiation & Conflict Resolution', icon: FaHandshake },
        { skill: 'Agile', icon: FaCogs },  // Added Agile skill with corresponding icon
      ],
    }
];

export default SKILLS;

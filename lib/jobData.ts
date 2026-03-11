export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  experienceLevel: string;
  salary: string;
  description: string;
  requirements: string[];
  companyInfo: string;
}

export const jobsData: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    jobType: 'Full-time',
    experienceLevel: 'Senior',
    salary: '$120K - $150K',
    description: 'We are looking for an experienced React developer to join our engineering team. You will be working on our main product platform and have the opportunity to make a significant impact.',
    requirements: [
      '5+ years of React experience',
      'Strong JavaScript and TypeScript knowledge',
      'Experience with Next.js',
      'Knowledge of Node.js',
    ],
    companyInfo: 'TechCorp is a leading SaaS company founded in 2010, serving thousands of businesses worldwide.',
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    jobType: 'Full-time',
    experienceLevel: 'Mid-level',
    salary: '$90K - $120K',
    description: 'Join our fast-growing startup as a Full Stack Engineer. You will work across our frontend and backend systems, building features that thousands of users rely on daily.',
    requirements: [
      '3+ years of full stack development',
      'Proficiency in React and Node.js',
      'Experience with databases (PostgreSQL/MongoDB)',
      'Git and version control experience',
    ],
    companyInfo: 'StartupXYZ is a fast-growing fintech startup backed by top venture capital firms.',
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'DesignStudio',
    location: 'Austin, TX',
    jobType: 'Full-time',
    experienceLevel: 'Mid-level',
    salary: '$80K - $110K',
    description: 'We are seeking a talented UX/UI Designer to create beautiful and intuitive user experiences. You will work closely with product managers and developers.',
    requirements: [
      'Strong portfolio of design work',
      'Proficiency in Figma or similar tools',
      '3+ years of UX/UI design experience',
      'Understanding of user research methods',
    ],
    companyInfo: 'DesignStudio is a digital design agency working with Fortune 500 companies and innovative startups.',
  },
  {
    id: '4',
    title: 'Backend Engineer',
    company: 'CloudServices',
    location: 'Seattle, WA',
    jobType: 'Full-time',
    experienceLevel: 'Senior',
    salary: '$130K - $160K',
    description: 'We are looking for a Senior Backend Engineer to lead our infrastructure initiatives. You will architect and build scalable systems that support millions of users.',
    requirements: [
      '5+ years of backend development',
      'Experience with microservices',
      'Knowledge of cloud platforms (AWS/GCP/Azure)',
      'Strong database design skills',
    ],
    companyInfo: 'CloudServices is a leading cloud infrastructure company trusted by enterprises worldwide.',
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Boston, MA',
    jobType: 'Full-time',
    experienceLevel: 'Mid-level',
    salary: '$100K - $130K',
    description: 'Join our Product team as a Product Manager. You will drive the vision and strategy for one of our core product lines.',
    requirements: [
      '3+ years of product management experience',
      'Data-driven decision making',
      'Experience with B2B SaaS',
      'Strong communication skills',
    ],
    companyInfo: 'InnovateTech is an AI-driven software company revolutionizing enterprise automation.',
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'CloudServices',
    location: 'Seattle, WA',
    jobType: 'Full-time',
    experienceLevel: 'Mid-level',
    salary: '$100K - $130K',
    description: 'We are seeking a DevOps Engineer to improve our deployment and infrastructure processes. You will work with cutting-edge cloud technologies.',
    requirements: [
      '3+ years of DevOps experience',
      'Proficiency with Kubernetes',
      'CI/CD pipeline experience',
      'Scripting skills (Python/Bash)',
    ],
    companyInfo: 'CloudServices is a leading cloud infrastructure company trusted by enterprises worldwide.',
  },
];

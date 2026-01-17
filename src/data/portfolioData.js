export const portfolioData = {
  personal: {
    name: "John Doe",
    title: "Software & AI Engineer",
    statement: "Passionate software engineer with expertise in building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications. I specialize in developing scalable machine learning solutions, generative AI systems, and data-driven products that solve complex business challenges.",
    avatar: "https://placehold.co/600x600/png?text=Headshot",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe"
  },
  
  skills: [
    { name: "Python", level: 95, category: "Programming" },
    { name: "JavaScript/TypeScript", level: 90, category: "Programming" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "TensorFlow/PyTorch", level: 88, category: "ML/AI" },
    { name: "Scikit-learn", level: 92, category: "ML/AI" },
    { name: "AWS/GCP", level: 85, category: "Cloud" },
    { name: "Docker/Kubernetes", level: 78, category: "DevOps" },
    { name: "SQL/NoSQL", level: 87, category: "Database" },
    { name: "Git/GitHub", level: 92, category: "Tools" }
  ],
  
  projects: [
    {
      id: 1,
      title: "AI-Powered Customer Support Chatbot",
      date: "2024-01",
      description: "Developed an intelligent chatbot system using natural language processing and machine learning to automate customer support inquiries, reducing response time by 60% and improving customer satisfaction scores.",
      role: "Lead AI Engineer",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker", "AWS"],
      github: "https://github.com/johndoe/ai-chatbot",
      demo: "https://ai-chatbot-demo.com",
      image: "https://placehold.co/800x500/png?text=AI+Chatbot"
    },
    {
      id: 2,
      title: "Real-Time Fraud Detection System",
      date: "2023-11",
      description: "Built a machine learning pipeline that processes millions of transactions in real-time to detect fraudulent activities with 95% accuracy, saving the company over $2M annually.",
      role: "ML Engineer",
      technologies: ["Python", "Apache Spark", "Kafka", "PostgreSQL", "Kubernetes", "GCP"],
      github: "https://github.com/johndoe/fraud-detection",
      image: "https://placehold.co/800x500/png?text=Fraud+Detection"
    },
    {
      id: 3,
      title: "Generative AI Content Platform",
      date: "2023-09",
      description: "Created a SaaS platform leveraging GPT-4 and custom fine-tuned models to generate marketing content, helping businesses create personalized campaigns at scale.",
      role: "Full Stack Developer",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Vercel", "Stripe"],
      github: "https://github.com/johndoe/content-platform",
      demo: "https://content-platform-demo.com",
      image: "https://placehold.co/800x500/png?text=Generative+AI+Platform"
    },
    {
      id: 4,
      title: "Computer Vision Quality Control System",
      date: "2023-06",
      description: "Implemented a computer vision system for manufacturing quality control using deep learning to detect defects with 99.2% accuracy, reducing manual inspection costs by 75%.",
      role: "ML Engineer",
      technologies: ["Python", "PyTorch", "OpenCV", "Flask", "Docker", "AWS"],
      github: "https://github.com/johndoe/vision-qa",
      image: "https://placehold.co/800x500/png?text=Computer+Vision+QC"
    },
    {
      id: 5,
      title: "Predictive Analytics Dashboard",
      date: "2023-03",
      description: "Designed and developed an interactive dashboard for business intelligence and predictive analytics, enabling data-driven decision making across the organization.",
      role: "Data Engineer",
      technologies: ["React", "D3.js", "Python", "Pandas", "PostgreSQL", "Redis"],
      github: "https://github.com/johndoe/analytics-dashboard",
      demo: "https://analytics-demo.com",
      image: "https://placehold.co/800x500/png?text=Analytics+Dashboard"
    }
  ],
  
  experience: [
    {
      id: 1,
      title: "Senior AI Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      responsibilities: [
        "Lead development of AI-powered products serving 1M+ users",
        "Architect scalable machine learning pipelines processing 10TB+ data daily",
        "Mentor team of 5 engineers on best practices in ML engineering",
        "Collaborate with product teams to define AI strategy and roadmap"
      ],
      achievements: [
        "Reduced model inference latency by 40% through optimization",
        "Increased model accuracy from 85% to 94% through advanced techniques",
        "Saved $500K annually through automated ML operations"
      ]
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "DataScience Solutions",
      location: "New York, NY",
      duration: "2020 - 2022",
      responsibilities: [
        "Developed and deployed production ML models for various clients",
        "Built data processing pipelines using Apache Spark and Kafka",
        "Implemented MLOps practices for model monitoring and retraining",
        "Conducted technical workshops for client teams"
      ],
      achievements: [
        "Successfully delivered 15+ ML projects across different industries",
        "Improved model deployment time from weeks to days",
        "Received 'Innovation Award' for breakthrough fraud detection system"
      ]
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "StartupHub",
      location: "Boston, MA",
      duration: "2019 - 2020",
      responsibilities: [
        "Developed RESTful APIs and microservices",
        "Implemented frontend features using React and TypeScript",
        "Participated in code reviews and agile development processes",
        "Contributed to open-source projects used by the company"
      ],
      achievements: [
        "Built key features that increased user engagement by 25%",
        "Reduced API response time by 30% through optimization",
        "Received 'Outstanding Intern' award"
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      graduation: "2020",
      gpa: "3.9/4.0",
      relevant: [
        "Advanced Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Distributed Systems"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT",
      location: "Cambridge, MA",
      graduation: "2018",
      gpa: "3.8/4.0",
      relevant: [
        "Algorithms and Data Structures",
        "Artificial Intelligence",
        "Database Systems",
        "Software Engineering"
      ]
    }
  ],
  
  publications: [
    {
      id: 1,
      title: "Efficient Transfer Learning for Low-Resource NLP Tasks",
      authors: "John Doe, Jane Smith, Dr. Robert Johnson",
      journal: "ACL 2023",
      year: "2023",
      link: "https://aclanthology.org/2023.acl-main.123/"
    },
    {
      id: 2,
      title: "Scaling Machine Learning Pipelines: Best Practices and Patterns",
      authors: "John Doe",
      journal: "Medium Tech Blog",
      year: "2023",
      link: "https://medium.com/@johndoe/scaling-ml-pipelines"
    },
    {
      id: 3,
      title: "Building Production-Ready AI Systems: A Comprehensive Guide",
      authors: "John Doe",
      journal: "O'Reilly Media",
      year: "2022",
      link: "https://www.oreilly.com/library/view/production-ai-systems/9781098101234/"
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO at Tech Innovations Inc.",
      content: "John is an exceptional AI engineer who consistently delivers high-quality work. His ability to bridge the gap between research and production is invaluable. He's a true team player and mentor.",
      avatar: "https://placehold.co/120x120/png?text=SJ"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "AI Research Lead at Google",
      content: "Working with John on our NLP project was a pleasure. His technical expertise and problem-solving skills are top-notch. He brings innovative solutions to complex challenges.",
      avatar: "https://placehold.co/120x120/png?text=MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager at DataScience Solutions",
      content: "John has an amazing ability to understand business requirements and translate them into technical solutions. He's reliable, communicative, and always delivers beyond expectations.",
      avatar: "https://placehold.co/120x120/png?text=ER"
    }
  ]
};

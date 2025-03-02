"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Twitter, Globe, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function GitHubProfile() {
  const [expandedSections, setExpandedSections] = useState({
    skills: true,
    projects: true,
    stats: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const skills = [
    { category: "Programming Languages", items: ["Python", "R", "SQL", "JavaScript"] },
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras"] },
    { category: "Data Processing", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"] },
    { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Docker", "Git"] },
    { category: "Big Data", items: ["Spark", "Hadoop", "Kafka", "Airflow"] },
  ]

  const projects = [
    {
      name: "StormLens",
      description: "A revolutionary weather prediction system using advanced ML algorithms",
      tags: ["Python", "TensorFlow", "Weather API", "Time Series"],
      repo: "StormLens",
      stars: 24,
    },
    {
      name: "Library Management System",
      description: "Comprehensive system for managing library resources and operations",
      tags: ["Python", "MySQL", "Flask", "Bootstrap"],
      repo: "Library-Management-System",
      stars: 18,
    },
    {
      name: "World Happiness Report",
      description: "Analysis and visualization of global happiness metrics",
      tags: ["R", "Data Visualization", "Statistical Analysis"],
      repo: "WorldHappinessReport",
      stars: 15,
    },
    {
      name: "Financial Data Analysis",
      description: "Prediction and analysis of company financial data using ML",
      tags: ["Python", "Pandas", "Scikit-Learn", "Finance"],
      repo: "Prediction-and-Analysis-of-Company-Financial-Data",
      stars: 12,
    },
    {
      name: "Drug Discovery Development",
      description: "Data-driven approach to pharmaceutical research and drug discovery",
      tags: ["Python", "Bioinformatics", "ML", "Chemistry"],
      repo: "Data-Driven-Drug-Discovery-Development-",
      stars: 20,
    },
    {
      name: "Aircraft Engine Maintenance",
      description: "Predictive maintenance system for aircraft engines to enhance aviation safety",
      tags: ["Python", "IoT", "Time Series", "Predictive Modeling"],
      repo: "Predictive-Maintenance-for-Aircraft-Engines-Aviation-Safety",
      stars: 16,
    },
  ]

  const expertiseAreas = [
    { name: "Machine Learning", level: 92 },
    { name: "Data Analysis", level: 95 },
    { name: "Deep Learning", level: 85 },
    { name: "Computer Vision", level: 80 },
    { name: "Natural Language Processing", level: 78 },
    { name: "Statistical Modeling", level: 88 },
    { name: "Data Visualization", level: 90 },
    { name: "Big Data Technologies", level: 75 },
  ]

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto bg-gradient-to-b from-gray-900 to-black text-white p-6 rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8 animate-fade-in">
        <div className="w-full h-40 mb-6 overflow-hidden rounded-lg">
          <img src="/placeholder.svg?height=160&width=800" alt="Banner" className="w-full h-full object-cover" />
        </div>

        <div className="relative mt-[-50px] mb-4">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-cyan-400 bg-gray-800"
          />
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
          Indigibilli Harshit
        </h1>

        <h3 className="text-xl text-gray-300 mb-4">
          🚀 Data Science Enthusiast | Machine Learning Explorer | AI Innovator 🚀
        </h3>

        <div className="flex space-x-3 mb-6">
          <a
            href="mailto:harshitindigibilli@gmail.com"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/indigibilli-harshit-394366251"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a
            href="https://x.com/HarshitRocky1?t=UStp_i-0EczLgoKOZTTjKg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
          </a>
          <a
            href="https://www.harshit.life/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Portfolio</span>
            </Button>
          </a>
          <a
            href="https://github.com/harshit0628"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <Card className="mb-8 bg-gray-800/50 border-cyan-400/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-cyan-400">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="font-semibold text-cyan-400 min-w-[180px]">🔭 Currently working on:</span>
                <span className="text-gray-200">
                  <strong>StormLens</strong> - A revolutionary weather prediction system
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-cyan-400 min-w-[180px]">🌱 Diving deep into:</span>
                <span className="text-gray-200">
                  <strong>Advanced Deep Learning</strong> and <strong>Computer Vision</strong>
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-cyan-400 min-w-[180px]">💡 I love to:</span>
                <span className="text-gray-200">
                  Explore new technologies and leverage them to solve real-life problems
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="font-semibold text-cyan-400 min-w-[180px]">🎯 Goals:</span>
                <span className="text-gray-200">
                  Contribute more to Open Source projects and build impactful AI solutions
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-cyan-400 min-w-[180px]">⚡ Fun fact:</span>
                <span className="text-gray-200">
                  I can explain machine learning algorithms while doing a handstand!
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-cyan-400 min-w-[180px]">📚 Currently learning:</span>
                <span className="text-gray-200">Generative AI and Large Language Models</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center cursor-pointer mb-4" onClick={() => toggleSection("skills")}>
          <h2 className="text-2xl font-bold text-cyan-400">🛠️ Skills & Technologies</h2>
          {expandedSections.skills ? (
            <ChevronUp className="text-cyan-400" />
          ) : (
            <ChevronDown className="text-cyan-400" />
          )}
        </div>

        {expandedSections.skills && (
          <div className="grid grid-cols-1 gap-6">
            <Tabs defaultValue="categories" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-800">
                <TabsTrigger value="categories">By Category</TabsTrigger>
                <TabsTrigger value="expertise">Expertise Level</TabsTrigger>
              </TabsList>

              <TabsContent value="categories" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skillGroup, index) => (
                    <Card
                      key={index}
                      className="bg-gray-800/50 border-cyan-400/30 overflow-hidden hover:border-cyan-400 transition-colors duration-300"
                    >
                      <CardHeader className="bg-gray-700/50 py-3">
                        <CardTitle className="text-lg text-cyan-400">{skillGroup.category}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <Badge key={skillIndex} className="bg-gray-700 hover:bg-cyan-400/20 text-gray-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="expertise" className="mt-0">
                <Card className="bg-gray-800/50 border-cyan-400/30">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {expertiseAreas.map((area, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-200">{area.name}</span>
                            <span className="text-cyan-400">{area.level}%</span>
                          </div>
                          <Progress
                            value={area.level}
                            className="h-2 bg-gray-700"
                            indicatorClassName="bg-gradient-to-r from-cyan-400 to-blue-500"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>

      {/* GitHub Stats Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center cursor-pointer mb-4" onClick={() => toggleSection("stats")}>
          <h2 className="text-2xl font-bold text-cyan-400">📊 GitHub Statistics</h2>
          {expandedSections.stats ? <ChevronUp className="text-cyan-400" /> : <ChevronDown className="text-cyan-400" />}
        </div>

        {expandedSections.stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gray-800/50 border-cyan-400/30 overflow-hidden">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=200&width=400" alt="GitHub Stats" className="w-full h-auto" />
              </CardContent>
              <CardFooter className="text-xs text-gray-400 justify-center py-2">GitHub Stats</CardFooter>
            </Card>

            <Card className="bg-gray-800/50 border-cyan-400/30 overflow-hidden">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=200&width=400" alt="GitHub Streak" className="w-full h-auto" />
              </CardContent>
              <CardFooter className="text-xs text-gray-400 justify-center py-2">Contribution Streak</CardFooter>
            </Card>

            <Card className="bg-gray-800/50 border-cyan-400/30 overflow-hidden md:col-span-2">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=250&width=800" alt="Contribution Graph" className="w-full h-auto" />
              </CardContent>
              <CardFooter className="text-xs text-gray-400 justify-center py-2">Contribution Activity</CardFooter>
            </Card>

            <Card className="bg-gray-800/50 border-cyan-400/30 overflow-hidden md:col-span-2">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=200&width=800" alt="Top Languages" className="w-full h-auto" />
              </CardContent>
              <CardFooter className="text-xs text-gray-400 justify-center py-2">Most Used Languages</CardFooter>
            </Card>
          </div>
        )}
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center cursor-pointer mb-4"
          onClick={() => toggleSection("projects")}
        >
          <h2 className="text-2xl font-bold text-cyan-400">🚀 Featured Projects</h2>
          {expandedSections.projects ? (
            <ChevronUp className="text-cyan-400" />
          ) : (
            <ChevronDown className="text-cyan-400" />
          )}
        </div>

        {expandedSections.projects && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-cyan-400">{project.name}</CardTitle>
                    <Badge variant="outline" className="bg-gray-700/50 text-cyan-400 border-cyan-400/50">
                      ⭐ {project.stars}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-gray-700/70 text-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={`https://github.com/harshit0628/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    View Repository <ExternalLink className="h-3 w-3" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Connect Section */}
      <Card className="mb-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-cyan-400/30">
        <CardHeader>
          <CardTitle className="text-2xl text-cyan-400">📫 Let's Connect</CardTitle>
          <CardDescription className="text-gray-300">
            Feel free to reach out for collaborations, exciting projects, or just a friendly chat about data science and
            AI!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:harshitindigibilli@gmail.com"
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/indigibilli-harshit-394366251"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </a>
            <a
              href="https://www.harshit.life/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Globe className="mr-2 h-4 w-4" />
                Visit Portfolio
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm">
        <div className="mb-2">
          <span className="bg-gray-800 px-3 py-1 rounded-full">
            <span className="text-cyan-400">Profile Views:</span> 1.2K
          </span>
        </div>
        <p className="text-gray-500">Thanks for visiting! Let's build something amazing together!</p>
      </div>
    </div>
  )
}


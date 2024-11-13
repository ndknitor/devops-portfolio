"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"

export default function DevOpsPortfolio() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#0D1117] text-white">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D1117]/80 backdrop-blur' : ''}`}>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center relative">
          <h1 className="text-2xl font-bold">Ngo Dinh Khoi Nguyen</h1>
          <nav> 
            <ul className="flex space-x-4">
              <li><Link href="#about" className="hover:text-red-400">About</Link></li>
              <li><Link href="#skills" className="hover:text-red-400">Skills</Link></li>
              <li><Link href="#projects" className="hover:text-red-400">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-red-400">Contact</Link></li>
            </ul>
          </nav>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-red-600">DevOps Engineer</h2>
          <p className="text-xl text-gray-300">
            Passionate about automating, optimizing, and streamlining development and operations processes.
            With extensive experience in implementing CI/CD pipelines, managing cloud infrastructure, and
            ensuring high availability and scalability of systems. Skilled in both back-end and front-end development,
            as well as mobile app creation and database management.
          </p>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCategory title="DevOps" skills={["Linux", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "Grafana", "Prometheus", "Nginx"]} />
            <SkillCategory title="Cloud Providers" skills={["AWS", "Azure", "Oracle"]} />
            <SkillCategory title="Back-end Development" skills={["Python", "Node.js", "ASP.NET Core"]} />
            <SkillCategory title="Front-end Development" skills={["React", "Next.js"]} />
            <SkillCategory title="Mobile Development" skills={["React Native"]} />
            <SkillCategory title="Databases" skills={["SQL Server", "MySQL", "PostgreSQL", "Redis"]} />
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-900 border-red-800">
              <CardHeader>
                <CardTitle className="text-red-500">Microservices Migration</CardTitle>
                <CardDescription className="text-gray-400">Migrated monolithic application to microservices architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Led the migration of a legacy monolithic application to a microservices architecture using Docker and Kubernetes. Implemented CI/CD pipelines with Jenkins for automated deployments.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-red-800">
              <CardHeader>
                <CardTitle className="text-red-500">Multi-Cloud Infrastructure</CardTitle>
                <CardDescription className="text-gray-400">Designed and implemented multi-cloud solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Developed Terraform modules to provision and manage infrastructure across AWS, Azure, and Oracle Cloud. Implemented a unified monitoring solution using Grafana and Prometheus.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-red-800">
              <CardHeader>
                <CardTitle className="text-red-500">Full-Stack Web Application</CardTitle>
                <CardDescription className="text-gray-400">Developed and deployed a scalable web application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Built a full-stack web application using React and Next.js for the frontend, Node.js and ASP.NET Core for microservices, and PostgreSQL for data storage. Containerized with Docker and orchestrated with Kubernetes.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Get in Touch</h2>
          <div className="flex space-x-4">
            <Button className="border-red-600 bg-red-800 hover:bg-red-700 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button className="border-red-600 bg-red-800 hover:bg-red-700 text-white" >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button className="border-red-600 bg-red-800 hover:bg-red-700 text-white">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </section>
      </main>

      <footer className="relative bg-transparent">
        <div className="container mx-auto px-4 py-6 text-center text-gray-300">
          © 2024 Ngo Dinh Khoi Nguyen. All rights reserved.
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </footer>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2 text-red-500">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="bg-red-950 text-white border-red-600">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
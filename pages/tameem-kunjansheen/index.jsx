"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Header / About Me */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/image.jpg"
            alt="Tameem"
            width={120}
            height={120}
            className="rounded-full mx-auto border-4 border-blue-400 shadow-lg"
          />
          <h1 className="text-5xl font-extrabold tracking-tight">Hi, I'm Tameem</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            A Full Stack Software Engineer with 5 years of experience building secure, scalable banking applications for corporate clients.
            Passionate about automation, performance, and integrating AI/ML into real-world workflows.
          </p>
          <p className="text-blue-800 italic">“Great software is built with empathy, insight, and relentless curiosity.”</p>
          <a href="/cv/Tameem_Kunj_CV.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 rounded-full px-6 py-2 text-lg shadow-lg">
              Download Resume
            </Button>
          </a>
        </motion.section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b-2 border-blue-300 pb-2">Skillset</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <Card className="p-4">💻 <strong>Languages:</strong> Java, SQL, JavaScript</Card>
            <Card className="p-4">⚙️ <strong>Backend:</strong> Java EE, Spring Boot, Hibernate JPA</Card>
            <Card className="p-4">🌐 <strong>Frontend:</strong> React.js, HTML5, Tailwind CSS</Card>
            <Card className="p-4">🔗 <strong>Architecture:</strong> Microservices, REST APIs</Card>
            <Card className="p-4">☁️ <strong>Cloud & DevOps:</strong> AWS, Docker, Jenkins, Git</Card>
            <Card className="p-4">🧠 <strong>AI/ML:</strong> Model deployment, anomaly detection, prediction pipelines</Card>
          </div>
        </section>

        {/* How I Solve Problems */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b-2 border-blue-300 pb-2">How I Tackle Problems</h2>
          <div className="bg-white rounded-2xl p-6 shadow-md text-gray-800">
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Root Cause Analysis:</strong> I dive deep into logs, metrics, and traces to understand systemic issues.</li>
              <li><strong>Modular Thinking:</strong> I break large problems into manageable services and reusable components.</li>
              <li><strong>Automation First:</strong> I reduce manual processes using scripts, bots, and scheduled tasks.</li>
              <li><strong>AI-powered Optimization:</strong> I use ML models to predict failures, detect anomalies, and streamline banking ops.</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b-2 border-blue-300 pb-2">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2">FBIL – Finacle Blockchain Integration Layer</h3>
              <p className="text-sm text-gray-700">
                Designed & developed microservices to connect Finacle Trade Connect with NESL, FI Core & Trade Trust.
                Integrated ML-driven alert systems to flag irregular transactions, improving operational efficiency by 23%.
              </p>
              <p className="mt-2 text-xs text-blue-600 italic">Stack: Java, Spring Boot, AWS, AI pipelines</p>
            </Card>

            <Card className="p-6 bg-white rounded-3xl shadow-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2">Corporate Treasury Portal</h3>
              <p className="text-sm text-gray-700">
                Built a secure, scalable dashboard for managing high-volume corporate banking transactions.
                Integrated with SWIFT APIs and performed audit-grade logging with anomaly detection for fraud.
              </p>
              <p className="mt-2 text-xs text-blue-600 italic">Stack: React, Java, Spring Security, Docker</p>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-4">
          <h2 className="text-4xl font-bold border-b-2 border-blue-300 pb-2">Certifications</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <Image src="/cert-aws.png" alt="AWS Certificate" width={160} height={100} />
            <Image src="/cert-java.png" alt="Java Certificate" width={160} height={100} />
            <Image src="/cert-fullstack.png" alt="Full Stack Certificate" width={160} height={100} />
          </div>
        </section>

        {/* Testimonial */}
        <section className="space-y-4">
          <h2 className="text-4xl font-bold border-b-2 border-blue-300 pb-2">Testimonial</h2>
          <blockquote className="text-gray-700 max-w-2xl mx-auto italic border-l-4 border-blue-400 pl-4">
            “Tameem consistently demonstrates deep technical understanding, clear communication, and a strong ability to solve high-impact problems. His contribution to banking integration projects has been exceptional.”
            <span className="block text-right font-bold text-sm text-blue-700 mt-2">— Former Project Manager, Corporate Banking Solutions</span>
          </blockquote>
        </section>

        {/* Contact */}
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Let’s Connect</h2>
          <p className="text-gray-600">I’m open to impactful full-time roles in software engineering, fintech, or AI-integrated systems.</p>
          <p>Email: <a href="mailto:tameem@example.com" className="text-blue-600">tameem@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/tameem" className="text-blue-600">linkedin.com/in/tameem</a></p>
          <p>GitHub: <a href="https://github.com/tameem" className="text-blue-600">github.com/tameem</a></p>
        </section>

      </div>
    </main>
  );
}

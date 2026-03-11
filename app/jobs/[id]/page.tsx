'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { jobsData } from '@/lib/jobData';
import { useState } from 'react';

export default function JobDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const job = jobsData.find((j) => j.id === id);
  const [isApplied, setIsApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!job) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
            <Link href="/jobs">
              <Button className="bg-primary hover:bg-primary/90">Back to Jobs</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleApply = () => {
    setIsApplied(true);
    setTimeout(() => {
      alert('Application submitted successfully!');
    }, 500);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/jobs" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Jobs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-4">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">{job.title}</h1>
                      <p className="text-xl text-muted-foreground">{job.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{job.jobType}</Badge>
                      <Badge variant="secondary">{job.experienceLevel}</Badge>
                      <Badge variant="secondary">{job.salary}</Badge>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>📍 {job.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Job Description */}
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      About This Role
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      Requirements
                    </h2>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-4 sticky top-20">
                {/* Apply Button */}
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleApply}
                  disabled={isApplied}
                >
                  {isApplied ? 'Applied ✓' : 'Apply Now'}
                </Button>

                {/* Save Button */}
                <Button
                  size="lg"
                  variant={isSaved ? 'default' : 'outline'}
                  className="w-full"
                  onClick={handleSave}
                >
                  {isSaved ? '❤️ Saved' : '🤍 Save Job'}
                </Button>

                {/* Company Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">About {job.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {job.companyInfo}
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Job Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">
                        Location
                      </p>
                      <p className="text-sm text-foreground font-medium">{job.location}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">
                        Job Type
                      </p>
                      <p className="text-sm text-foreground font-medium">{job.jobType}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">
                        Experience Level
                      </p>
                      <p className="text-sm text-foreground font-medium">
                        {job.experienceLevel}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">
                        Salary
                      </p>
                      <p className="text-sm text-foreground font-medium">{job.salary}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

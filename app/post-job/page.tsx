'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function PostJobPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [jobType, setJobType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !jobTitle ||
      !company ||
      !location ||
      !jobType ||
      !experienceLevel ||
      !description ||
      !requirements
    ) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Job "${jobTitle}" posted successfully!`);
      // Reset form
      setJobTitle('');
      setCompany('');
      setLocation('');
      setSalaryMin('');
      setSalaryMax('');
      setJobType('');
      setExperienceLevel('');
      setDescription('');
      setRequirements('');
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-primary/5 py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Post a New Job
            </h1>
            <p className="text-muted-foreground">
              Fill in the details below to create a new job listing
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Job Title */}
                  <div className="space-y-2">
                    <label htmlFor="jobTitle" className="text-sm font-medium text-foreground">
                      Job Title *
                    </label>
                    <Input
                      id="jobTitle"
                      placeholder="e.g., Senior React Developer"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-foreground">
                      Location *
                    </label>
                    <Input
                      id="location"
                      placeholder="e.g., San Francisco, CA"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>

                  {/* Salary Range */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="salaryMin" className="text-sm font-medium text-foreground">
                        Salary Min (USD)
                      </label>
                      <Input
                        id="salaryMin"
                        type="number"
                        placeholder="e.g., 100000"
                        value={salaryMin}
                        onChange={(e) => setSalaryMin(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="salaryMax" className="text-sm font-medium text-foreground">
                        Salary Max (USD)
                      </label>
                      <Input
                        id="salaryMax"
                        type="number"
                        placeholder="e.g., 150000"
                        value={salaryMax}
                        onChange={(e) => setSalaryMax(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Job Type */}
                  <div className="space-y-2">
                    <label htmlFor="jobType" className="text-sm font-medium text-foreground">
                      Job Type *
                    </label>
                    <Select value={jobType} onValueChange={setJobType}>
                      <SelectTrigger id="jobType">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Freelance">Freelance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-foreground">
                      Experience Level *
                    </label>
                    <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Entry-level">Entry-level</SelectItem>
                        <SelectItem value="Mid-level">Mid-level</SelectItem>
                        <SelectItem value="Senior">Senior</SelectItem>
                        <SelectItem value="Lead">Lead</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Job Description */}
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-foreground">
                      Job Description *
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Describe the role, responsibilities, and what you're looking for..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-32"
                      required
                    />
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <label htmlFor="requirements" className="text-sm font-medium text-foreground">
                      Requirements *
                    </label>
                    <Textarea
                      id="requirements"
                      placeholder="List key requirements (one per line)..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className="min-h-32"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Posting Job...' : 'Post Job'}
                    </Button>
                    <Button type="button" variant="outline" size="lg">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

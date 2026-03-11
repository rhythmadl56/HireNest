'use client';

import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { JobCard } from '@/components/JobCard';
import { Button } from '@/components/ui/button';
import { jobsData } from '@/lib/jobData';
import { useState } from 'react';

export default function Home() {
  const [searchResults, setSearchResults] = useState<typeof jobsData>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (jobTitle: string, location: string) => {
    const filtered = jobsData.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(jobTitle.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
      return (!jobTitle || titleMatch) && (!location || locationMatch);
    });
    setSearchResults(filtered);
    setHasSearched(true);
  };

  const featuredJobs = jobsData.slice(0, 3);
  const displayJobs = hasSearched ? searchResults : featuredJobs;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Find Your Next Career Opportunity
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Explore thousands of job listings from top companies
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </section>

        {/* Featured or Search Results */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-balance">
              {hasSearched ? 'Search Results' : 'Featured Jobs'}
            </h2>

            {displayJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    jobType={job.jobType}
                    salary={job.salary}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No jobs found matching your criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setHasSearched(false);
                    setSearchResults([]);
                  }}
                >
                  Clear Search
                </Button>
              </div>
            )}

            {!hasSearched && (
              <div className="mt-12 text-center">
                <Link href="/jobs">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    View All Jobs
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

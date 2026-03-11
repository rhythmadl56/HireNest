'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { JobCard } from '@/components/JobCard';
import { jobsData } from '@/lib/jobData';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useMemo } from 'react';

export default function JobsPage() {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterJobType, setFilterJobType] = useState('all');
  const [filterExperience, setFilterExperience] = useState('all');

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const titleMatch =
        !searchTitle || job.title.toLowerCase().includes(searchTitle.toLowerCase());
      const locationMatch =
        !searchLocation || job.location.toLowerCase().includes(searchLocation.toLowerCase());
      const filterLocationMatch =
        filterLocation === 'all' || job.location.toLowerCase().includes(filterLocation.toLowerCase());
      const jobTypeMatch = filterJobType === 'all' || job.jobType === filterJobType;
      const experienceMatch =
        filterExperience === 'all' || job.experienceLevel === filterExperience;

      return (
        titleMatch &&
        locationMatch &&
        filterLocationMatch &&
        jobTypeMatch &&
        experienceMatch
      );
    });
  }, [searchTitle, searchLocation, filterLocation, filterJobType, filterExperience]);

  const handleSearch = (jobTitle: string, location: string) => {
    setSearchTitle(jobTitle);
    setSearchLocation(location);
  };

  const handleClearFilters = () => {
    setSearchTitle('');
    setSearchLocation('');
    setFilterLocation('all');
    setFilterJobType('all');
    setFilterExperience('all');
  };

  const uniqueLocations = Array.from(new Set(jobsData.map((job) => job.location)));
  const uniqueJobTypes = Array.from(new Set(jobsData.map((job) => job.jobType)));
  const uniqueExperience = Array.from(new Set(jobsData.map((job) => job.experienceLevel)));

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary/5 py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Browse All Jobs
            </h1>
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-20 bg-card p-6 rounded-lg border border-border space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Filters</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleClearFilters}
                      className="w-full"
                    >
                      Clear All
                    </Button>
                  </div>

                  {/* Location Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Location</label>
                    <Select value={filterLocation} onValueChange={setFilterLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="All locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        {uniqueLocations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Job Type Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Job Type</label>
                    <Select value={filterJobType} onValueChange={setFilterJobType}>
                      <SelectTrigger>
                        <SelectValue placeholder="All types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {uniqueJobTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience Level Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Experience Level
                    </label>
                    <Select value={filterExperience} onValueChange={setFilterExperience}>
                      <SelectTrigger>
                        <SelectValue placeholder="All levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        {uniqueExperience.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </aside>

              {/* Jobs Grid */}
              <div className="lg:col-span-3">
                {filteredJobs.length > 0 ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Found {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredJobs.map((job) => (
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
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground mb-4">
                      No jobs found matching your criteria
                    </p>
                    <Button variant="outline" onClick={handleClearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { JobCard } from '@/components/JobCard';
import { jobsData } from '@/lib/jobData';
import { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('applications');
  const [profileName, setProfileName] = useState('John Doe');
  const [profileEmail, setProfileEmail] = useState('john@example.com');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  // Mock data for applications and saved jobs
  const applications = jobsData.slice(0, 3).map((job) => ({
    ...job,
    appliedDate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
      .toLocaleDateString(),
    status: ['Applied', 'Under Review', 'Interview Scheduled'][Math.floor(Math.random() * 3)],
  }));

  const savedJobs = jobsData.slice(2, 5);

  const handleUpdateProfile = () => {
    setIsSavingProfile(true);
    setTimeout(() => {
      setIsSavingProfile(false);
      setIsEditingProfile(false);
      alert('Profile updated successfully!');
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-primary/5 py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">My Dashboard</h1>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full max-w-xs grid-cols-3 bg-muted">
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              {/* Applications Tab */}
              <TabsContent value="applications" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">My Applications</h2>
                  <p className="text-sm text-muted-foreground">
                    {applications.length} application{applications.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="space-y-4">
                  {applications.map((app) => (
                    <Card key={app.id}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground">{app.title}</h3>
                            <p className="text-sm text-muted-foreground">{app.company}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              Applied: {app.appliedDate}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-xs font-medium text-muted-foreground uppercase">
                                Status
                              </p>
                              <p className="text-sm font-semibold text-primary">{app.status}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Saved Jobs Tab */}
              <TabsContent value="saved" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">Saved Jobs</h2>
                  <p className="text-sm text-muted-foreground">
                    {savedJobs.length} job{savedJobs.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedJobs.map((job) => (
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
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">My Profile</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {!isEditingProfile ? (
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">
                            Full Name
                          </p>
                          <p className="text-lg font-medium text-foreground">{profileName}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">
                            Email Address
                          </p>
                          <p className="text-lg font-medium text-foreground">{profileEmail}</p>
                        </div>
                        <Button
                          onClick={() => setIsEditingProfile(true)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Edit Profile
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Full Name
                          </label>
                          <Input
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            value={profileEmail}
                            onChange={(e) => setProfileEmail(e.target.value)}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={handleUpdateProfile}
                            className="bg-primary hover:bg-primary/90"
                            disabled={isSavingProfile}
                          >
                            {isSavingProfile ? 'Saving...' : 'Save Changes'}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setIsEditingProfile(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

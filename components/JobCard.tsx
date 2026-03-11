'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary?: string;
}

export function JobCard({
  id,
  title,
  company,
  location,
  jobType,
  salary,
}: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{company}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">📍</span>
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary">{jobType}</Badge>
          {salary && <Badge variant="secondary">{salary}</Badge>}
        </div>
        <Link href={`/jobs/${id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

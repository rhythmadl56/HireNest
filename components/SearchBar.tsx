'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch?: (jobTitle: string, location: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch?.(jobTitle, location);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Input
        placeholder="Job title, keywords..."
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 bg-card"
      />
      <Input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 sm:max-w-xs bg-card"
      />
      <Button
        onClick={handleSearch}
        className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
      >
        Search
      </Button>
    </div>
  );
}

'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-foreground">
                © 2024 HireNest. All rights reserved.
              </p>
            </div>
            <div className="flex justify-center gap-8">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">
                Your career journey starts here
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

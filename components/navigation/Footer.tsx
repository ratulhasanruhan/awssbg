import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/brand/awssbg-wordmark-light.png" alt="AWS Student Builders Group" width={573} height={128} className="h-9 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-dim">
            A student-led AWS cloud community at {site.institution}. {site.tagline}.
          </p>
          <p className="mt-4 font-mono text-xs text-faint">
            <span className="text-aws-orange">$</span> deploy --region dia-dhaka --mode community<span className="caret" aria-hidden="true">_</span>
          </p>
        </div>
        <div>
          <h2 className="chip-label text-faint">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/#about" className="text-dim hover:text-white">About</Link></li>
            <li><Link href="/events" className="text-dim hover:text-white">Events</Link></li>
            <li><Link href="/team" className="text-dim hover:text-white">Team</Link></li>
            <li><Link href="/constitution" className="text-dim hover:text-white">Constitution</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="chip-label text-faint">Connect</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={site.builderCenterJoin} target="_blank" rel="noopener noreferrer" className="font-semibold text-aws-orange hover:text-white">Join AWS Builder Center</a></li>
            <li><a href={site.meetup} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-white">Meetup</a></li>
            <li><a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-white">Facebook</a></li>
            <li><a href={`mailto:${site.email}`} className="text-dim hover:text-white">{site.email}</a></li>
            <li><a href={site.builderGroups} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-white">About AWS Builder Groups</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            Part of <a href={site.parent.url} className="underline decoration-line underline-offset-4 hover:text-dim">{site.parent.name}</a>. Not an official Amazon Web Services website.
          </p>
          <p>AWS and related marks are trademarks of Amazon.com, Inc. or its affiliates.</p>
        </div>
      </div>
    </footer>
  );
}

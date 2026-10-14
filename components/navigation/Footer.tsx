import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/brand/awssbg-mark.svg" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold">AWS Student Builders Group · DIA</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#667085]">
            Learn · Build · Connect · Create Impact. A student-led AWS cloud community at Daffodil International Academy, under the DIA Programming Club.
          </p>
          <code className="mt-4 block text-xs text-[#ff9900]">build above the ground();</code>
        </div>
        <div className="space-y-2">
          <a href="https://www.facebook.com/awssbgdia" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#667085] hover:text-[#ff9900]">Facebook</a>
          <a href="https://www.meetup.com/aws-sbg-at-daffodil-international-academy/" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#667085] hover:text-[#ff9900]">Meetup</a>
          <a href="mailto:aws@diapc.dev" className="block text-sm text-[#667085] hover:text-[#ff9900]">aws@diapc.dev</a>
          <a href="https://skillbuilder.aws" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#667085] hover:text-[#ff9900]">
            Open AWS Skill Builder
          </a>
          <Link href="https://diapc.dev" className="block text-sm font-semibold text-[#111827] border-b-2 border-[#ff9900] w-fit">
            Back to main site
          </Link>
        </div>
      </div>
      <div className="border-t border-[#e5e7eb] px-6 py-4 text-center text-xs text-[#98a2b3]">
        Not an official AWS website. AWS and related marks belong to Amazon.com, Inc. or its affiliates.
      </div>
    </footer>
  );
}

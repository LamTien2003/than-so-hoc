/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wU6xcDKP66a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";

import Mysterious1 from "@/assets/images/mysterious-1.png";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

const BlogPage = () => {
  return (
    <div className="px-4 py-16 border-t border-gray-800 md:py-12 sm:py-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Latest from the Blog
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-4 md:grid-cols-2">
          <Link href="#" className="group" prefetch={false}>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={Mysterious1}
                alt="Blog post cover"
                width={400}
                height={275}
                className="aspect-video w-full object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                The Surprising Benefits of Mindfulness
              </h3>
              <div className="text-sm text-muted-foreground">
                <span>John Doe</span>
                <span className="mx-2">•</span>
                <span>May 15, 2023</span>
              </div>
              <p className="text-muted-foreground">
                Discover how incorporating mindfulness into your daily life can
                lead to greater focus, reduced stress, and improved overall
                well-being.
              </p>
            </div>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={Mysterious1}
                alt="Blog post cover"
                width={400}
                height={225}
                className="aspect-video w-full object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Unleashing Your Creativity: Tips and Tricks
              </h3>
              <div className="text-sm text-muted-foreground">
                <span>Jane Smith</span>
                <span className="mx-2">•</span>
                <span>June 1, 2023</span>
              </div>
              <p className="text-muted-foreground">
                Explore practical strategies to unlock your creative potential
                and foster innovation in your personal and professional life.
              </p>
            </div>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={Mysterious1}
                alt="Blog post cover"
                width={400}
                height={225}
                className="aspect-video w-full object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Unleashing Your Creativity: Tips and Tricks
              </h3>
              <div className="text-sm text-muted-foreground">
                <span>Jane Smith</span>
                <span className="mx-2">•</span>
                <span>June 1, 2023</span>
              </div>
              <p className="text-muted-foreground">
                Explore practical strategies to unlock your creative potential
                and foster innovation in your personal and professional life.
              </p>
            </div>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={Mysterious1}
                alt="Blog post cover"
                width={400}
                height={225}
                className="aspect-video w-full object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Unleashing Your Creativity: Tips and Tricks
              </h3>
              <div className="text-sm text-muted-foreground">
                <span>Jane Smith</span>
                <span className="mx-2">•</span>
                <span>June 1, 2023</span>
              </div>
              <p className="text-muted-foreground">
                Explore practical strategies to unlock your creative potential
                and foster innovation in your personal and professional life.
              </p>
            </div>
          </Link>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default BlogPage;

import Image from "next/image";

import Mysterious1 from "@/assets/images/mysterious-1.png";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <main className="max-w-[800px] mx-auto px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="dark:prose-invert">
        <div className="my-4 space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Blog Title Goes Here
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Posted on December 24, 2023
          </p>
        </div>
        <p>
          Blog content goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed interdum massa lacus, a porttitor risus gravida
          sed. Nulla ultricies ex non sagittis vulputate.
        </p>

        <figure className="mx-20 my-10">
          <Image
            src={Mysterious1}
            alt="Cover image"
            width={1250}
            height={340}
            className="aspect-video overflow-hidden rounded-lg object-cover"
          />
          <figcaption className="text-center">
            `` Image caption goes here
          </figcaption>
        </figure>
        <p>
          More blog content goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed interdum massa lacus, a porttitor risus gravida
          sed. Nulla ultricies ex non sagittis vulputate.
        </p>
      </article>

      <section className="space-y-6 py-6">
        <h2 className="text-3xl font-extrabold">Comments</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <h3 className="text-lg font-semibold">Username</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Comment content goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed interdum massa lacus, a
                porttitor risus gravida sed. Nulla ultricies ex non sagittis
                vulputate.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <h3 className="text-lg font-semibold">Username</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Comment content goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed interdum massa lacus, a
                porttitor risus gravida sed. Nulla ultricies ex non sagittis
                vulputate.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="comment">Leave a Comment</Label>
          <Textarea placeholder="Type your message here." id="comment" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your comment will be reviewed before publishing.
          </p>
          <Button className="mt-4">Submit Comment</Button>
        </div>
      </section>
    </main>
  );
}

import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function CreateBlogPage() {
  return (
    <>
      <Helmet>
        <title>Create Blog — WriteSphere</title>
      </Helmet>

      <div className="max-w-3xl">
        <h2 className="font-serif text-2xl text-foreground mb-6">Create Blog</h2>
        <Card>
          <CardHeader>
            <CardTitle>New Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter your blog title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" placeholder="e.g., Technology, Lifestyle" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" className="min-h-64" placeholder="Write your blog content here..." />
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline">Save as Draft</Button>
            <Button>Publish</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

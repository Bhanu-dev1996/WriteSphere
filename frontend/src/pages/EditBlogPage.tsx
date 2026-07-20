import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function EditBlogPage() {
  return (
    <>
      <Helmet>
        <title>Edit Blog — WriteSphere</title>
      </Helmet>

      <div className="max-w-3xl">
        <h2 className="font-serif text-2xl text-foreground mb-6">Edit Blog</h2>
        <Card>
          <CardHeader>
            <CardTitle>Edit Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" defaultValue="My Blog Post Title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" defaultValue="Technology" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" className="min-h-64" defaultValue="Blog content goes here..." />
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline">Cancel</Button>
            <div className="flex gap-2">
              <Button variant="secondary">Save as Draft</Button>
              <Button>Update</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

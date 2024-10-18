"use client";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllCategories } from "@/lib/query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Pagewrite() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  console.log(category);

  //usehooks
  const { data: session } = useSession();
  const { data: categories } = useGetAllCategories();

  const router = useRouter();

  if (!session) {
    router.push("/login");
  }

  return (
    <PageContainer>
      <section className="md:max-w-xl md:mx-auto w-full  md:mt-4  mt-4">
        <h1 className="text-center p-4 font-semibold text-2xl">Write a post</h1>
        <Input
          type="file"
          placeholder="choose file No file chose"
          className="mb-6"
        />
        <Input
          type="text"
          placeholder="Title"
          className="mb-6"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="mb-6">
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>

            <SelectContent>
              {categories?.map((category) => (
                <SelectItem key={category.id} value={category.slug}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="content"
        />
        <Button type="submit" className="mt-6">
          Submit
        </Button>
      </section>
    </PageContainer>
  );
}

"use client";

import { CalendarDays, User } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Search from "./_components/Search";
import { format } from "date-fns";

type Project = {
  _id: string;
  projectName: string | null;
  image: string | null;
  description: string | null;
  author: string | null;
  date: Date;
  technologies: string | null;
  repository: string | null;
};

const Posts = () => {
  const [posts, setPosts] = useState<Project[]>([]);

  useEffect(() => {
    fetch(`/api/project`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  const handleDelete = async (projectId: string) => {
    try {
      const response = await fetch(`/api/project/${projectId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        // Remove the deleted post from the state
        setPosts((prevPosts) => prevPosts.filter(post => post._id !== projectId));
      } else {
        console.error("Failed to delete project:", data.error);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <>
      <p className="w-full h-auto text-center font-yeseva text-2xl sm:text-6xl mt-4 my-2">
        Recent Posts
      </p>
      <div className="w-full flex flex-col-reverse md:flex-row mb-5">
        <div className="w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-2">
          {posts.map((post) => (
            <div key={post._id} className="rounded-xl bg-themeforeground shadow-xl flex flex-col p-3">
              <Image
                width={767}
                height={500}
                src={post.image || "/slider/1.png"}
                alt={post.projectName || "Slide"}
                style={{
                  width: "100%",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                priority={true}
                className="rounded-xl !w-full aspect-square"
              />
              <div className="flex flex-col">
                <p className="w-full h-auto text-center font-yeseva text-2xl sm:text-4xl md:text-4xl mt-4 my-2">
                  {post.projectName || "Privacy Policy"}
                </p>
                <div className="flex justify-between my-2">
                  <Label className="flex items-center gap-2 text-sm md:text-lg">
                    <User />
                    {post.author || "Unknown Author"}
                  </Label>
                  <Label className="flex items-center gap-2 text-sm md:text-lg">
                    <CalendarDays /> {format(new Date(post.date), 'dd MMM yyyy') || "Unknown Date"}
                  </Label>
                </div>
                <p className="text-lg my-2 md:text-xl font-yeseva line-clamp-5 md:line-clamp-6">
                  {post.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Button
                    className="w-full"
                    variant={"destructive"}
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </Button>
                  <Button className="w-full">Read More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-start px-5">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Posts;

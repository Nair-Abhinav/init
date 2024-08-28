import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useSliderToggler from "@/store/slider-toggler";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Project = {
  projectName: string | null;
  image: string | null;
  description: string | null;
  author: string | null;
  date: Date;
  technologies: string | null;
  repository: string | null;
};

const CreateProject = () => {
  const [project, setProject] = useState<Project>({
    projectName: null,
    image: null,
    description: null,
    author: null,
    date: new Date(),
    technologies: null,
    repository: null,
  });

  const { isOpen, expanded, setExpanded } = useSliderToggler() as {
    isOpen: boolean;
    expanded: boolean;
    setExpanded: (value: boolean) => void;
  };

  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle image file and convert it to base64
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProject({ ...project, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit function to handle form submission
  const handleSubmit = () => {
    console.log("Project data:", project);
    // You can add your form submission logic here, such as an API call
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className={`w-full font-medium py-5 duration-300 rounded-md ${
            expanded ? "pl-[20px]" : "flex justify-center items-center gap-2"
          } bg-colorOne hover:bg-colorOneLight`}
        >
          <Plus /> {expanded && "Create Project"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            <div className="bg-themeforeground flex flex-col p-3 xl:mx-3 md:mx-3 w-[calc(100% - 4px)] md:w-[calc(100% - 6px)] rounded-xl gap-4">
              {/* Project Name Input */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="projectName">Project Name</Label>
                <Input
                  name="projectName"
                  type="text"
                  className="w-full"
                  placeholder="Enter Project Name"
                  autoComplete="off"
                  value={project.projectName || ""}
                  onChange={(e) =>
                    setProject({ ...project, projectName: e.target.value })
                  }
                />
              </div>

              {/* Description Input */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="description">Description</Label>
                <Input
                  name="description"
                  type="text"
                  className="w-full"
                  placeholder="Enter Description"
                  autoComplete="off"
                  value={project.description || ""}
                  onChange={(e) =>
                    setProject({ ...project, description: e.target.value })
                  }
                />
              </div>

              {/* Author Input */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="author">Author</Label>
                <Input
                  name="author"
                  type="text"
                  className="w-full"
                  placeholder="Enter Author"
                  autoComplete="off"
                  value={project.author || ""}
                  onChange={(e) =>
                    setProject({ ...project, author: e.target.value })
                  }
                />
              </div>
              {/* Technologies Input */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="technologies">Technologies</Label>
                <Input
                  name="technologies"
                  type="text"
                  className="w-full"
                  placeholder="Enter Technologies"
                  autoComplete="off"
                  value={project.technologies || ""}
                  onChange={(e) =>
                    setProject({ ...project, technologies: e.target.value })
                  }
                />
              </div>

              {/* Repository Input */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="repository">Repository</Label>
                <Input
                  name="repository"
                  type="text"
                  className="w-full"
                  placeholder="Enter Repository"
                  autoComplete="off"
                  value={project.repository || ""}
                  onChange={(e) =>
                    setProject({ ...project, repository: e.target.value })
                  }
                />
              </div>

              {/* Image Input */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="image">Image</Label>
                <Input
                  name="image"
                  type="file"
                  className="w-full"
                  onChange={handleImageChange}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button onClick={handleSubmit} className="bg-colorOne hover:bg-colorOneLight">
                  Submit
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProject;

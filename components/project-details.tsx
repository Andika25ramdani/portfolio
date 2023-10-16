import { mergeClasses } from "@/lib/utils";
import { Project as ProjectDetailsType } from "@/constants/projects";
import Card from "./layouts/card";
import Image from "next/image";
import Typography from "./typography";
import Tag from "./layouts/tag";

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: "default" | "reverse";
};
const ProjectDetails = ({
  title,
  subtitle,
  description,
  technologies,
  images,
  layoutType = "default",
}: ProjectDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          "flex items-center justify-center border-gray-100 max-md:rounded-t-xl md:w-5/12",
          layoutType === "default"
            ? "md:rounded-l-xl md:border-r"
            : "md:order-last md:rounded-r-xl md:border-l"
        )}
      >
        <Image
          src={images[0]}
          alt={`${title} preview`}
          className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          "flex flex-col gap-6 p-8 md:w-7/12 lg:p-12 text-gray-600",
          layoutType === "default" ? "" : "md:order-first"
        )}
      >
        <Typography variant="h3" className="font-semibold text-gray-900">
          {title}
        </Typography>
        <Typography variant="subtitle">{subtitle}</Typography>
        <Typography variant="body3">{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;

import { seperateTags } from "../../utils/description";
import "../styles/Project.css"

function ProjectDescription({ description, imagesArr }) {
  const tags = seperateTags(description);
  return (
    <div>
      {tags.map((tag) => {
        if (/<.*>/.test(tag)) {
          const images = tag.match(/image\d+/g);
          if (images) {
            return (
              <div key={tag} className="projectImagesContainer">
                {images.map((image) => {
                  const index = parseInt(image.match(/\d+/)[0]);
                  return (
                    <img
                      key={index}
                      src={`/assets/project-photos/${imagesArr[index]}`}
                      alt=""
                    />
                  );
                })}
              </div>
            );
          }
        } else {
          return <p key={tag}>{tag}</p>;
        }
      })}
    </div>
  );
}

export default ProjectDescription;

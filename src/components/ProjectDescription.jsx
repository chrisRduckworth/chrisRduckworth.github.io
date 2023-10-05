import { seperateTags } from "../../utils/description";
import YouTube from "react-youtube-embed";
import "../styles/Project.css";

function ProjectDescription({ description, imagesArr }) {
  const tags = seperateTags(description);
  return (
    <>
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
          const video = tag.match(/^<video:.*/g);
          if (video) {
            const url = video[0].slice(7, video[0].length - 1);
            return <YouTube key={url} id={url} />;
          }
        } else {
          return <p key={tag}>{tag}</p>;
        }
      })}
    </>
  );
}

export default ProjectDescription;

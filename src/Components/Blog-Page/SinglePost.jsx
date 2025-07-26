import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../../client";
import { toPlainText } from "@portabletext/react";
import { LatestNews, OurCourses } from "../HomePageComponents/OurCourses";

export const BlogDetails = () => {
  const [singlePost, setSinglePost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client;
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug]{
    title,
    slug,
    body,
    publishedAt,
     author->{
      name,
      image{
        asset->{
          _id,
          url
        }
      }
    },
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    bodyImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`,
        { slug }
      )
      .then((data) => {
        setSinglePost(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching single post:", error);
        setIsLoading(false);
      });
  }, [slug]);

  const getPublishedYear = () => {
    if (!singlePost?.publishedAt) return "Date not available";
    const date = new Date(singlePost.publishedAt);
    return isNaN(date.getFullYear()) ? "Invalid date" : date.getFullYear();
  };

  const getPreviewText = (blocks) => {
    return toPlainText(blocks).slice(0, 1000) + "...";
  };

  const getPreviewText2 = (blocks) => {
    return toPlainText(blocks).slice(1001) + "...";
  };

  const getPublishedMonth = () => {
    if (!singlePost?.publishedAt) return "Month not available";
    const date = new Date(singlePost.publishedAt);
    return isNaN(date.getMonth())
      ? "Invalid month"
      : date.toLocaleString("default", { month: "long" });
  };
  return (
    <div className="bg-[#363636] text-white">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="w-10/12 mx-auto py-20 space-y-8 ">
          <img src={singlePost.mainImage.asset.url} alt="" />
          <div>
            {/* Author side */}
            <div className=" flex gap-4 " style={{ margin: "20px 0" }}>
              <img
                src={singlePost?.author?.image?.asset?.url}
                alt={singlePost.author.name}
                style={{ width: "60px", borderRadius: "50%" }}
                className="h-16 w-16 object-cover"
              />
              <div>
                <p>{singlePost.author.name}</p>
                <p>{getPublishedMonth(singlePost)}</p>
                <p className="">{getPublishedYear(singlePost)} </p>
              </div>
            </div>

            {/* Category side */}
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{singlePost.title}</h1>
            <p className="text-white/80 mb-6">
              {getPreviewText(singlePost.body)}
            </p>
            {singlePost.bodyImage?.asset?.url && (
              <img
                src={singlePost.bodyImage.asset.url}
                alt={singlePost.bodyImage.alt || "Body Image"}
                className="w-full my-6 rounded"
              />
            )}
            <p className="text-white/80 mb-6">
              {getPreviewText2(singlePost.body)}{" "}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export const YouMayAlsoLike = ({ posts }) => {
  return (
    <section className="w-full bg-[#363636]">
      <div className="w-10/12 mx-auto py-20 ">
        <h2 className="text-3xl font-bold mb-6 text-white">You may also like</h2>
        <LatestNews/>
      </div>
    </section>
  );
};
export const PopularCourses = ({ posts }) => {
  return (
    <section className="w-full bg-[#363636]">
      <div className="w-10/12 mx-auto py-20 ">
        <h2 className="text-3xl font-bold mb-6 text-white">Popular Courses</h2>
        <OurCourses />
      </div>
    </section>
  );
};

export const SinglePost = () => {
  return (
    <div>
      <BlogDetails />
      <YouMayAlsoLike /> 
      <PopularCourses />
    </div>
  );
};

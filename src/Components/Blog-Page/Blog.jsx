import { useState, useEffect } from "react";
import client from "../../client";
import { FiCalendar } from "react-icons/fi";
import { toPlainText } from "@portabletext/react";
import { Link } from "react-router-dom";
import Footer from "../Footer"

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      body,
      bodyImage,
      date,
      publishedAt,
        author->{
            name,
            image
        },
      mainImage{
        asset->{
          _id,
          url
        }, 
        alt
      }
    }`
      )
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const getPreviewText = (blocks) => {
    return toPlainText(blocks).slice(0, 200) + "...";
  };

  const getPublishedYear = (post) => {
    if (!post?.publishedAt) return "Date not available";

    const date = new Date(post.publishedAt);
    return isNaN(date.getFullYear()) ? "Invalid date" : date.getFullYear();
  };

  return (
    <>
      <section className="bg-gray-800 py-20 space-y-12">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bodyImagePro.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "calc(10/12 * 100%)"
          }}
          className="h-44 w-10/12 mx-auto flex flex-col  items-center justify-center"
        >
          <div className="text-center space-y-4">
            <h2 className="font-bold text-white text-4xl  text center ">
              Our Blog
            </h2>
            <p className="text-white/80">Read our latest news and articles</p>
          </div>
        </div>

        <Link to={`/blog/${posts[0]?.slug?.current}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto  gap-6 p-6">
            {posts.map((post) => (
              <article
                key={post.slug.current}
                className="max-w-2xl space-y-6 mx-auto p-6 rounded-lg mb-6"
              >
                <img src={post.mainImage.asset.url} alt={post.title} />
                <h4 className="font-extrabold text-white text-2xl ">
                  {post.title}
                </h4>
                <p className="line-clamp-3 text-white/80">
                  {getPreviewText(post.body)}
                </p>
                <span className="flex items-center gap-2 text-white/80 mt-2">
                  <FiCalendar size={20} className="text-white" />
                  <p>{getPublishedYear(post)}</p>
                </span>
              </article>
            ))}
          </div>
        </Link>
        <Footer/>
      </section>
    </>
  );
};

export default Blog;

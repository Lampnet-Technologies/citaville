import { useState, useEffect } from "react";
import client from "../../client";
import { FiCalendar } from "react-icons/fi";
import { toPlainText } from "@portabletext/react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import BackButton from "../BackButton";

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
    <BackButton />
      <section className="bg-gray-900 py-20 space-y-12">
        {/* Hero/Header */}
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bodyImagePro.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="h-52 md:h-64 lg:h-80 w-11/12 mx-auto flex flex-col items-center justify-center rounded-xl shadow-lg"
        >
          <div className="text-center space-y-3">
            <h2 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl">
              Our Blog
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Read our latest news and articles
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug.current}
              to={`/blog/${post.slug.current}`}
              className="group"
            >
              <article className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-extrabold text-white text-xl sm:text-2xl mb-2">
                    {post.title}
                  </h4>
                  <p className="text-white/80 text-sm sm:text-base line-clamp-3 flex-1">
                    {getPreviewText(post.body)}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-white/80 text-sm">
                    <FiCalendar className="text-white" />
                    <p>{getPublishedYear(post)}</p>
                  </div>
                  <button className="mt-4 self-start px-4 py-2 bg-gradient-to-tr from-[#39B54A] to-[#83D47B] text-white font-semibold rounded-lg shadow-md group-hover:shadow-lg transition">
                    Read More
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;

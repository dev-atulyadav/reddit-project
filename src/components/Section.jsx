import React from "react";
import { HashLoader } from "react-spinners";

const Section = ({ loading, data }) => {
  console.log(data);

  return loading ? (
    <div className="top-0 absolute bg-black z-10 flex justify-center items-center h-screen w-full">
      <HashLoader color={"#fff"} size={80} />
    </div>
  ) : (
    <section className="mt-20 grid grid-cols-4 p-5 gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-start gap-2 border rounded-xl flex-col p-4"
        >
          <span className="text-sm flex justify-center items-center gap-1">
            <p>Posted by :</p>
            <a
              href={"https://www.reddit.com/user/" + item.data.author}
              target="_blank"
              className=" text-gray-400 underline hover:no-underline"
            >
              u/{item.data.author}
            </a>
          </span>
          <a
            className="text-gray-400 text-sm hover:underline"
            href={"https://reddit.com/" + item.data.subreddit_name_prefixed}
            target="_blank"
          >
            {item.data.subreddit_name_prefixed}
          </a>
          <h2>{item.data.title}</h2>

          <a
            className="px-6 py-3  rounded-xl bg-orange-700"
            target="_blank"
            href={"https://reddit.com" + item.data.permalink}
          >
            Visit
          </a>
          <span>{item.data.score} points</span>
          <span>{item.data.num_comments} comments</span>
        </div>
      ))}
    </section>
  );
};

export default Section;

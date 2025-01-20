import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const RightSideBar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title:
        "How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?",
    },
    {
      _id: "2",
      title:
        "What are the benefits and trade-offs of using Server-Side Rendering (SSR) in Next.js?",
    },
    {
      _id: "3",
      title: "How to center a div?",
    },
    {
      _id: "4",
      title:
        "Node.js res.json() and res.send(), not working but still able to change status code",
    },
    {
      _id: "5",
      title: "ReactJs or NextJs for begginers i ask for advice",
    },
  ];

  const popularTags = [
    { _id: "1", name: "javascript", totalQuestions: 5 },
    { _id: "2", name: "redux", totalQuestions: 6 },
    { _id: "3", name: "next js", totalQuestions: 10 },
    { _id: "4", name: "vue js", totalQuestions: 8 },
    { _id: "5", name: "Angular js", totalQuestions: 3 },
  ];
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px] custom-scrollbar gap-5 ">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((item) => {
            return (
              <Link
                className="flex cursor-pointer items-center justify-between gap-7"
                href={`/questions/${item._id}`}
                key={item._id}
              >
                <p className="body-medium text-dark500_light700">
                  {item.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((item) => {
            return (
              <RenderTag
                key={item._id}
                name={item.name}
                totalQuestions={item.totalQuestions}
                _id={item._id}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;

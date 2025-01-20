import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearchBar from "@/components/shared/Search/LocalSearchBar";
import Filter from "@/components/shared/Filters/Filter";
import { HomePageFilters } from "@/constants";
import HomeFilters from "@/components/shared/Filters/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";

const questions = [
  {
    _id: "1", // Ensuring _id is a string
    title: "Cascading Deletes in SQLAlchemy",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1", // Ensuring _id is a string
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg", // Adding a picture field
    },
    upvotes: 50000,
    views: 10000000,
    answers: [{}], // Changing answers to an array of objects
    createdAt: new Date("2024-01-13T10:00:00Z"), // Ensuring createdAt is a Date object
  },
  {
    _id: "2", // Ensuring _id is a string
    title: "How to center a div",
    tags: [
      { _id: "3", name: "css" }, // Fixed casing in tag name
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "2", // Ensuring _id is a string
      name: "Rohn Doe",
      picture: "https://example.com/rohndoe.jpg", // Adding a picture field
    },
    upvotes: 190000,
    views: 30000,
    answers: [{}], // Changing answers to an array of objects
    createdAt: new Date("2022-01-20T15:30:00Z"), // Ensuring createdAt is a Date object
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions?.length > 0 ? (
          questions?.map((question) => {
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;

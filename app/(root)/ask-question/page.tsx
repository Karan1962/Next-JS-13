import Question from "@/components/shared/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const AskQuestion = async () => {
  const userId = "clerk_123456";
  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });
  const stringifiedId = JSON.stringify(mongoUser._id);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={stringifiedId} />
      </div>
    </div>
  );
};

export default AskQuestion;

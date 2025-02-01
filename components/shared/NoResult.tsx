import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  linkTitle: string;
  description: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        alt="No result illustration"
        src="/assets/images/light-illustration.png"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        alt="No result illustration"
        src="/assets/images/dark-illustration.png"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark200_light900">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={link}>
        <Button className="primary-gradient mt-5 min-h-[46px] px-4 py-3 !text-light-900">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;

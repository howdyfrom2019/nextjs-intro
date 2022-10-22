import {useRouter} from "next/router";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";

type MovieDetailParams = [string, string] | [];

const Detail = ({ params } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  console.log(params);
  const [title, id] = (router.query.params || []) as MovieDetailParams;
  return (
    <div>
      <h4>{title || "Loading...."}</h4>
    </div>
  )
}

export default Detail;

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const params = ctx.params;
  return {
    props: {
      params
    },
  }
}
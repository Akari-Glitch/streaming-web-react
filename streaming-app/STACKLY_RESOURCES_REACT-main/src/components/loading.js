import { useLoading, BallTriangle } from "@agney/react-loading";

export default function Content() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <BallTriangle width="100" color="white" />,
  });

  return <section {...containerProps}>{indicatorEl}</section>;
}

import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const { name } = props.params;
  return (
    <div>
      <div>
        Hello {name}!
      </div>
      <div>
        URL: {props.url.href}
        <br />Route: {props.route}
        <br />URL: {props.destination}
      </div>
    </div>
  );
}

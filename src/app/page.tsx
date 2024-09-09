import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <h1>hi</h1>
      </Suspense>
    </>
  );
}

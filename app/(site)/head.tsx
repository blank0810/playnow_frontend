// app/head.tsx or pages/_document.tsx (depending on your structure)
export default function Head() {
  return (
    <>
      <title>PLAYNOW - A Web for Vouchers and Discounts</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Built with Next.js and TypeScript" />

      {/* Favicon */}
      <link rel="icon" href="/images/logo/head-logo.png" type="image/png" />
      <link rel="shortcut icon" href="/images/logo/head-logo.png" type="image/png" />
    </>
  );
}

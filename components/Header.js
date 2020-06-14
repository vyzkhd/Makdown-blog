import Link from 'next/link'

export default function Header(props) {
  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
          <h1>{props.siteTitle}</h1>
        </Link>

        <main>
          <p className="intro">This is a simple blog created by Vyshakh.</p>
          <p className="footer">
            Built with Next.js, and deployed on <img src="/vercel.svg" />
          </p>
        </main>
      </nav>

      <style jsx>
        {`
          h1 {
            margin-bottom: 0;
            color: black;
            font-weight: bold;
          }
          .footer {
            margin-top: 450px;
          }
          .intro {
            color: #a9a9a9;
          }
          img {
            height: 15px;
          }
          h1:hover {
            cursor: pointer;
          }
          .nav {
            background: #fffaf0;
          }

          @media (min-width: 768px) {
            .header {
              height: 100vh;
              position: fixed;
              left: 0;
              top: 0;
            }
            .nav {
              padding: 2rem;
              width: 30vw;
              height: 100%;
              border-right: 1px solid #ebebeb;
              border-bottom: 1px solid green;

              align-items: flex-start;
            }
          }
        `}
      </style>
    </header>
  )
}

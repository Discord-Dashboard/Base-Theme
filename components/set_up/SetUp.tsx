import Link from 'next/link';

export default function SetUp() {
  return (
    <div className="bg-white">
      <div className="px-6 py-16 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Discord-Dashboard
          </h2>
          <h2 className="bg-gradient-to-r from-purple-900 via-purple-600 to-pink-400 text-transparent bg-clip-text text-3xl mt-2 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Base Theme
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            To get started, you need to set up the theme! This process will help
            you customize the appearance and feel of your dashboard to match
            your preferences. You can choose between different color schemes,
            layouts, and other visual settings to create a personalized
            experience. Once your theme is set up, you’ll be able to fully enjoy
            all the features and functionalities our dashboard has to offer.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/theme"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
            <a
              href="/theme/docs"
              target={'_blank'}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Documentation <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { categories, quickLinks, popularTags } from '@/assets/data.ts'
import logo from '/misercom_logo.png'
const Footer = () => {
  return (
    <>
      <footer className="mt-auto text-white bg-gray-900 pt-16 pb-8 text-nowrap">
        <div className="section md:flex md:flex-wrap md:gap-6 md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="mb-2">
              <div className="flex gap-2 items-center text-white mb-4">
                <img src={logo} alt="Misercom Logo" className="w-14 h-14" />
                <h1 className="text-3xl font-extrabold">Misercom</h1>
              </div>
            </div>
            <div className="my-4 flex flex-col gap-2">
              <p className="text-gray-300 text-sm">Customer Supports:</p>
              <h3 className="text-gray-00 text-lg font-bold">
                (256) 777777777
              </h3>
            </div>
            <div className="my-4">
              <h4 className="text-gray-300">Kampala, Uganda</h4>
            </div>
            <div className="mt-2">
              <a
                href="mailto:misercom@gmail.com"
                className="text-gray-00 font-bold"
              >
                misercom@gmail.com
              </a>
            </div>
          </div>
          {/*        Top Categories*/}
          <div className="mb-8 md:mb-0">
            <div className="mb-6 mt-2">
              <h2 className="text-2xl text-gray-00 font-bold">TOP CATEGORY</h2>
            </div>
            <div className="flex flex-col gap-4 text-gray-300 text-sm">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="block hover:text-gray-00 transition-all duration-250"
                >
                  {category}
                </a>
              ))}
            </div>
            <h4 className="mt-6 text-warning-500 flex gap-2 items-center">
              <a href={'/products'}>Browse All Products</a>{' '}
              <i className="fa-solid fa-arrow-right" />
            </h4>
          </div>
          {/*        Quick Links*/}
          <div className="mb-8 md:mb-0">
            <div className="mb-6 mt-2">
              <h2 className="text-2xl text-gray-00 font-bold">QUICK LINKS</h2>
            </div>
            <div className="flex flex-col gap-4 text-gray-300 text-sm">
              {quickLinks.map(({ name, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="block hover:text-gray-00 transition-all duration-250"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
          {/*        Popular Tags*/}
          <div className="mb-8 md:mb-0 max-w-[15.625rem]">
            <div className="mb-6 mt-2">
              <h2 className="text-2xl text-gray-00 font-medium">
                POPULAR TAGS
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap text-gray-00 font-bold text-sm">
              {popularTags.map(({ name, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="border-[1px] w-fit p-2 hover:bg-gray-800 focus:bg-gray-800 border-gray-00"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-divider mt-20" />
        <div className="text-center text-gray-300 pt-8 text-wrap">
          <p>
            Misercom - eCommerce Template © {new Date().getFullYear()}. Design
            by Ssaava Emma
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer

import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import TitleSection from "@/components/TitleSection";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section id="not-found" className="hashSection sm:rounded-xl rounded-sm p-6 pb-18 active" >
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="404"
        title="Page"
        titleHigh="Not Found"
        titleHighMd="Page Not Found"
      />

      <SectionBlock className="pt-10">
        <TitleSection
          leftBorder={true}
          title="– Looks like this component didn’t mount."
          titleHigh="404"
          highFirst
        />

        <div className="content flex lg:flex-row md:flex-col flex-col items-center gap-8">
          <Image
            src={`/images/404.png`}
            alt="Logo monitor"
            width={256}
            height={256}
            sizes="(max-width: 1024px) 160px, (max-width: 1280px) 208px, 256px"
          />

          <p className="xl:text-base text-xs self-start">
            The page you're looking for either doesn’t exist, was moved, or never got deployed. But don’t worry - you’re still in the right place to explore my work.
          </p>
        </div>
        <div className="buttons flex flex-wrap justify-evenly pt-16">
          <Link className="form-button-submit rounded-xl w-[200px] lg:py-2 py-1 lg:px-3.5 px-2 text-center m-4" href="/about">Back to Home</Link>

          <Link className="form-button-submit rounded-xl w-[200px] lg:py-2 py-1 lg:px-3.5 px-2 text-center m-4" href="/portfolio">See my Projects</Link>
        </div>
      </SectionBlock>

    </section>
  )
}